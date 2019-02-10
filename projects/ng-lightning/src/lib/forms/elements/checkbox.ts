import { Component, Input, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { NglFormElement } from './element';
import { NglFormCheckbox } from './input';
import { NglFormLabelTemplate } from '../form-label';

@Component({
  selector: 'ngl-form-checkbox',
  templateUrl: './checkbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element]': 'true',
    '[class.slds-has-error]': '!!error',
  },
  providers: [ {provide: NglFormElement, useExisting: NglFormElementCheckbox} ],
  styles: [`:host { display: block; }`],
})
export class NglFormElementCheckbox extends NglFormElement implements AfterContentInit {
  @ContentChild(NglFormCheckbox) contentEl: NglFormCheckbox;

  @Input('label') labelStr: string;
  @ContentChild(NglFormLabelTemplate) labelTpl: NglFormLabelTemplate;

  @Input() error: string;

  constructor(detector: ChangeDetectorRef) {
    super(detector);
  }

  // AoT workaround
  ngAfterContentInit() {
    super.ngAfterContentInit();
  }
}
