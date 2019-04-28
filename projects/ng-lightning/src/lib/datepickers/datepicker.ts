import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, AfterViewInit, Optional, Inject, ViewChild } from '@angular/core';
import { ENTER, UP_ARROW, LEFT_ARROW, DOWN_ARROW, RIGHT_ARROW, PAGE_UP, PAGE_DOWN, HOME, END } from '@angular/cdk/keycodes';
import { uniqueId, trapEvent } from '../util/util';
import { InputBoolean, InputNumber } from '../util/convert';
import { NglDatepickerInput } from './input/datepicker-input';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from './config';
import { NglInternalDate, numberOfDaysInMonth, getToday, isDisabled } from './util';
import { NglDatepickerMonth } from './month';

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
export class NglDatepicker implements AfterViewInit {
  @Input() monthNames: string[];
  @Input() dayNamesShort: string[];
  @Input() dayNamesLong: string[];
  @Input() dateDisabled: (date: Date) => boolean | null = null;

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

  @Input() @InputNumber() firstDayOfWeek = 0;

  weeks: NglInternalDate[];
  uid = uniqueId('datepicker');
  monthLabel: string;

  @ViewChild(NglDatepickerMonth) monthView: NglDatepickerMonth;

  constructor(@Optional() @Inject(NglDatepickerInput) private dtInput: NglDatepickerInput,
              @Optional() @Inject(NGL_DATEPICKER_CONFIG) defaultConfig: NglDatepickerConfig,
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
      if (!this.isDisabledDate(this.current)) {
        this.select(this.current);
      }
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

  select(date: NglInternalDate) {
    if (date.disabled) { return; }

    const {year, month, day} = date;
    this.dateChange.emit(new Date(year, month, day));
  }

  selectToday() {
    const today = getToday();
    if (this.isDisabledDate(today)) {
      this.current = today;
      this.render();
    } else {
      this.dateChange.emit(new Date());
    }
  }

  ngAfterViewInit() {
    if (this.dtInput) {
      const el = this.element.nativeElement;
      this.dtInput.updateDatepickerSize(el.offsetWidth, el.offsetHeight);

      this.focusActiveDay();
    }
  }

  private focusActiveDay() {
    this.monthView.focusActiveDay();
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

  private render() {
    if (!this.current) {
      this.current = getToday();
    }

    const { year, month, day } = this.current;
    this.monthLabel = this.monthNames[month];

    // Keep current day inside limits of this month
    this.current.day = Math.min(day, numberOfDaysInMonth(year, month));
  }

  /** Date filter for the month */
  private isDisabledDate(date: NglInternalDate): boolean {
    return isDisabled(date, this.dateDisabled);
  }
}
