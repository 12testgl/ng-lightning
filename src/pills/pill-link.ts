import {Directive, ElementRef, Renderer2, Optional} from '@angular/core';
import {NglPill} from './pill';

@Directive({
  selector: 'a',
})
export class NglPillLink {

  constructor(@Optional() pill: NglPill, element: ElementRef, renderer: Renderer2) {
    if (!pill) return;

    renderer.addClass(element.nativeElement, 'slds-pill__label');
    pill.unlinked = false;
  }

}
