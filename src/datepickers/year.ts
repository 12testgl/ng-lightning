import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ngl-date-year',
  templateUrl: './year.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDatepickerYear {

  year: number;
  @Input('year') set setYear(year: string | number) {
    this.year = +year;
  }
  @Output() yearChange = new EventEmitter();

  // How many years before and after the current one are selectable in dropdown
  numYearsBefore: number;
  @Input('numYearsBefore') set _numYearsBefore(yearsBefore: string | number) {
    const defaultValue = 100;
    this.numYearsBefore = (yearsBefore) ? +yearsBefore : defaultValue;
  }
  numYearsAfter: number;
  @Input('numYearsAfter') set _numYearsAfter(yearsAfter: string | number) {
    const defaultValue = 10;
    this.numYearsAfter = (yearsAfter) ? +yearsAfter : defaultValue;
  }

  get range(): number[] {
    const currentYear = (new Date()).getFullYear();
    const firstYear = Math.min(currentYear - this.numYearsBefore, this.year);
    const size = Math.max(currentYear + this.numYearsAfter, this.year) - firstYear;
    return Array.apply(null, {length: size + 1}).map((value: any, index: number) => firstYear + index);
  }

  change($event: string) {
    this.yearChange.emit($event);
  }
}
