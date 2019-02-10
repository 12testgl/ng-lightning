import { Directive, TemplateRef } from '@angular/core';

@Directive({selector: '[nglLookupItem]'})
export class NglLookupItemTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: '[nglLookupLabel]'})
export class NglLookupLabelTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  selector: '[nglLookupHeader]',
  host: {
    '[class.slds-lookup__item--label]': 'true',
  },
})
export class NglLookupHeader {}
