import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'ng-template[nglPicklistItem]'})
export class NglPicklistItemTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}
