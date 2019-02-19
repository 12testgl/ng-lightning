import { Component, Input, ChangeDetectionStrategy, ContentChild, TemplateRef, HostBinding,
         AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglInputElement } from '../element/element';
import { toBoolean, InputBoolean } from '../../util/convert';
import { isRequired } from '../../util/isRequired';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngl-input,[ngl-input]',
  templateUrl: './input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element]': 'true',
  },
})
export class NglInput implements OnChanges, AfterContentInit, OnDestroy {
  @ContentChild(NglInputElement) input: NglInputElement;

  @isRequired
  @Input() label: string | TemplateRef<any>;

  @Input() error: string;

  @Input() @InputBoolean() stacked: boolean;

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
      throw Error(`[ng-lightning] Couldn't find an <input> with [ngl] attribute inside NglInput`);
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
