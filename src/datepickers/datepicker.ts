import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener} from '@angular/core';
import {uniqueId, toBoolean} from '../util/util';

export type NglInternalDate = { year: number, month: number, day: number, disabled?: boolean};

@Component({
  selector: 'ngl-datepicker',
  templateUrl: './datepicker.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-hidden': 'false',
    '[class.slds-datepicker]': 'true',
    'tabindex': '0',
  },
  styles: [`:host { display: block; }`],
})
export class NglDatepicker {
  @Input() monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  @Input() dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  @Input() dayNamesLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  date: NglInternalDate;
  current: NglInternalDate;
  @Input('date') set _date(date: Date) {
    const inputDate = this.parseDate(date);
    if (!inputDate) {
      this.date = this.parseDate(date);
    } else {
      if (this.isDateInRange(inputDate)) {
        this.date = Object.assign({}, inputDate);
        this.current = Object.assign({}, this.date);
      }
    }
    this.render();
  }
  @Output() dateChange = new EventEmitter();

  mindate: NglInternalDate;
  @Input('mindate') set _mindate(date: Date) {
    const minimumDate = this.parseDate(date);
    if (minimumDate) {
      // make sure min date is smaller that max date
      if ((this.maxdate && this.compareDates(minimumDate, this.maxdate) < 0) || !this.maxdate) {
        this.mindate = Object.assign({}, minimumDate);
      }
    } else {
      this.mindate = null;
    }
    this.render();
  }

  maxdate: NglInternalDate;
  @Input('maxdate') set _maxdate(date: Date) {
    const maximumDate = this.parseDate(date);
    if (maximumDate) {
      if ((this.mindate && this.compareDates(maximumDate, this.mindate) > 0) || !this.mindate) {
        this.maxdate = Object.assign({}, maximumDate);
      }
    } else {
      this.maxdate = null;
    }
    this.render();
  }

  @Input() dateDisabled : (date: Date) => boolean;

  showToday = true;
  @Input('showToday') set _showToday(showToday: boolean) {
    this.showToday = toBoolean(showToday);
  }

  firstDayOfWeek = 0;
  @Input('firstDayOfWeek') set _firstDayOfWeek(firstDayOfWeek: number) {
    this.firstDayOfWeek = +firstDayOfWeek;
    this.render();
  }

  weeks: NglInternalDate[];
  uid = uniqueId('datepicker');
  monthLabel: string;

  @HostListener('keydown.Enter', ['$event', '"Enter"'])
  @HostListener('keydown.ArrowUp', ['$event', '"Move"', '-7'])
  @HostListener('keydown.ArrowLeft', ['$event', '"Move"', '-1'])
  @HostListener('keydown.ArrowDown', ['$event', '"Move"', '7'])
  @HostListener('keydown.ArrowRight', ['$event', '"Move"', '1'])
  @HostListener('keydown.PageUp', ['$event', '"MoveMonth"', '-1'])
  @HostListener('keydown.PageDown', ['$event', '"MoveMonth"', '1'])
  @HostListener('keydown.Home', ['$event', '"MoveTo"', '1'])
  @HostListener('keydown.End', ['$event', '"MoveTo"', '31'])
  keyboardHandler($event: KeyboardEvent, code: string, param?: number | string) {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }

    if (code === 'Enter') {
      this.select();
      return;
    }

    // Change current date
    let {year, month, day} = this.current;
    let date: Date = new Date(year, month, day, 12);
    if (code === 'Move' || code === 'MoveMonth' || code === 'MoveTo' || code === 'MoveYear') {
      const value = (code === 'MoveYear') ? this.current.year - (+param) : (+param);
      date = this.move(date, value, code);
      this.current = { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
    }
    this.render();
  }

  isSelected(date: NglInternalDate) {
    return this.date && this.compareDates(date, this.date) === 0 && !this.isDisabledDate(date);
  }

  isActive(date: NglInternalDate) {
    return this.current && this.compareDates(date, this.current) === 0 && !this.isDisabledDate(date);
  }

  isFirstAllowedMonth() {
    const firstDay = new Date(this.current.year, this.current.month, 1);
    const first = this.parseDate(firstDay);
    if (this.mindate && this.compareDates(first, this.mindate) <= 0) {
      return true;
    }
    return false;
  }

  isLastAllowedMonth() {
    const lastDay = new Date(this.current.year, this.current.month + 1, 0);
    const last = this.parseDate(lastDay);
    if (this.maxdate && this.compareDates(this.maxdate, last) <= 0) {
      return true;
    }
    return false;
  }

  yearsBefore(date: NglInternalDate) {
    return (date) ? this.today.year - date.year : null;
  }

  yearsAfter(date: NglInternalDate) {
     return (date) ? date.year - this.today.year : null;
  }

  select(date: NglInternalDate = this.current) {
    if (date.disabled || this.isDisabledDate(date) || !this.isDateInRange(date)) return;

    const {year, month, day} = date;
    this.dateChange.emit(new Date(year, month, day));
  }

  indexTrackBy(index: number) {
    return index;
  }

  selectToday() {
    if (this.isDisabledDate(this.today) || !this.isDateInRange(this.today)) return;

    this.dateChange.emit(new Date());
  }

  private parseDate(date: Date): NglInternalDate {
    if (!date) return null;
    return { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
  }

  private compareDates(d1: NglInternalDate, d2: NglInternalDate) {
    if (d1 && d2 && (d1.day === d2.day && d1.month === d2.month && d1.year === d2.year) || (d1 == null && d2 == null) ) {
      return 0; // equal
    } else if (d1 && d2 && ((d1.day < d2.day && d1.month === d2.month && d1.year === d2.year)
                  || (d1.month < d2.month && d1.year === d2.year)
                  || (d1.year < d2.year))
                  || d1 == null && d2) {
      return -1; // smaller
    } else {
      return 1;  // larger
    }
  }

  private render() {
    if (!this.current) {
      this.current = this.today;
    }

    if (!this.isDateInRange(this.current)) { // current date is out of valid range
      if (this.mindate && this.compareDates(this.mindate, this.current) > 0) { // adjust current date to min date
        this.current = this.mindate;
      } else if (this.maxdate && this.compareDates(this.maxdate, this.current) < 0) {
        this.current = this.maxdate;
      }
    }

    const { year, month, day } = this.current;
    this.monthLabel = this.monthNames[month];

    const days = this.daysInMonth(year, month);

    // Keep current day inside limits of this month
    this.current.day = Math.min(day, days.length);

    Array.prototype.unshift.apply(days, this.daysInPreviousMonth(year, month));
    const nextMonth = this.daysInNextMonth(year, month + 1, days.length);
    if (nextMonth) {
      Array.prototype.push.apply(days, nextMonth);
    }

    this.weeks = this.split(days);
  }

  private daysInMonth(year: number, month: number) {
    const lastDate = new Date(year, month + 1, 0);
    const last = lastDate.getDate();
    let days: NglInternalDate[] = [];
    const mindate = (this.mindate && month === this.mindate.month && year === this.mindate.year) ? this.mindate.day : 1;
    const maxdate = (this.maxdate && month === this.maxdate.month && year === this.maxdate.year) ? this.maxdate.day : last;
    if (mindate > 1) {
      Array.prototype.push.apply(days, this.getDayObjects(year, month, 1, mindate - 1, true));
    }
    Array.prototype.push.apply(days, this.getDayObjects(year, month, mindate, maxdate, false));
    if (maxdate < last) {
      Array.prototype.push.apply(days, this.getDayObjects(year, month, maxdate + 1, last, true));
    }
    return days;
  }

  private isDisabledDate(date: NglInternalDate) {
    if (!this.dateDisabled) {
      return false;
    }
    const disabledDate = new Date(date.year, date.month, date.day, 12);
    return this.dateDisabled(disabledDate);
  }

  private isDateInRange(date: NglInternalDate) {
    return (!this.mindate && !this.maxdate) ||
    (!this.mindate && this.maxdate && this.compareDates(date, this.maxdate) <= 0) ||
    (!this.maxdate && this.mindate && this.compareDates(date, this.mindate) >= 0) ||
    (this.mindate && this.compareDates(date, this.mindate) >= 0 && this.maxdate && this.compareDates(date, this.maxdate) <= 0);
  }

  // adjust to min/max date
  private adjustDateToRange(date: NglInternalDate) {
    if (this.mindate && this.compareDates(date, this.mindate) < 0) {
      date = this.mindate;
    }
    if (this.maxdate && this.compareDates(this.maxdate, date) < 0) {
     date = this.maxdate;
    }
    return date;
  }

  private daysInPreviousMonth(year: number, month: number) {
    const firstIndex = (new Date(year, month, 1)).getDay();
    const last = new Date(year, month, 0).getDate();
    const numDays = (7 + firstIndex - this.firstDayOfWeek) % 7;

    return this.getDayObjects(year, month - 1, last - numDays + 1, last, true);
  }

  private daysInNextMonth(year: number, month: number, numOfDays: number) {
    if (numOfDays % 7 === 0) return;
    return this.getDayObjects(year, month, 1, 7 - (numOfDays % 7), true);
  }

  private getDayObjects(year: number, month: number, from: number, to: number, disabled = false) {
    const days: NglInternalDate[] = [];
    for (let day = from; day <= to; day++) {
      days.push({ year, month, day, disabled: !disabled ? this.isDisabledDate({ year, month, day }) : disabled });
    }
    return days;
  }

  private get today() {
    const today = new Date();
    return { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() };
  }

  private move(date: Date, param: Number | String, type: string) {
    let movedDate: NglInternalDate;
    let moveParam: Number = (+param);
    date = this.moveByType(date, moveParam, type);
    movedDate = this.parseDate(date);
    moveParam = (moveParam >= 1 && moveParam < 31) ? 1 : -1; // define move direction
    movedDate = this.adjustDateToRange(movedDate);
    return new Date(movedDate.year, movedDate.month, movedDate.day);
  }

  // make sure day is inside month limits. Otherwise return last day of month
  private adjustToMonthRange(day: number, date: Date) {
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = lastDate.getDate();
    date.setDate(Math.min(day, daysInMonth));
    return date;
  }

  private moveByType (date: Date, param: Number, type: string) {
    if (type === 'Move') {
      return this.moveDay(date, param);
    } else if (type === 'MoveMonth') {
      return this.moveMonth(date, param);
    } else if (type === 'MoveTo') {
      return this.setDay(date, param);
    } else if (type === 'MoveYear') {
      return this.moveYear(date, param);
    }
  }

  private moveDay(date: Date, param: Number) {
    const day = date.getDate() + (+param);
    date.setDate(day);
    date = this.adjustToMonthRange(date.getDate(), date);
    return date;
  }

  private moveMonth(date: Date, param: Number) {
    const month = date.getMonth();
    const day = date.getDate();
    date.setMonth(month + (+param), 1);
    date = this.adjustToMonthRange(day, date);
    return date;
  }

  private moveYear(date: Date, param: Number) {
    return this.moveMonth(date, - (+param) * 12);
  }

  private setDay(date: Date, param: Number) {
    const day = (+param);
    date = this.adjustToMonthRange(day, date);
    return date;
  }

  // Split array into smaller arrays
  private split = function(arr: any[], size = 7) {
    const arrays: any[] = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };
};
