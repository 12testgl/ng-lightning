import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: '[nglRatingIcon]'})
export class NglRatingIconTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}
