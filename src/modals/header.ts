import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'ng-template[nglModalHeader]'})
export class NglModalHeaderTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}
