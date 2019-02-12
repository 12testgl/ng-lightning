import { Component, Input, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef, AfterContentInit, TemplateRef } from '@angular/core';
import { NglCheckboxInput } from '../input/input';

@Component({
  selector: 'ngl-checkbox-button',
  templateUrl: './checkbox-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-checkbox_add-button]': 'true',
  },
})
export class NglCheckboxButton implements AfterContentInit {
  @ContentChild(NglCheckboxInput) input: NglCheckboxInput;

  @Input() label: string | TemplateRef<any>;

  _uid: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterContentInit() {
    if (!this.input) {
      throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside ${this}`);
    }

    this._uid = this.input.id;
    this.cd.detectChanges();

    this.input.addClass('slds-assistive-text');
  }
}
