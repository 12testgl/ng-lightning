import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[nglColorpickerSwatch]',
  templateUrl: './colorpicker-swatch.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglColorpickerSwatch {

  @HostBinding('style.background')
  @Input() color: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'slds-swatch');
  }

}
