import { Component, Input, ChangeDetectionStrategy, TemplateRef, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean, InputBoolean } from '../util/convert';
import { uniqueId } from '../util/util';
import { isRequired } from '../util/isRequired';

@Component({
  selector: 'ngl-radio-group,[ngl-radio-group]',
  templateUrl: './radio-group.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element]': 'true',
  },
})
export class NglRadioGroup implements OnChanges {

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

  @Input() type: 'list' | 'button' = 'list';

  uid = uniqueId('radio-group');

  type$ = new BehaviorSubject<'list' | 'button'>(this.type);

  error$ = new BehaviorSubject<string | null>(this.error);

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type) {
      this.type$.next(this.type);
    }
    if (changes.error) {
      this.error$.next(this.hasError ? this.errorId : null);
    }
  }
}
