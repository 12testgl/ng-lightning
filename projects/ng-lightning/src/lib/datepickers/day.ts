import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'td[nglDay]',
  templateUrl: './day.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDay {

  @Input('nglDay') day: string | number;

  @HostBinding('class.slds-disabled-text')
  @HostBinding('attr.aria-disabled')
  @Input() nglDayDisabled: boolean;

  @HostBinding('class.slds-is-selected')
  @HostBinding('attr.aria-selected')
  @Input() nglDaySelected: boolean;

  get label() {
    return this.day < 10 ? `0${this.day}` : this.day;
  }
}
