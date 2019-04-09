import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, TemplateRef,
         forwardRef, ChangeDetectorRef, HostBinding, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { uniqueId } from '../util/util';
import { InputNumber, InputBoolean } from '../util/convert';

const NGL_SLIDER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NglSlider),
  multi: true
};

@Component({
  selector: 'ngl-slider',
  templateUrl: './slider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NGL_SLIDER_VALUE_ACCESSOR],
})
export class NglSlider implements ControlValueAccessor {

  /**
   * Label that appears above the Slider.
   */
  @Input() label: string | TemplateRef<any>;

  /**
   * The minimum value that the slider can have.
   */
  @Input() @InputNumber() min = 0;

  /**
   * The maximum value that the slider can have.
   */
  @Input() @InputNumber() max = 100;

  /**
   * The granularity the slider can step through values.
   */
  @Input() @InputNumber() step = 1;

  /**
   * Whether the slider will be displayed vertically.
   */
  @Input() @InputBoolean() vertical = false;

  /**
   * The size of the slider.
   */
  @Input() size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';

  /**
   * Whether the slider is disabled.
   */
  @Input() @InputBoolean() disabled: boolean;

  /**
   * Message to display when there is in an error state.
   */
  @Input() error: string | TemplateRef<any>;

  @HostBinding('class.slds-has-error')
  get hasError() {
    return !!this.error;
  }

  @Input() set value(value: number | null) {
    if (value !== this._value) {
      this._value = this.limit(coerceNumberProperty(value));
    }
  }
  get value(): number {
    // If the value needs to be read and it is still uninitialized, initialize it to the min.
    if (this._value === null) {
      this._value = this.min;
    }
    return this._value;
  }

  @Output() valueChange = new EventEmitter<number>();

  uid = uniqueId('slider');

  private _value: number | null = null;

  constructor(private element: ElementRef, private renderer: Renderer2, private cd: ChangeDetectorRef) {
    this.renderer.addClass(this.element.nativeElement, 'slds-form-element');
  }

  onChange: Function | null = null;

  onTouched = () => {};

  writeValue(value: number) {
    this.value = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: (value: any) => any): void { this.onChange = fn; }

  registerOnTouched(fn: () => any): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean) { this.disabled = isDisabled; }

  onInput(value) {
    // Make sure we always emit number
    this.valueChange.emit(coerceNumberProperty(value));

    if (this.onChange) {
      this.value = value;
      this.onChange(this.value);
    }
  }

  sliderClass() {
    return {
      [`slds-size_${this.size}`]: !!this.size,
      [`slds-slider_vertical`]: this.vertical,
    };
  }

  private limit(value: number): number {
    return Math.min(Math.max(value, this.min), this.max);
  }
}
