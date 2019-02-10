import { Component, Input, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { NglFormElement } from './element';
import { NglFormCheckbox } from './input';
import { NglFormLabelTemplate } from '../form-label';

@Component({
  selector: 'ngl-form-checkbox-toggle',
  templateUrl: './checkbox-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element]': 'true',
    '[class.slds-has-error]': '!!error',
  },
  providers: [ {provide: NglFormElement, useExisting: NglFormElementCheckboxToggle} ],
  styles: [`:host { display: block; }`],
})
export class NglFormElementCheckboxToggle extends NglFormElement implements AfterContentInit {
  @ContentChild(NglFormCheckbox) contentEl: NglFormCheckbox;

  @Input('label') labelStr: string;
  @ContentChild(NglFormLabelTemplate) labelTpl: NglFormLabelTemplate;

  @Input() error: string;
  @Input() enabledText = 'Enabled';
  @Input() disabledText = 'Disabled';

  constructor(detector: ChangeDetectorRef) {
    super(detector);
  }

  // AoT workaround
  ngAfterContentInit() {
    super.ngAfterContentInit();
  }
}
