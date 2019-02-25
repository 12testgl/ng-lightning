import { Injectable, Renderer2, RendererFactory2, ElementRef } from '@angular/core';

@Injectable()
export class HostService {
  private classMap = {};
  private renderer: Renderer2;

  updateClass(elRef: ElementRef, classMap: object): void {
    const el = elRef.nativeElement;
    this.removeClass(el, this.classMap, this.renderer);
    this.classMap = { ...classMap };
    this.addClass(el, this.classMap, this.renderer);
  }

  private removeClass(el: HTMLElement, classMap: object, renderer: Renderer2): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        renderer.removeClass(el, i);
      }
    }
  }

  private addClass(el: HTMLElement, classMap: object, renderer: Renderer2): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        if (classMap[i]) {
          renderer.addClass(el, i);
        }
      }
    }
  }

  constructor(rendererFactory2: RendererFactory2) {
    this.renderer = rendererFactory2.createRenderer(null, null);
  }
}
