import { Component, ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { Placement, POSITION_MAP, getPlacementStyles } from '../util/overlay-position';
import { HostService } from '../common/host/host.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'div[ngl-tooltip]',
  templateUrl: './tooltip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
})
export class NglTooltip {

  template: string | TemplateRef<void>;

  set placement(placement: Placement) {
    this._nubbin = POSITION_MAP[placement].nubbin;
    this.setHostClass();
  }

  set uid(id: string) {
    this.renderer.setAttribute(this.element.nativeElement, 'id', id);
  }

  private _nubbin: Placement;

  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private hostService: HostService,
              private cd: ChangeDetectorRef) {
    this.renderer.addClass(this.element.nativeElement, 'slds-popover');
    this.renderer.addClass(this.element.nativeElement, 'slds-popover_tooltip');
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'tooltip');
  }

  markForCheck() {
    this.cd.markForCheck();
  }

  private setHostClass() {
    this.hostService.updateClass(this.element, {
      [`slds-nubbin_${this._nubbin}`]: true,
    });

    this.hostService.updateStyle(this.element, getPlacementStyles(this._nubbin));
  }
}
