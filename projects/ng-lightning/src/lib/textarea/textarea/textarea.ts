import { Component, Input, ChangeDetectionStrategy, ContentChild, TemplateRef, HostBinding,
         AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglTextareaInput } from '../input/input';
import { toBoolean } from '../../util/convert';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngl-textarea,[ngl-textarea]',
  templateUrl: './textarea.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element]': 'true',
  },
})
export class NglTextarea implements OnChanges, AfterContentInit, OnDestroy {
  @ContentChild(NglTextareaInput, { static: true }) input: NglTextareaInput;

  @Input() label: string | TemplateRef<any>;

  @Input() fieldLevelHelpTooltip: string | TemplateRef<any>;

  @Input() error: string;

  @HostBinding('class.slds-has-error')
  get hasError(): boolean {
    return toBoolean(this.error);
  }

  required: boolean;

  _uid: string;

  get errorId() {
    return `error_${this._uid}`;
  }

  private ɵRequiredSubscription: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    this.input.describedBy = this.error ? this.errorId : null;
  }

  ngAfterContentInit() {
    if (!this.input) {
      throw Error(`[ng-lightning] Couldn't find an <textarea> with [ngl] attribute inside ngl-textarea`);
    }

    this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
      this.required = required;
      this.cd.detectChanges();
    });

    this._uid = this.input.id;
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.ɵRequiredSubscription) {
      this.ɵRequiredSubscription.unsubscribe();
      this.ɵRequiredSubscription = null;
    }
  }
}
