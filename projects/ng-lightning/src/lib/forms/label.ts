import { Component, Input, ChangeDetectionStrategy, TemplateRef, ElementRef, Renderer2, OnInit } from '@angular/core';
import { InputBoolean } from '../util/convert';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'label[nglFormLabel]',
  templateUrl: './label.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglFormLabel implements OnInit {

  @Input('nglFormLabel') label: string | TemplateRef<any>;

  @Input('nglFormLabelClass') klass = 'slds-form-element__label';

  @Input() @InputBoolean() required: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, this.klass);
  }

}
