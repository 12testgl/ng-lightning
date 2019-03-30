import { Component, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef,
  TemplateRef, ElementRef, Renderer2, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { uniqueId, ngClassCombine } from '../util/util';
import { Placement, POSITION_MAP, getPlacementStyles } from '../util/overlay-position';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Variant, Size } from './trigger';
import { HostService } from '../common/host/host.service';
import { isTemplateRef } from '../util/check';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'section[ngl-popover]',
  templateUrl: './popover.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
  host: {
    'role': 'dialog',
    '[class.slds-popover]': 'true',
  },
})
export class NglPopover implements OnInit, OnDestroy {

  template: string | TemplateRef<void>;

  header: string | TemplateRef<void>;

  footer: string | TemplateRef<void>;

  closeTitle: string;

  closeVisible: boolean;

  set popoverClass(popoverClass: any) {
    this._popoverClass = popoverClass;
    this.setHostClass();
  }
  get popoverClass() {
    return this._popoverClass;
  }

  set size(size: Size) {
    this._size = size;
    this.setHostClass();
  }

  set variant(variant: Variant) {
    this._variant = variant;
    this.inverseCloseButton = ['walkthrough', 'feature', 'error'].indexOf(this._variant) > -1;
    this.setHostClass();
  }

  set placement(placement: Placement) {
    this._nubbin = POSITION_MAP[placement].nubbin;
    this.setHostClass();
  }

  @HostBinding('attr.aria-labelledby')
  get labelledby() {
    return this.header ? `${this.uid}-heading` : null;
  }

  @HostBinding('attr.aria-describedby')
  get describedby() {
    return this.template ? this.uid : null;
  }

  close = new EventEmitter();

  isTemplateRef = isTemplateRef;
  canClose: boolean;
  uid = uniqueId('popover');
  inverseCloseButton: boolean;

  private _nubbin: Placement;
  private _size: Size;
  private _variant: Variant;
  private _popoverClass: any;

  /** The class that traps and manages focus within the dialog. */
  private focusTrap: FocusTrap;

  constructor(
    private hostService: HostService,
    public element: ElementRef,
    public renderer: Renderer2,
    private focusTrapFactory: FocusTrapFactory,
    private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.focusTrap = this.focusTrapFactory.create(this.element.nativeElement);
    this.focusTrap.focusInitialElementWhenReady();
  }

  ngOnDestroy() {
  if (this.focusTrap) {
      this.focusTrap.destroy();
      this.focusTrap = null;
    }
  }

  markForCheck() {
    this.cd.markForCheck();
  }

  onClose() {
    this.close.emit();
  }

  private setHostClass() {
    this.hostService.updateClass(this.element, ngClassCombine(this.popoverClass, {
      [`slds-nubbin_${this._nubbin}`]: true,
      [`slds-popover_${this._size}`]: !!this._size,
      [`slds-popover_walkthrough`]: this._variant === 'feature',
      [`slds-popover_${this._variant}`]: !!this._variant,
    }));

    this.hostService.updateStyle(this.element, getPlacementStyles(this._nubbin));
  }

}
