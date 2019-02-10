import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

export type NglFileCropValue = '16-by-9' | '4-by-3' | '1-by-1';

@Directive({
  selector: '[nglFileCrop]',
})
export class NglFileCrop {

  @Input() set nglFileCrop(ratio: NglFileCropValue) {
    const nativeElement = this.element.nativeElement;

    if (this.currentRatio) {
      this.renderer.removeClass(nativeElement, `${this.cropClass}`);
      this.renderer.removeClass(nativeElement, `${this.cropClass}_${this.currentRatio}`);
    }

    if (ratio) {
      this.renderer.addClass(nativeElement, `${this.cropClass}`);
      this.renderer.addClass(nativeElement, `${this.cropClass}_${ratio}`);
    }

    this.currentRatio = ratio;
  }

  private cropClass = 'slds-file__crop';

  private currentRatio: NglFileCropValue;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.renderer.addClass(this.element.nativeElement, this.cropClass);
  }
}
