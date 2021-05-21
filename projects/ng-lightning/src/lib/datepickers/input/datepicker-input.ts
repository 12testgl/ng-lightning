import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, TemplateRef, forwardRef, ChangeDetectorRef,
         Output, EventEmitter, ViewChild, OnInit, Inject, OnChanges, SimpleChanges, OnDestroy, Optional, NgZone, LOCALE_ID } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { CdkConnectedOverlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { FocusTrapFactory, FocusTrap } from '@angular/cdk/a11y';
import { DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { uniqueId } from '../../util/util';
import { InputBoolean } from '../../util/convert';
import { HostService } from '../../common/host/host.service';
import { NglDateAdapter } from '../adapters/date-fns-adapter';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from '../config';
import { DEFAULT_DROPDOWN_POSITIONS } from '../../util/overlay-position';
import { parseDate, isDisabled } from '../util';
import { IDatepickerInput } from './datepicker-input.interface';

const NGL_DATEPICKER_INPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NglDatepickerInput),
  multi: true
};

const NGL_DATEPICKER_INPUT_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NglDatepickerInput),
  multi: true
};

@Component({
  selector: 'ngl-datepicker-input',
  templateUrl: './datepicker-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NGL_DATEPICKER_INPUT_VALUE_ACCESSOR, NGL_DATEPICKER_INPUT_VALIDATOR, HostService],
})
export class NglDatepickerInput implements ControlValueAccessor, Validator, OnInit, OnChanges, OnDestroy {

  /**
   * Label that appears above the input.
   */
  @Input() label: string | TemplateRef<any>;

  /**
   * Pre-defined format to use.
   */
  @Input() format: 'big-endian' | 'little-endian' | 'middle-endian';

  /**
   * Delimiter to use on pre-defined formats.
   */
  @Input() delimiter;

  /**
   * Disable input and calendar.
   */
  @Input() @InputBoolean() disabled: boolean;

  /**
   * Aligns the right or left side of the dropdown menu with the respective side of the input.
   */
  @Input() dropdownAlign: 'left' | 'right';

  /**
   * The date value.
   */
  @Input() set value(value: Date | string | null) {
    if (value === this._value) {
      return;
    }
    this._value = value;

    if (this.value instanceof Date) {
      this.date = this.value;
      this.formatInputValue();
    } else {
      this.updateInputValue(<string>value || '');
    }
  }
  get value(): Date | string | null {
    return this._value;
  }

  /**
   * Whether to open the datepicker when a mouse user clicks on the input.
   */
  @Input() @InputBoolean() openOnInputClick: boolean;

  /**
   * Emits when selected date changes.
   */
  @Output() valueChange = new EventEmitter<Date | string | null>();

  inputEl: IDatepickerInput;

  // @ContentChild('inputEl', { static: false }) inputEl: SquareConfig;

  @ViewChild('cdkOverlay') cdkOverlay: CdkConnectedOverlay;

  /**
   * The minimum valid date.
   */
  @Input() readonly min: Date;

  /**
   * The maximum valid date.
   */
  @Input() readonly max: Date;

  /**
   * Text for button to open calendar.
   */
  @Input() readonly selectDateLabel = 'Select a date';

  /**
   * Whether to use the accepted pattern as placeholder.
   */
  @Input() @InputBoolean() patternPlaceholder: boolean;

  /**
   * Datepicker inputs
   */
  @Input() monthNames: ReadonlyArray<string>;
  @Input() dayNamesShort: ReadonlyArray<string>;
  @Input() dayNamesLong: ReadonlyArray<string>;
  @Input() firstDayOfWeek: number;
  @Input() @InputBoolean() showToday: boolean;
  @Input() dateDisabled: (date: Date) => boolean | null = null;
  @Input() relativeYearFrom: number;
  @Input() relativeYearTo: number;
  @Input() todayLabel: string;
  @Input() previousMonthLabel: string;
  @Input() nextMonthLabel: string;

  date: Date;

  uid = uniqueId('datepicker-input');

  overlayPositions: ConnectionPositionPair[];

  set open(open: boolean) {
    this._open.next(open);
  }
  get open() {
    return this._open.value;
  }

  private _open = new BehaviorSubject(false);

  private _value: Date | string | null = null;

  private pattern: string;

  private config: NglDatepickerConfig;

  private focusTrap: FocusTrap;

  constructor(@Optional() @Inject(NGL_DATEPICKER_CONFIG) defaultConfig: NglDatepickerConfig,
              @Inject(LOCALE_ID) locale: string,
              private element: ElementRef,
              private renderer: Renderer2,
              private cd: ChangeDetectorRef,
              private hostService: HostService,
              private ngZone: NgZone,
              private focusTrapFactory: FocusTrapFactory,
              private adapter: NglDateAdapter) {
    this.renderer.addClass(this.element.nativeElement, 'slds-form-element');
    this.renderer.addClass(this.element.nativeElement, 'slds-dropdown-trigger');
    this.renderer.addClass(this.element.nativeElement, 'slds-dropdown-trigger_click');

    this.config = { ...new NglDatepickerConfig(locale), ...defaultConfig };
    this.format = this.config.format;
    this.delimiter = this.config.delimiter;
    this.setPositions(this.config.dropdownAlign);
    this.monthNames = this.config.monthNames;
    this.dayNamesShort = this.config.dayNamesShort;
    this.dayNamesLong = this.config.dayNamesLong;
    this.firstDayOfWeek = this.config.firstDayOfWeek;
    this.showToday = this.config.showToday;
    this.relativeYearFrom = this.config.relativeYearFrom;
    this.relativeYearTo = this.config.relativeYearTo;
    this.openOnInputClick = this.config.openOnInputClick;
    this.todayLabel = this.config.todayLabel;
    this.previousMonthLabel = this.config.previousMonthLabel;
    this.nextMonthLabel = this.config.nextMonthLabel;
    this.patternPlaceholder = this.config.patternPlaceholder;
  }

  onChange: Function | null = null;

  onTouched = () => {};

  validatorChange = () => {};

  validate(c: AbstractControl): ValidationErrors | null {
    const value = c.value;

    if (!value) {
      return null;
    }

    if (!(this.value instanceof Date)) {
      return { 'nglDatepickerInput': { invalid: c.value } };
    }

    const date = parseDate(value);
    if (isDisabled(date, this.dateDisabled, parseDate(this.min), parseDate(this.max))) {
      return { 'nglDatepickerInput': { disabled: c.value } };
    }

    return null;
  }

  writeValue(value: Date) {
    this.value = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: (value: any) => any): void { this.onChange = fn; }

  registerOnTouched(fn: () => any): void { this.onTouched = fn; }

  registerOnValidatorChange(fn: () => void): void { this.validatorChange = fn; }

  setDisabledState(disabled: boolean) { this.disabled = disabled; }

  onBlur() {
    if (this.value instanceof Date) {
      this.updateInputValue();
    }
    this.onTouched();
  }

  ngOnInit() {
    this._open.subscribe(() => {
      this.setHostClass();
      this.cd.markForCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.format || changes.delimiter) {
      this.setPattern();
      if (this.value instanceof Date) {
        this.updateInputValue();
      }
    }

    if (changes.dropdownAlign) {
      this.setPositions(this.dropdownAlign);
    }

    if (changes.min || changes.max) {
      this.validatorChange();
    }

    if ((changes.patternPlaceholder || changes.format || changes.delimiter) && this.patternPlaceholder) {
      this.inputEl.setPlaceholder(this.getPattern().toLocaleUpperCase());
    }

    if (changes.disabled) {
      this.inputEl.setDisabled(this.disabled);
    }
  }

  ngOnDestroy() {
    this.closeCalendar(false);
  }

  onKeyboardInput(evt: KeyboardEvent) {
    const keyCode = evt.keyCode;

    if (!this.open && (keyCode === DOWN_ARROW || keyCode === UP_ARROW)) {
      this.openCalendar();
    }
  }

  onInputChange() {
    const value = this.inputEl.element.nativeElement.value;

    const date = this.dateParse(value);
    this.emitSelection(date || value);
  }

  openCalendar() {
    this.open = true;
  }

  onAttach() {
    this.focusTrap = this.focusTrapFactory.create(this.cdkOverlay.overlayRef.overlayElement);
  }

  onDetach() {
    if (this.open) {
      this.closeCalendar();
    }
  }

  closeCalendar(focusInput = true) {
    this.open = false;

    if (this.focusTrap) {
      this.focusTrap.destroy();
      this.focusTrap = null;
    }

    if (focusInput) {
      this.inputEl.element.nativeElement.focus();
    }
  }

  onTriggerClick(origin: 'input' | 'button') {
    if (origin === 'input' && !this.openOnInputClick) {
      return;
    }

    if (!this.open) {
      this.openCalendar();
    } else {
      this.closeCalendar(false);
    }
  }

  pickerSelection(date: Date) {
    this.emitSelection(date);
    this.closeCalendar();
  }

  updateDatepickerSize(width: number, height: number) {
    this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
      const { overlayRef } = this.cdkOverlay;
      overlayRef.updateSize({
        minWidth: width,
        minHeight: height + 4,
      });
      overlayRef.updatePosition();
    });
  }

  private setPositions(align: 'left' | 'right') {
    this.overlayPositions = [...DEFAULT_DROPDOWN_POSITIONS[align]];
  }

  private formatInputValue() {
    const inputValue = this.inputEl.element.nativeElement.value;
    if (!inputValue) {
      this.updateInputValue();
    } else {
      const date = this.value as Date;
      const dateNow = this.dateParse(inputValue);

      if (!dateNow || dateNow.getFullYear() !== date.getFullYear() || dateNow.getMonth() !== date.getMonth() || dateNow.getDate() !== date.getDate()) {
        this.updateInputValue();
      }
    }
  }

  private updateInputValue(value: string = this.dateFormat(<Date>this.value)) {
    this.renderer.setProperty(this.inputEl.element.nativeElement, 'value', value || '');
  }

  private dateParse(value: string) {
    return this.adapter.parse(value, this.getPattern());
  }

  private dateFormat(date: Date) {
    return this.adapter.format(date, this.getPattern());
  }

  private getPattern() {
    if (!this.pattern) {
      this.setPattern();
    }
    return this.pattern;
  }

  private setPattern() {
    this.pattern = this.adapter.pattern(this.format || this.config.format, this.delimiter || this.config.delimiter);
  }

  private emitSelection(value: Date | string) {
    this.valueChange.emit(value);

    if (this.onChange) {
      this.value = value;
      this.onChange(value);
    }
  }

  private setHostClass() {
    this.hostService.updateClass(this.element, {
      [`slds-is-open`]: this.open,
    });
  }
}
