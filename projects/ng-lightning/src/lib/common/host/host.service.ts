import { Injectable, Renderer2, RendererFactory2, ElementRef } from '@angular/core';

@Injectable()
export class HostService {
  private classMap = {};
  private renderer: Renderer2;

  updateClass({ nativeElement }: ElementRef, classMap: object): void {
    const newClassMap = {};
    const remove = { ...this.classMap };

    Object.keys(classMap).filter(i => classMap[i]).forEach(i => {
      newClassMap[i] = true;

      if (!this.classMap[i]) {
        this.renderer.addClass(nativeElement, i);
      }

      if (remove[i]) {
        remove[i] = false;
      }
    });

    Object.keys(remove).filter(i => remove[i]).forEach(i => this.renderer.removeClass(nativeElement, i));

    this.classMap = newClassMap;
  }

  constructor(rendererFactory2: RendererFactory2) {
    this.renderer = rendererFactory2.createRenderer(null, null);
  }
}
