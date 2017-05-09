import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'ng-template[nglLoadingOverlay]'})
export class NglDatatableLoadingOverlay {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'ng-template[nglNoRowsOverlay]'})
export class NglDatatableNoRowsOverlay {
  constructor(public templateRef: TemplateRef<any>) {}
}
