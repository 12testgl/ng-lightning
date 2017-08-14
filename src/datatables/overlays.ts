import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: '[nglLoadingOverlay]'})
export class NglDatatableLoadingOverlay {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: '[nglNoRowsOverlay]'})
export class NglDatatableNoRowsOverlay {
  constructor(public templateRef: TemplateRef<any>) {}
}
