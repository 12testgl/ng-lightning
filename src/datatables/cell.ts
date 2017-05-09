import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'ng-template[nglDatatableCell]'})
export class NglDatatableCell {
  constructor(public templateRef: TemplateRef<any>) {}
}
