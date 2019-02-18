import { Component, Input, ChangeDetectionStrategy, TemplateRef, HostBinding,
         AfterContentInit, OnChanges, ContentChildren, QueryList, SimpleChanges } from '@angular/core';
import { toBoolean, InputBoolean } from '../util/convert';
import { uniqueId } from '../util/util';
import { isRequired } from '../util/isRequired';
import { NglRadioOption } from './radio-option';

@Component({
  selector: 'ngl-radio-group,[ngl-radio-group]',
  templateUrl: './radio-group.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element]': 'true',
  },
})
export class NglRadioGroup implements OnChanges, AfterContentInit {

  @ContentChildren(NglRadioOption) options: QueryList<NglRadioOption>;

  @isRequired
  @Input() label: string | TemplateRef<any>;

  @Input() error: string;

  @HostBinding('class.slds-has-error')
  get hasError(): boolean {
    return toBoolean(this.error);
  }

  @Input() @InputBoolean() required: boolean;

  get errorId() {
    return `error_${this.uid}`;
  }

  @Input() set type(type: 'list' | 'button') {
    this._type = type;
    this.updateChildrenType();
  }
  get type() {
    return this._type;
  }

  private uid = uniqueId('radio-group');

  private _type: 'list' | 'button' = 'list';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.error && this.options) {
      this.options.forEach((option: NglRadioOption) => {
        option.setError(this.error ? this.errorId : null);
      });
    }
  }

  ngAfterContentInit() {
    this.setChildrenName();
    this.updateChildrenType();
  }

  private setChildrenName() {
    this.options.forEach((option: NglRadioOption) => {
      option.input.name = this.uid;
    });
  }

  private updateChildrenType() {
    if (!this.options) {
      return;
    }

    this.options.forEach((option: NglRadioOption) => {
      option.type = this.type;
    });
  }
}
