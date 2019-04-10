import { Component, ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { Placement, POSITION_MAP, getPlacementStyles } from '../util/overlay-position';
import { HostService } from '../common/host/host.service';
import { OnChange } from '../util/property-watch-decorator';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'div[ngl-tooltip]',
  templateUrl: './tooltip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
})
export class NglTooltip {

  @OnChange(function (this: NglTooltip) {
    this.cd.markForCheck();
  })
  template: string | TemplateRef<void>;

  @OnChange<Placement>(function (this: NglTooltip, placement) {
    this.setHostClass(POSITION_MAP[placement].nubbin);
  })
  placement: Placement;

  @OnChange<string>(function (this: NglTooltip, value) {
    this.renderer.setAttribute(this.element.nativeElement, 'id', value);
  })
  uid: string;

  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private hostService: HostService,
              private cd: ChangeDetectorRef) {
    this.renderer.addClass(this.element.nativeElement, 'slds-popover');
    this.renderer.addClass(this.element.nativeElement, 'slds-popover_tooltip');
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'tooltip');
  }

  private setHostClass(nubbin: Placement) {
    this.hostService.updateClass(this.element, {
      [`slds-nubbin_${nubbin}`]: true,
    });

    this.hostService.updateStyle(this.element, getPlacementStyles(nubbin));
  }
}
