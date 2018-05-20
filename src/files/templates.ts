import {Directive, TemplateRef} from '@angular/core';

@Directive({ selector: '[nglFileActions]' })
export class NglFileActionsTemplate {
  constructor(public templateRef: TemplateRef<any>) { }
}
