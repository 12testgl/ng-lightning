import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: '[nglDatatableHeading]'})
export class NglDatatableHeadingTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}
