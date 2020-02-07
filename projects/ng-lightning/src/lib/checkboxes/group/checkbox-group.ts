import { Component, Input, ChangeDetectionStrategy, TemplateRef, HostBinding,
         AfterContentInit, OnChanges, ContentChildren, QueryList, SimpleChanges } from '@angular/core';
import { toBoolean, InputBoolean } from '../../util/convert';
import { uniqueId } from '../../util/util';
import { NglCheckboxOption } from './checkbox-option';

@Component({
  selector: 'ngl-checkbox-group,[ngl-checkbox-group]',
  templateUrl: './checkbox-group.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element]': 'true',
  },
})
export class NglCheckboxGroup implements OnChanges, AfterContentInit {

  @ContentChildren(NglCheckboxOption) options: QueryList<NglCheckboxOption>;

  @Input() label: string | TemplateRef<any>;

  @Input() error: string | TemplateRef<any>;

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

  private uid = uniqueId('checkbox-group');

  private _type: 'list' | 'button' = 'list';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.error && this.options) {
      this.options.forEach((option: NglCheckboxOption) => {
        option.setError(this.error ? this.errorId : null);
      });
    }
  }

  ngAfterContentInit() {
    this.updateChildrenType();
  }

  private updateChildrenType() {
    if (!this.options) {
      return;
    }

    this.options.forEach((option: NglCheckboxOption) => {
      option.type = this.type;
    });
  }
}
