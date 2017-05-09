import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'ng-template[nglRatingIcon]'})
export class NglRatingIconTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}
