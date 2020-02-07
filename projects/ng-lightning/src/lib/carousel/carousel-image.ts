import { Component, Input, ChangeDetectionStrategy, TemplateRef, Renderer2, ElementRef } from '@angular/core';
import { uniqueId } from '../util/util';

@Component({
  selector: 'ngl-carousel-image',
  templateUrl: './carousel-image.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglCarouselImage {

  /**
   * 	The path to the image.
   */
  @Input() src: string;

  /**
   * Text for the label that's displayed under the image.
   */
  @Input() header: string;

  /**
   * Text displayed under the header.
   */
  @Input() description: string | TemplateRef<any>;

  /**
   * Assistive text for the image.
   */
  @Input() alternativeText: string;

  uid = uniqueId('carousel-image');

  set labelledby(labelledby: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'aria-labelledby', labelledby);
  }

  set active(active: boolean) {
    this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', `${!active}`);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setAttribute(this.el.nativeElement, 'id', this.uid);
    this.renderer.addClass(this.el.nativeElement, 'slds-carousel__panel');
    this.renderer.setAttribute(this.el.nativeElement, 'role', 'tabpanel');
  }

}
