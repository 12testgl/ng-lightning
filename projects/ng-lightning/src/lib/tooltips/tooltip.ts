import { Component, ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { Placement, POSITION_MAP } from '../util/overlay-position';
import { HostService } from '../common/host/host.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'div[ngl-tooltip]',
  templateUrl: './tooltip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
  host: {
    'role': 'tooltip',
    '[class.slds-popover]': 'true',
    '[class.slds-popover_tooltip]': 'true',
  }
})
export class NglTooltip {

  template: string | TemplateRef<void>;

  set placement(placement: Placement) {
    this._nubbin = POSITION_MAP[placement].nubbin;
    this.setHostClass();
    this.cd.detectChanges();
  }

  @HostBinding('attr.id') uid: any;

  private _nubbin: Placement;

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    private hostService: HostService,
    private cd: ChangeDetectorRef) {}

    markForCheck() {
    this.cd.markForCheck();
  }

  private setHostClass() {
    this.hostService.updateClass(this.element, {
      [`slds-nubbin_${this._nubbin}`]: !!this._nubbin,
      [`slds-m-${this._nubbin}_small`]: !!this._nubbin,
    });
  }
}
