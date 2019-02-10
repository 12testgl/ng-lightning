import { Component, Optional, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
import { NglPill } from './pill';

@Component({
  //  tslint:disable-next-line:component-selector
  selector: 'a',
  template: `
    <span class="slds-pill__label">
      <ng-content></ng-content>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglPillLink {
  constructor(@Optional() pill: NglPill, element: ElementRef, renderer: Renderer2) {
    if (!pill) { return; }

    renderer.addClass(element.nativeElement, 'slds-pill__action');
    pill.linked = true;
  }

}
