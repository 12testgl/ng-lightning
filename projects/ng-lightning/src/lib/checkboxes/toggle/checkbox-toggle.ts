import { Component, Input, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef, AfterContentInit,
         TemplateRef, HostBinding, OnDestroy } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import { toBoolean } from '../../util/convert';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngl-checkbox-toggle',
  templateUrl: './checkbox-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element]': 'true',
  },
})
export class NglCheckboxToggle implements AfterContentInit, OnDestroy {
  @ContentChild(NglCheckboxInput) input: NglCheckboxInput;

  @Input() label: string | TemplateRef<any>;

  @Input() error: string;

  @Input() enabledText = 'Enabled';
  @Input() disabledText = 'Disabled';

  @HostBinding('class.slds-has-error')
  get hasError(): boolean {
    return toBoolean(this.error);
  }

  required: boolean;

  uid: string;

  private ɵRequiredSubscription: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterContentInit() {
    if (!this.input) {
      throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside NglCheckboxToggle`);
    }

    this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
      this.required = required;
      this.cd.detectChanges();
    });

    this.uid = `${this.input.id}_toggle`;
    this.input.describedBy = this.uid;
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.ɵRequiredSubscription) {
      this.ɵRequiredSubscription.unsubscribe();
      this.ɵRequiredSubscription = null;
    }
  }
}
