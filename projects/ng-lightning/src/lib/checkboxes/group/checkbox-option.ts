import { Component, TemplateRef, Input, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { NglCheckboxInput } from '../input/input';

@Component({
  selector: 'ngl-checkbox-option',
  templateUrl: './checkbox-option.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglCheckboxOption {
  @Input() label: string | TemplateRef<any>;

  @ContentChild(NglCheckboxInput) input: NglCheckboxInput;

  constructor(private cd: ChangeDetectorRef) {}

  set type(type: string) {
    this._type = type;
    this.cd.detectChanges();
  }
  get type() {
    return this._type;
  }

  @HostBinding('class.slds-checkbox')
  get isTypeList() {
    return this.type === 'list';
  }

  @HostBinding('class.slds-button')
  @HostBinding('class.slds-checkbox_button')
  get isTypeButton() {
    return this.type === 'button';
  }

  private _type: string;

  setError(id: string) {
    this.input.describedBy = id;
  }

}
