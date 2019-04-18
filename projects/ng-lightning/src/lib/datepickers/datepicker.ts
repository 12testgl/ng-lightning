import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChildren, QueryList,
         NgZone, ElementRef, AfterViewChecked, Optional, Inject } from '@angular/core';
import { ENTER, UP_ARROW, LEFT_ARROW, DOWN_ARROW, RIGHT_ARROW, PAGE_UP, PAGE_DOWN, HOME, END } from '@angular/cdk/keycodes';
import { take } from 'rxjs/operators';
import { uniqueId, trapEvent } from '../util/util';
import { InputBoolean } from '../util/convert';
import { NglDay } from './day';
import { NglDatepickerInput } from './input/datepicker-input';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from './config';

export interface NglInternalDate { year: number; month: number; day: number; disabled?: boolean; }

const KEYBOARD_MOVES = {
  [UP_ARROW]:    ['Move', -7],
  [LEFT_ARROW]:  ['Move', -1],
  [DOWN_ARROW]:  ['Move', 7],
  [RIGHT_ARROW]: ['Move', 1],
  [PAGE_UP]:     ['MoveMonth', -1],
  [PAGE_DOWN]:   ['MoveMonth', 1],
  [HOME]:        ['MoveTo', 1],
  [END]:         ['MoveTo', 31],
};

@Component({
  selector: 'ngl-datepicker',
  templateUrl: './datepicker.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-datepicker]': 'true',
  },
  styles: [`:host { display: block; }`],
})
export class NglDatepicker implements AfterViewChecked {
  @Input() monthNames: string[];
  @Input() dayNamesShort: string[];
  @Input() dayNamesLong: string[];

  date: NglInternalDate;
  current: NglInternalDate;
  @Input('date') set _date(date: Date) {
    this.date = this.parseDate(date);
    if (this.date) {
      this.current = Object.assign({}, this.date);
    }
    this.render();
  }
  @Output() dateChange = new EventEmitter();

  @Input() @InputBoolean() showToday: boolean;

  firstDayOfWeek = 0;
  @Input('firstDayOfWeek') set _firstDayOfWeek(firstDayOfWeek: number) {
    this.firstDayOfWeek = +firstDayOfWeek;
    this.render();
  }

  weeks: NglInternalDate[];
  uid = uniqueId('datepicker');
  monthLabel: string;

  @ViewChildren(NglDay) days: QueryList<NglDay>;

  constructor(@Optional() @Inject(NglDatepickerInput) private dtInput: NglDatepickerInput,
              @Optional() @Inject(NGL_DATEPICKER_CONFIG) defaultConfig: NglDatepickerConfig,
              private ngZone: NgZone,
              private element: ElementRef) {

    const config = { ...new NglDatepickerConfig(), ...defaultConfig };
    this.monthNames = config.monthNames;
    this.dayNamesShort = config.dayNamesShort;
    this.dayNamesLong = config.dayNamesLong;
    this.showToday = config.showToday;
  }

  moveYear(year: string | number) {
    this.current.year = +year;
    this.render();
  }

  moveMonth(diff: number) {
    this.moveCalendar('MoveMonth', diff);
  }

  keyboardHandler(evt: KeyboardEvent) {
    const keyCode = evt.keyCode;

    if (keyCode === ENTER) {
      trapEvent(evt);
      this.select();
      return;
    }

    const move = KEYBOARD_MOVES[keyCode];
    if (!move) {
      return;
    }

    // Handle keyboard event inside datepicker
    trapEvent(evt);

    const [code, param] = move;
    this.moveCalendar(code, param);
    this.focusActiveDay();
  }

  isSelected(date: NglInternalDate) {
    return this.isEqualDate(date, this.date);
  }

  isActive(date: NglInternalDate) {
    return this.isEqualDate(date, this.current);
  }

  select(date: NglInternalDate = this.current) {
    if (date.disabled) { return; }

    const {year, month, day} = date;
    this.dateChange.emit(new Date(year, month, day));
  }

  indexTrackBy(index: number) {
    return index;
  }

  selectToday() {
    this.dateChange.emit(new Date());
  }

  dateTrackBy(index: number, date: NglInternalDate) {
    return `${date.day}-${date.month}-${date.year}`;
  }

  isToday(date: NglInternalDate) {
    return this.isEqualDate(date, this.today);
  }

  ngAfterViewChecked() {
    if (this.dtInput) {
      const el = this.element.nativeElement;
      this.dtInput.updateDatepickerSize(el.offsetWidth, el.offsetHeight);

      this.focusActiveDay();
    }
  }

  private focusActiveDay() {
    this.ngZone.runOutsideAngular(() => {
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        const active = this.days.find((d) => this.isActive(d.date));
        if (active) {
          active.focus();
        }
      });
    });
  }

  private moveCalendar(code: 'Move' | 'MoveMonth' | 'MoveTo', param: number) {
    const { year, month, day } = this.current;
    const date = new Date(year, month, day, 12);

    if (code === 'Move') {
      date.setDate(day + (+param));
      this.current = { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
    } else if (code === 'MoveMonth') {
      date.setMonth(month + (+param), 1);
      this.current = { year: date.getFullYear(), month: date.getMonth(), day };
    } else if (code === 'MoveTo') {
      this.current.day = +param;
    }
    this.render();
  }

  private parseDate(date: Date): NglInternalDate {
    if (!date) { return null; }
    return { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
  }

  private isEqualDate(d1: NglInternalDate, d2: NglInternalDate) {
    return d1 && d2 && d1.day === d2.day && d1.month === d2.month && d1.year === d2.year;
  }

  private render() {
    if (!this.current) {
      this.current = this.today;
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
    const last = new Date(year, month + 1, 0).getDate();
    return this.getDayObjects(year, month, 1, last);
  }

  private daysInPreviousMonth(year: number, month: number) {
    const firstIndex = (new Date(year, month, 1)).getDay();
    const last = new Date(year, month, 0).getDate();
    const numDays = (7 + firstIndex - this.firstDayOfWeek) % 7;

    return this.getDayObjects(year, month - 1, last - numDays + 1, last, true);
  }

  private daysInNextMonth(year: number, month: number, numOfDays: number) {
    if (numOfDays % 7 === 0) { return; }
    return this.getDayObjects(year, month, 1, 7 - (numOfDays % 7), true);
  }

  private getDayObjects(year: number, month: number, from: number, to: number, disabled = false) {
    const days: NglInternalDate[] = [];
    for (let day = from; day <= to; day++) {
      days.push({ year, month, day, disabled });
    }
    return days;
  }

  private get today() {
    const today = new Date();
    return { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() };
  }

  // Split array into smaller arrays
  private split = function(arr: any[], size = 7) {
    const arrays: any[] = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };
}
