import { Component, ElementRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Input, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IHSV, getHsvFromHex, getHexFromHsv, isValidHex } from './util';
import { uniqueId } from '../util/util';
import { InputBoolean } from '../util/convert';

const NGL_COLORPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NglColorpicker),
  multi: true
};

@Component({
  selector: 'ngl-colorpicker',
  templateUrl: './colorpicker.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NGL_COLORPICKER_VALUE_ACCESSOR],
})
export class NglColorpicker implements ControlValueAccessor {

  /**
   * An input label as for a form.
   */
  @Input() label = 'Choose Color';

  /**
   * Text for cancel button on popover.
   */
  @Input() cancelButtonLabel = 'Cancel';

  /**
   * Text for submit button of popover.
   */
  @Input() submitButtonLabel = 'Done';

  /**
   * Highlights the input as a required field (does not perform any validation).
   */
  @Input() @InputBoolean() required = false;

  /**
   * A tooltip that is displayed next to the label.
   */
  @Input() fieldLevelHelpTooltip: string | TemplateRef<any>;

  /**
   * Error message when hex color input is invalid.
   */
  @Input() invalidColorLabel: string | TemplateRef<any> = 'Please ensure value is correct';

  /**
   * Text for swatch tab of popover.
   */
  @Input() swatchTabLabel = 'Default';

  /**
   * Text for custom tab of popover.
   */
  @Input() customTabLabel = 'Custom';

  /**
   * Hex color values which are used to set the options of the swatch tab of the colorpicker popover.
   */
  @Input() swatchColors = [
    '#e3abec', '#c2dbf7', '#9fd6ff', '#9de7da', '#9df0c0', '#fff099', '#fed49a',
    '#d073e0', '#86baf3', '#5ebbff', '#44d8be', '#3be282', '#ffe654', '#ffb758',
    '#bd35bd', '#5779c1', '#5679c0', '#00aea9', '#3cba4c', '#f5bc25', '#f99221',
    '#580d8c', '#001970', '#0a2399', '#0b7477', '#0b6b50', '#b67e11', '#b85d0d',
  ];

  /**
   * Whether to make the hex color input readonly.
   */
  @Input() @InputBoolean() readonlyInput = false;

  /**
   * Determines which tab is visible when popover opens.
   */
  @Input() defaultSelectedTab: 'swatches' | 'custom' = 'swatches';

  /**
   * Configures to show both or which one of the color selection interfaces.
   */
  @Input() variant: 'base' | 'swatches' | 'custom' = 'base';

  color: string;

  uid = uniqueId('colorpicker');

  open: boolean;

  disabled: boolean;

  hexCurrent = '#FFF';
  hsvCurrent = getHsvFromHex(this.hexCurrent);

  constructor(private el: ElementRef, private renderer: Renderer2, private cd: ChangeDetectorRef) {
    this.renderer.addClass(this.el.nativeElement, 'slds-color-picker');
  }

  onChange = (_: any) => {};

  onTouched = () => {};

  writeValue(value: string) {
    this.color = value;
    if (isValidHex(value)) {
      this.hexCurrent = value;
      this.hsvCurrent = getHsvFromHex(value);
    }

    this.cd.detectChanges();
  }

  registerOnChange(fn: (value: any) => any): void { this.onChange = fn; }

  registerOnTouched(fn: () => any): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean) { this.disabled = isDisabled; }

  onSwatchSelection(hex: string) {
    this.hsvCurrent = getHsvFromHex(hex);
    this.hexCurrent = hex;
  }

  onCustomSelection(hsv: IHSV) {
    this.hsvCurrent = hsv;
    this.hexCurrent = getHexFromHsv(hsv);
  }

  openChange(open: boolean) {
    this.open = open;
  }

  cancel() {
    this.open = false;
  }

  done() {
    this.open = false;
    if (this.hexCurrent !== this.color) {
      this.color = this.hexCurrent;
      this.onChange(this.color);
    }
  }

  canApply() {
    return isValidHex(this.hexCurrent);
  }

  onInput(hex: string) {
    this.color = hex;

    if (isValidHex(hex)) {
      this.onSwatchSelection(hex);
      this.onChange(hex);
    } else {
      this.onChange(null);
    }
  }

  get isValidInput() {
    return !this.color || isValidHex(this.color);
  }
}
