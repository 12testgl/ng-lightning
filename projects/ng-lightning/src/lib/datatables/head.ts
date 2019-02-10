import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, TemplateRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'th[ngl-internal-datatatable-head]',
  templateUrl: './head.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'scope': 'col',
    '[class.slds-is-sorted--asc]': `sortOrder === 'asc'`,
    '[class.slds-is-sorted--desc]': `sortOrder === 'desc'`,
    '[class.slds-is-sorted]': `!!sortOrder`,
  },
})
export class NglInternalDatatableHeadCell {

  @HostBinding('attr.title')
  @Input() heading: string;
  @Input() headingTpl: TemplateRef<any>;

  get header() {
    return this.headingTpl || this.heading;
  }

  @HostBinding('class.slds-is-sortable')
  @Input() sortable: boolean;

  @Input() sortOrder: 'asc' | 'desc';

  @HostBinding('attr.aria-sort')
  get ariaSort() {
    return this.sortOrder ? `${this.sortOrder}ending` : null;
  }

  @Output()sort = new EventEmitter();

  sortChange() {
    this.sort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
  }
}
