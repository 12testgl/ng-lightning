import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, Output, Renderer2 } from '@angular/core';
import { isInt } from '../../util/util';

@Directive()
export abstract class NglCommonNotify implements OnDestroy {

  /**
   * The type of alert.
   */
  @Input() set variant(variant: 'error' | 'info' | 'success' | 'warning') {
    this.toggleThemeClass(false, this.variant);
    this._variant = variant;
    this.toggleThemeClass(true, this.variant);
  }
  get variant() {
    return this._variant || 'info';
  }

  @Input() iconName: string;

  @Input() assistiveText;
  @Input() closeButtonAssistiveText = 'Close' ;

  /**
   * The number of milliseconds after which, the close event will be triggered with an emitted reason of `'timeout'`.
   */
  @Input() set duration(duration: number) {
    this.clearTimeout();
    if (isInt(duration) && duration >= 0) {
      this.currentTimeout = setTimeout(() => this.close('timeout'), +duration);
    }
  }

  /**
   * Triggered by close button or duration timeout.
   */
  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('close') closeEventEmitter = new EventEmitter<string>();

  set dismissible(dismissible: boolean) {
    this._dismissible = dismissible;
    this.cd.markForCheck();
  }
  get dismissible() {
    return this._dismissible;
  }

  private _dismissible: boolean;

  private currentTimeout: any = null;

  private _variant: 'error' | 'info' | 'success' | 'warning';

  constructor(private element: ElementRef, private renderer: Renderer2, private cd: ChangeDetectorRef, @Inject('type') type: string) {
    this.renderer.addClass(this.element.nativeElement, 'slds-notify');
    this.renderer.addClass(this.element.nativeElement, `slds-notify_${type}`);
    this.toggleThemeClass(true, this.variant);
    this.renderer.setAttribute(this.element.nativeElement, 'role', type === 'toast' ? 'status' : 'alert');
  }

  close(reason?: string, $event?: Event) {
    this.clearTimeout();
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    this.closeEventEmitter.emit(reason);
  }

  ngOnDestroy() {
    this.clearTimeout();
  }

  private clearTimeout() {
    if (this.currentTimeout !== null) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }
  }

  private toggleThemeClass(isAdd: boolean, klass: string) {
    if (!klass) { return; }

    const el = this.element.nativeElement;
    this.renderer[isAdd ? 'addClass' : 'removeClass'](el, `slds-theme_${klass}`);
  }
}
