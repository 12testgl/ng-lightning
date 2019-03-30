import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef, OnDestroy, OnChanges,
  SimpleChanges, Output, EventEmitter, Renderer2, HostListener } from '@angular/core';
import { OverlayRef, Overlay, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { ESCAPE } from '@angular/cdk/keycodes';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject, merge, Subscription } from 'rxjs';
import { map, filter, mapTo, distinctUntilChanged } from 'rxjs/operators';
import { NglPopover } from './popover';
import { POSITION_MAP, DEFAULT_POPOVER_POSITIONS, getPlacementName, Placement } from '../util/overlay-position';
import { hasObservers } from '../util/hasObservers';
import { toBoolean, InputBoolean } from '../util/convert';

export type Size = 'small' | 'medium' | 'large' | 'full-width';
export type Variant = 'walkthrough' | 'feature' | 'warning' | 'error' | 'panel';

@Directive({
  selector: '[nglPopover]',
  exportAs: 'nglPopover',
})
export class NglPopoverTrigger implements OnChanges, OnDestroy {

  /**
   * The body as string or the connected template reference to show.
   */
  @Input('nglPopover') template: string | TemplateRef<void>;

  /**
   * The header as string or the connected template reference to show.
   */
  @Input('nglPopoverHeader') header: string | TemplateRef<void>;

  /**
   * The footer as string or the connected template reference to show.
   */
  @Input('nglPopoverFooter') footer: string | TemplateRef<void>;

  /**
   * Determines the variant of the popover.
   */
  @Input('nglPopoverVariant') variant: Variant;

  /**
   * Determines the size of the popover.
   */
  @Input('nglPopoverSize') size: Size;

  /**
   * Position relative to host element.
   */
  @Input('nglPopoverPlacement')
  set placement(_placement: Placement) {
    _placement = _placement || 'top';
    if (_placement === this._placement) {
      return;
    }

    this._placement = _placement;

    if (this.overlayRef) {
      this.updatePosition();
    }
  }
  get placement() {
    return this._placement;
  }

  /**
   * Whether the floating popover is visible.
   */
  @Input('nglPopoverOpen')
  set nglOpen(_open: any) {
    _open = toBoolean(_open) && (['backdrop', 'x', 'escape'].indexOf(_open) === -1);
    _open ? this.create() : this.detach();
    this._open = _open;
  }
  get nglOpen() {
    return this._open;
  }

  /**
   * Close button title (and assistive text).
   */
  @Input('nglPopoverCloseTitle') closeTitle = 'Close dialog';

  @Input('nglPopoverClass') popoverClass: any;

  /**
	 * Whether or not to override the close button's visibility, if `nglPopoverOpenChange` is set.
	 */
  @Input('nglPopoverCloseVisible') @InputBoolean() closeVisible = true;

  /** Emit an event when actual popover is shown or hidden */
  @Output() nglPopoverOpenChange = new EventEmitter<any>();

  @hasObservers('nglPopoverOpenChange') canClose: boolean;

  /** Names of properties that should be proxy to child component. */
  private needProxyProperties = new Set([
    'template',
    'header',
    'footer',
    'placement',
    'variant',
    'size',
    'closeTitle',
    'canClose',
    'popoverClass',
    'closeVisible',
  ]);
  private _placement: Placement = 'top';
  private _open: boolean;
  private portal: ComponentPortal<NglPopover>;
  private overlayRef: OverlayRef | null;
  private popover: NglPopover | null;
  private backdrop = new Subject<void>();
  private closeSubscription: Subscription;
  private positionChangesSubscription: Subscription;
  private globalClickEventUnsubscriber: Function = null;
  private clickEventUnsubscriber: Function = null;
  private globalClickTimeout: number;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nglOpen && !changes.nglOpen.firstChange) {
      const open = changes.nglOpen.currentValue;
      if (!toBoolean(open) || open === 'x' || open === 'escape') {
        this.element.nativeElement.focus();
      }
    }

    if (this.nglOpen) {
      this.updateProxies(changes);

      Promise.resolve().then(() => {
        if (this.overlayRef) {
          this.overlayRef.updatePosition();
        }
      });

      this.popover.markForCheck();
    }
  }

  @HostListener('click', ['$event'])
  onclick(evt: Event) {
    evt.preventDefault();
    this.toggle();
  }

  ngOnDestroy(): void {
    this.detach();
    this.close();
  }

  private open(): void {
    if (!this.nglOpen) {
      this.nglPopoverOpenChange.emit(true);
    }
  }

  private close(reason: any = false): void {
    if (this.nglOpen) {
      this.nglPopoverOpenChange.emit(reason);
    }
  }

  private toggle(): void {
    this.nglOpen ? this.close() : this.open();
  }

  private create(): void {
    if (this.nglOpen) {
      return;
    }

    this.detach();

    const overlayRef = this.createOverlay();

    this.portal = this.portal || new ComponentPortal(NglPopover, this.viewContainerRef);
    this.popover = overlayRef.attach(this.portal).instance;

    this.needProxyProperties.forEach(property => this.updatePopover(property, this[ property ]));
    this.popover.markForCheck();

    this.clearGlobalClickTimeout();
    this.globalClickTimeout = setTimeout(() => {
      this.subscribeToClickEvents();
    });

    this.closeSubscription = this.popoverClosingActions()
      .subscribe(reason => this.close(reason));
  }

  /** Detaches the currently attached popover. */
  private detach(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.overlayRef = null;
    }

    this.unsubscribeFromClickEvents();

    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
      this.closeSubscription = null;
    }

    if (this.positionChangesSubscription) {
      this.positionChangesSubscription.unsubscribe();
      this.positionChangesSubscription = null;
    }

    this.popover = null;
  }

  /** Create the overlay config and position strategy */
  private createOverlay(): OverlayRef {
    if (this.overlayRef) {
      return this.overlayRef;
    }

    // Create connected position strategy that listens for scroll events to reposition.
    const strategy = this.overlay.position()
      .flexibleConnectedTo(this.element)
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withPush(false);

    this.positionChangesSubscription = strategy.positionChanges
      .pipe(map(change => getPlacementName(change, this.placement)), distinctUntilChanged())
      .subscribe((placement: Placement) => {
        this.updatePosition();
        this.updatePopover('placement', placement);
        this.popover.markForCheck();
      });

    this.overlayRef = this.overlay.create({
      positionStrategy: strategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    this.updatePosition();

    return this.overlayRef;
  }

  /** Updates the position of the current popover. */
  private updatePosition(): void {
    const position = <FlexibleConnectedPositionStrategy>this.overlayRef.getConfig().positionStrategy;

    position.withPositions([
      POSITION_MAP[this.placement].position,
      ...DEFAULT_POPOVER_POSITIONS,
    ]);
  }

  private updatePopover(key: string, value: any): void {
    this.popover[ key ] = value;
  }

  /** Set inputs of child components when this component's inputs change. */
  private updateProxies(changes: SimpleChanges): void {
    Object.keys(changes)
      .filter(key => this.needProxyProperties.has(key))
      .forEach(key => this.updatePopover(key, this[key]));
  }

  /** Returns a stream that emits whenever an action that should close the popover occurs. */
  private popoverClosingActions() {
    const backdrop = this.backdrop.pipe(mapTo('backdrop'));
    const close = this.popover.close.pipe(mapTo('x'));
    const escape = this.overlayRef.keydownEvents().pipe(filter(event => event.keyCode === ESCAPE), mapTo('escape'));
    return merge(backdrop, close, escape);
  }

  private handleGlobalClickEvent($event: any) {
    if ($event.$nglStop) {
      return;
    }
    this.backdrop.next();
  }

  private subscribeToClickEvents() {
    this.unsubscribeFromClickEvents();

    // Prevent document listener to close it, since click happened inside
    this.clickEventUnsubscriber = this.renderer.listen(this.popover.element.nativeElement, 'click', ($event: any) => $event.$nglStop = true);

    this.globalClickEventUnsubscriber = this.renderer.listen('document', 'click', this.handleGlobalClickEvent.bind(this));
  }

  private unsubscribeFromClickEvents() {
    if (this.clickEventUnsubscriber) {
      this.clickEventUnsubscriber();
      this.clickEventUnsubscriber = null;
    }

    if (this.globalClickEventUnsubscriber) {
      this.globalClickEventUnsubscriber();
      this.globalClickEventUnsubscriber = null;
    }
  }

  private clearGlobalClickTimeout() {
    clearTimeout(this.globalClickTimeout);
  }
}
