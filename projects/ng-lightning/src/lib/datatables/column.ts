import { Directive, Input, ContentChild } from '@angular/core';
import { NglDatatableCell } from './cell';
import { NglDatatableHeadingTemplate } from './heading';
import { InputBoolean } from '../util/convert';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ngl-datatable-column',
})
export class NglDatatableColumn {
  @Input() heading: string;

  @Input() key: string;

  @Input() headClass: any;

  @Input() cellClass: any;

  @Input() @InputBoolean() sortable = false;

  @Input() @InputBoolean() truncate = false;

  @ContentChild(NglDatatableCell) cellTpl: NglDatatableCell;

  @ContentChild(NglDatatableHeadingTemplate) headingTpl: NglDatatableHeadingTemplate;
}
