import { Directive, ElementRef, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { NglDatepickerInput } from './datepicker-input';
import { IDatepickerInput } from './datepicker-input.interface';

@Directive({
  selector: 'input[nglDatepickerInput]',
  exportAs: 'nglDatepickerInput'
})
export class NglDatepickerInputDirective implements IDatepickerInput, OnDestroy {

  constructor(public element: ElementRef,
              private renderer: Renderer2,
              private datepickerInput: NglDatepickerInput) {
    renderer.addClass(element.nativeElement, 'slds-input');
    renderer.setAttribute(element.nativeElement, 'autocomplete', 'off');
    renderer.setAttribute(element.nativeElement, 'id', this.datepickerInput.uid);
    this.datepickerInput.inputEl = this;
  }

  @HostListener('click')
  onClick() {
    this.datepickerInput.onTriggerClick('input');
  }

  @HostListener('keydown', ['$event'])
  onKeydown(evt) {
    this.datepickerInput.onKeyboardInput(evt);
  }

  @HostListener('input')
  onInput() {
    setTimeout(() => this.datepickerInput.onInputChange(), 0);
  }

  @HostListener('blur')
  onBlur() {
    this.datepickerInput.onBlur();
  }

  setPlaceholder(placeholder: string) {
    this.renderer.setAttribute(this.element.nativeElement, 'placeholder', placeholder);
  }

  setDisabled(disabled: boolean) {
    this.renderer.setProperty(this.element.nativeElement, 'disabled', disabled);
  }

  ngOnDestroy() {
    this.datepickerInput.inputEl = null;
  }
}
