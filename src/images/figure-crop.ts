import {Directive, ElementRef, Renderer, OnChanges, Input } from '@angular/core';
import {replaceClass} from '../util/util';

@Directive({
  selector: '[nglCrop]',
})
export class NglFigureCrop implements OnChanges {

  @Input('nglCrop') figureRatio: '16-by-9' | '4-by-3' | '1-by-1' | '' = '';
  private _oldRatio;

  constructor(public element: ElementRef, public renderer: Renderer) {  }

  ngOnChanges(changes?: any) {
    this.renderer.setElementClass(this.element.nativeElement, 'slds-image__crop', (this.figureRatio) ? true : false);
    replaceClass(this, `slds-image__crop--${this._oldRatio}`, (this.figureRatio) ? `slds-image__crop--${this.figureRatio}` : null);
    this._oldRatio = this.figureRatio;
  }
}
