import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { uniqueId } from '../util/util';
import { InputNumber } from '../util/convert';

@Component({
  selector: 'ngl-date-year',
  templateUrl: './year.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDatepickerYear implements OnChanges {

  uid = uniqueId('datepicker_year');

  @Input() from: number;
  @Input() to: number;

  @Input() @InputNumber() year: number;
  @Output() yearChange = new EventEmitter();

  range: number[];

  change($event: string) {
    this.yearChange.emit($event);
  }

  ngOnChanges() {
    this.range = this.getRange();
  }

  private getRange(): number[] {
    const currentYear = (new Date()).getFullYear();
    const firstYear = Math.min(currentYear + this.from, this.year);
    const size = Math.max(currentYear + this.to, this.year) - firstYear;
    return Array.apply(null, {length: size + 1}).map((value: any, index: number) => firstYear + index);
  }

}
