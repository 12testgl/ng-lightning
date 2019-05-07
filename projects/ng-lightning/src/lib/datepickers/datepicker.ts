import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef,
         OnInit, OnChanges, AfterViewInit, Optional, Inject, ViewChild, SimpleChanges, LOCALE_ID } from '@angular/core';
import { ENTER, UP_ARROW, LEFT_ARROW, DOWN_ARROW, RIGHT_ARROW, PAGE_UP, PAGE_DOWN, HOME, END } from '@angular/cdk/keycodes';
import { uniqueId, trapEvent } from '../util/util';
import { InputBoolean, InputNumber } from '../util/convert';
import { NglDatepickerInput } from './input/datepicker-input';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from './config';
import { NglInternalDate, numberOfDaysInMonth, getToday, isDisabled, compareDate, isSameMonth, parseDate } from './util';
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
export class NglDatepicker implements OnInit, OnChanges, AfterViewInit {
  @Input() readonly monthNames: string[];
  @Input() readonly dayNamesShort: string[];
  @Input() readonly dayNamesLong: string[];
  @Input() dateDisabled: (date: Date) => boolean | null = null;

  _date: NglInternalDate;
  current: NglInternalDate;
  @Input() set date(date: Date) {
    this._date = parseDate(date);
  }
  @Output() dateChange = new EventEmitter();

  @Input() @InputBoolean() readonly showToday: boolean;

  @Input() @InputNumber() readonly firstDayOfWeek: number;

  /**
   * Offset of year from current year, that can be the minimum option in the year selection dropdown.
   */
  @Input() readonly relativeYearFrom: number;

  /**
   * Offset of year from current year, that can be the maximum option in the year selection dropdown.
   */
  @Input() readonly relativeYearTo: number;

  /**
   * The minimum date that can be selected.
   */
  @Input() readonly min: Date;

  /**
   * The maximum date that can be selected.
   */
  @Input() readonly max: Date;

  weeks: NglInternalDate[];
  uid = uniqueId('datepicker');
  monthLabel: string;

  minDate: NglInternalDate;

  maxDate: NglInternalDate;

  @ViewChild(NglDatepickerMonth) monthView: NglDatepickerMonth;

  constructor(@Optional() @Inject(NglDatepickerInput) private dtInput: NglDatepickerInput,
              @Optional() @Inject(NGL_DATEPICKER_CONFIG) defaultConfig: NglDatepickerConfig,
              @Inject(LOCALE_ID) locale: string,
              private element: ElementRef) {

    const config = { ...new NglDatepickerConfig(locale), ...defaultConfig };
    this.monthNames = config.monthNames;
    this.dayNamesShort = config.dayNamesShort;
    this.dayNamesLong = config.dayNamesLong;
    this.firstDayOfWeek = config.firstDayOfWeek;
    this.showToday = config.showToday;
    this.relativeYearFrom = config.relativeYearFrom;
    this.relativeYearTo = config.relativeYearTo;
  }

  ngOnInit() {
    this.setMinMaxDates();
    this.setCurrent(this._date || getToday());
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.date && changes.date.isFirstChange()) ||
        changes.relativeYearFrom || changes.relativeYearTo ||
        changes.min || changes.max) {
      this.setMinMaxDates();
    }
    if (changes.date) {
      this.setCurrent(this._date);
    }
  }

  moveYear(year: string | number) {
    this.setCurrent({ year: +year });
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
      this.setCurrent(today);
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

  /** Whether the previous period button is disabled. */
  previousDisabled(): boolean {
    return this.minDate && isSameMonth(this.current, this.minDate);
  }

  /** Whether the next period button is disabled. */
  nextDisabled(): boolean {
    return this.maxDate && isSameMonth(this.current, this.maxDate);
  }

  private focusActiveDay() {
    this.monthView.focusActiveDay();
  }

  private moveCalendar(code: 'Move' | 'MoveMonth' | 'MoveTo', param: number) {
    const { year, month, day } = this.current;
    const date = new Date(year, month, day, 12);

    if (code === 'Move') {
      date.setDate(day + (+param));
      this.setCurrent({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate() });
    } else if (code === 'MoveMonth') {
      date.setMonth(month + (+param), 1);
      this.setCurrent({ year: date.getFullYear(), month: date.getMonth(), day });
    } else if (code === 'MoveTo') {
      this.setCurrent({ day: +param });
    }
  }

  private setCurrent(d: Partial<NglInternalDate>, doRender = true) {
    this.current = { ...this.current, ...d };

    // Keep current inside minimum/maximum range
    if (compareDate(this.current, this.minDate) < 0) {
      this.current = this.minDate;
    } else if (compareDate(this.current, this.maxDate) > 0) {
      this.current = this.maxDate;
    }

    if (doRender) {
      this.render();
    }
  }

  private render() {
    const { year, month, day } = this.current;
    this.monthLabel = this.monthNames[month];

    // Keep current day inside limits of this month
    this.setCurrent({ day: Math.min(day, numberOfDaysInMonth(year, month)) }, false);
  }

  /** Date filter for the month */
  private isDisabledDate(date: NglInternalDate): boolean {
    return isDisabled(date, this.dateDisabled, this.minDate, this.maxDate);
  }

  private setMinMaxDates() {
    const { year } = getToday();
    this.minDate = this.min ? parseDate(this.min) : { year: year + this.relativeYearFrom, month: 0, day: 1 };
    this.maxDate = this.max ? parseDate(this.max) : { year: year + this.relativeYearTo, month: 11, day: 31 };
  }
}
