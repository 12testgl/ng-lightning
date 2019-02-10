import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, TemplateRef, OnChanges, AfterContentInit } from '@angular/core';
import { uniqueId, toBoolean } from '../../util/util';
import { NglFormInput } from './input';
import { NglFormLabelTemplate, getFormLabel } from '../form-label';

@Component({
  selector: 'ngl-form-element',
  templateUrl: './element.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element]': 'true',
    '[class.slds-has-error]': '!!error',
  },
  styles: [`:host { display: block; }`],
})
export class NglFormElement implements OnChanges, AfterContentInit {
  @ContentChild(NglFormInput) contentEl: NglFormInput;

  @Input('label') labelStr: string;
  @ContentChild(NglFormLabelTemplate) labelTpl: NglFormLabelTemplate;

  @Input() error: string;

  uid = uniqueId('form_element');

  required = false;

  _label: TemplateRef<any> | string;

  constructor(protected detector: ChangeDetectorRef) {}

  ngOnChanges(changes?: any) {
    this.setFormLabel();
    this.setInputErrorId();
  }

  ngAfterContentInit() {
    if (!this.contentEl) {
      throw Error(`Couldn't find an input, textarea or select with [nglFormControl] attribute inside <ngl-form-element>`);
    }
    this.contentEl.id = this.uid;
    this.setInputErrorId();
    this.setFormLabel();
  }

  setRequired(required: string | boolean) {
    this.required = toBoolean(required);
    this.detector.markForCheck();
  }

  protected setInputErrorId() {
    if (!this.contentEl) { return; }
    this.contentEl.describedBy = this.error ? `error_${this.uid}` : null;
  }

  protected setFormLabel() {
    this._label = getFormLabel(this.labelStr, this.labelTpl);
  }
}
