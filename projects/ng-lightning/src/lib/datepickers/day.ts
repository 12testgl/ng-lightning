import { Directive, Input, HostBinding, ElementRef } from '@angular/core';
import { NglInternalDate } from './util';

@Directive({
  selector: 'td[nglDay]',
})
export class NglDay {

  @Input('nglDay') date: NglInternalDate;

  @HostBinding('class.slds-disabled-text')
  @HostBinding('attr.aria-disabled')
  @Input() nglDayDisabled: boolean;

  @HostBinding('class.slds-is-selected')
  @HostBinding('attr.aria-selected')
  @Input() nglDaySelected: boolean;

  @Input() isActive;

  @HostBinding('attr.tabindex')
  get tabindex() {
    return this.isActive ? 0 : -1;
  }

  constructor(private el: ElementRef) {}

  focus() {
    this.el.nativeElement.focus();
  }
}
