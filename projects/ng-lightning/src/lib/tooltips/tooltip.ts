import { Component, ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { Placement, POSITION_MAP, getPlacementStyles } from '../util/overlay-position';
import { HostService } from '../common/host/host.service';
import { OnChange } from '../util/property-watch-decorator';
import { ngClassCombine } from '../util/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'div[ngl-tooltip]',
  templateUrl: './tooltip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
})
export class NglTooltip {

  @OnChange() template: string | TemplateRef<void>;

  @OnChange() placement: Placement;

  @OnChange()  uid: string;

  @OnChange()  tooltipClass: any;

  private nubbin: Placement;

  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private hostService: HostService,
              private cd: ChangeDetectorRef) {
    this.renderer.addClass(this.element.nativeElement, 'slds-popover');
    this.renderer.addClass(this.element.nativeElement, 'slds-popover_tooltip');
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'tooltip');
  }

  nglOnPropertyChange(prop) {
    if (prop === 'uid') {
      this.renderer.setAttribute(this.element.nativeElement, 'id', this.uid);
    } else if (prop === 'placement') {
      this.nubbin = POSITION_MAP[this.placement].nubbin;
      this.setHostClass();
    } else if (prop === 'template') {
      this.cd.markForCheck();
    } else if (prop === 'tooltipClass') {
      this.setHostClass();
    }
}

  private setHostClass() {
    this.hostService.updateClass(this.element, ngClassCombine(this.tooltipClass, {
      [`slds-nubbin_${this.nubbin}`]: true,
    }));

    this.hostService.updateStyle(this.element, getPlacementStyles(this.nubbin));
  }
}
