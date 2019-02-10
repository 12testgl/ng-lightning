import { Component, Input, ChangeDetectionStrategy, HostBinding, ContentChild, AfterContentInit } from '@angular/core';
import { NglFormGroup } from './group';
import { NglFormLabelTemplate } from '../form-label';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fieldset[ngl-form-group-alt]',
  templateUrl: './group-alt.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglFormGroupAlternate extends NglFormGroup implements AfterContentInit  {

  @HostBinding('class.slds-form-element') formElementClass = true;

  @Input('label') labelStr: string;
  @ContentChild(NglFormLabelTemplate) labelTpl: NglFormLabelTemplate;

  @HostBinding('class.slds-has-error')
  @Input() error: string;

  @Input() required: boolean;

  @Input() type: string;

  // AoT workaround
  ngAfterContentInit() {
    super.ngAfterContentInit();
  }
}
