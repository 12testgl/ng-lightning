import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: '[nglPicklistItem]'})
export class NglPicklistItemTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}
