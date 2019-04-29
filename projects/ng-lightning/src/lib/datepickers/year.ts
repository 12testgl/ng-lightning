import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { uniqueId } from '../util/util';
import { InputNumber } from '../util/convert';
import { NglInternalDate } from './util';

@Component({
  selector: 'ngl-date-year',
  templateUrl: './year.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDatepickerYear implements OnChanges {

  uid = uniqueId('datepicker_year');

  @Input() from: NglInternalDate;
  @Input() to: NglInternalDate;

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
    const minYear = Math.min(this.from.year, this.year);
    const maxYear = Math.max(this.to.year, this.year);
    const size = maxYear - minYear;
    return Array.apply(null, { length: size + 1 }).map((value: any, index: number) => minYear + index);
  }

}
