import { Directive, Input, HostBinding, ElementRef } from '@angular/core';
import { NglInternalDate } from './util';

@Directive({
  selector: 'td[nglDay]',
})
export class NglDay {

  @Input('nglDay') readonly date: NglInternalDate;

  @HostBinding('class.slds-disabled-text')
  @HostBinding('attr.aria-disabled')
  @Input() readonly nglDayDisabled: boolean;

  @HostBinding('class.slds-is-selected')
  @HostBinding('attr.aria-selected')
  @Input() readonly nglDaySelected: boolean;

  @Input() readonly isActive;

  @HostBinding('attr.tabindex')
  get tabindex() {
    return this.isActive ? 0 : -1;
  }

  constructor(private el: ElementRef) {}

  focus() {
    this.el.nativeElement.focus();
  }
}
