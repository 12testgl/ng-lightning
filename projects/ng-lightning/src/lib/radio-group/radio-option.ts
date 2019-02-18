import { Component, TemplateRef, Input, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { NglRadioInput } from './input/input';

@Component({
  selector: 'ngl-radio-option',
  templateUrl: './radio-option.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglRadioOption {
  @Input() label: string | TemplateRef<any>;

  @ContentChild(NglRadioInput) input: NglRadioInput;

  constructor(private cd: ChangeDetectorRef) {}

  set type(type: string) {
    this._type = type;
    this.cd.detectChanges();
  }
  get type() {
    return this._type;
  }

  @HostBinding('class.slds-radio')
  get isTypeList() {
    return this.type === 'list';
  }

  @HostBinding('class.slds-button')
  @HostBinding('class.slds-radio_button')
  get isTypeButton() {
    return this.type === 'button';
  }

  private _type: string;

  setError(id: string) {
    this.input.describedBy = id;
  }

}
