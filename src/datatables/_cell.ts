import {Component, ChangeDetectionStrategy, Input, HostBinding} from '@angular/core';
import {NglDatatableColumn} from './column';

@Component({
  selector: 'td[ngl-internal-datatatable-cell]',
  templateUrl: './_cell.jade',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglInternalDatatableCell {
  @Input() row: any;
  @Input() column: NglDatatableColumn;
  @Input() index: number;


  @HostBinding('attr.data-label')
  get dataLabel() {
    return this.column.heading;
  }

  get context() {
    return {
      $implicit: this.value,
      row: this.row,
      index: this.index,
    };
  }

  get value() {
    const { dataKey } = this.column;
    return dataKey ? this.row[ dataKey ] : null;
  }

}
