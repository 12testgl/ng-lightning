import { Component, TemplateRef, Input, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef,
         HostBinding, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NglRadioGroup } from './radio-group';
import { NglRadioInput } from './input/input';

@Component({
  selector: 'ngl-radio-option',
  templateUrl: './radio-option.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglRadioOption implements OnInit, AfterContentInit, OnDestroy {
  @Input() label: string | TemplateRef<any>;

  @ContentChild(NglRadioInput) input: NglRadioInput;

  constructor(private radioGroup: NglRadioGroup, private cd: ChangeDetectorRef) {}

  type: 'list' | 'button';

  @HostBinding('class.slds-radio')
  get isTypeList() {
    return this.type === 'list';
  }

  @HostBinding('class.slds-button')
  @HostBinding('class.slds-radio_button')
  get isTypeButton() {
    return this.type === 'button';
  }

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.radioGroup.type$.subscribe((type: 'list' | 'button') => {
        this.type = type;
        this.cd.detectChanges();
      }),
      this.radioGroup.error$.subscribe((errorId: string | null) => {
        this.input.describedBy = errorId;
      }),
    );
  }

  ngAfterContentInit() {
    this.input.name = this.radioGroup.uid;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }
}
