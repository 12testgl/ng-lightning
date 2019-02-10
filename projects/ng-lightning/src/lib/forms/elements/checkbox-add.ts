import { Component, Input, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { NglFormElement } from './element';
import { NglFormCheckbox } from './input';
import { NglFormLabelTemplate } from '../form-label';

@Component({
  selector: 'ngl-form-checkbox-add',
  templateUrl: './checkbox-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-checkbox--add-button]': 'true',
  },
  providers: [ {provide: NglFormElement, useExisting: NglFormElementCheckboxAdd} ],
  styles: [`:host { display: block; }`],
})
export class NglFormElementCheckboxAdd extends NglFormElement implements AfterContentInit {
  @ContentChild(NglFormCheckbox) contentEl: NglFormCheckbox;

  @Input('label') labelStr: string;
  @ContentChild(NglFormLabelTemplate) labelTpl: NglFormLabelTemplate;

  constructor(detector: ChangeDetectorRef) {
    super(detector);
  }

  // AoT workaround
  ngAfterContentInit() {
    this.contentEl.assistive = true;
    super.ngAfterContentInit();
  }
}
