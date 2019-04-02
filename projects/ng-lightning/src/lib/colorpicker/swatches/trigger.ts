import { Directive, ElementRef, Renderer2, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[nglColorpickerSwatchTrigger]',
})
export class NglColorpickerSwatchTrigger {

  @HostBinding('class.ngl-color-picker__swatch-selected')
  @Input() readonly selected: boolean;

  @Output() selectedChange = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__swatch-trigger');
    this.renderer.setAttribute(this.el.nativeElement, 'role', 'option');
  }

  @HostListener('click')
  onSelect() {
    return this.selectedChange.emit();
  }

  focus() {
    this.el.nativeElement.focus();
    this.onSelect();
  }

}
