import {
  Component, Input, ChangeDetectorRef, ContentChild, ContentChildren, QueryList,
  HostBinding, Output, EventEmitter, AfterContentInit, OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NglDatatableColumn } from './column';
import { NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay } from './overlays';

export interface INglDatatableSort {
  key: string;
  order: 'asc' | 'desc';
}

export interface INglDatatableRowClick {
  event: Event;
  data: any;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'table[ngl-datatable]',
  templateUrl: './datatable.html',
  host: {
    '[class.slds-table]': 'true',
  },
  styles: [`
    .ngl-datatable-loading {
      position: absolute;
      z-index: 1;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(255, 255, 255, 0.5)
    }
  `],
})
export class NglDatatable implements AfterContentInit, OnDestroy {

  @Input() data: any[] = [];
  @Input() trackByKey: string;

  @Input() sort: INglDatatableSort;
  @Output() sortChange = new EventEmitter<INglDatatableSort>();

  @HostBinding('class.slds-is-relative')
  @Input() loading = false;

  @ContentChild(NglDatatableLoadingOverlay) loadingOverlay: NglDatatableLoadingOverlay;

  get showLoading() {
    return this.loading && this.loadingOverlay;
  }

  @ContentChild(NglDatatableNoRowsOverlay) noRowsOverlay: NglDatatableNoRowsOverlay;

  @ContentChildren(NglDatatableColumn) columns: QueryList<NglDatatableColumn>;

  @Output() rowClick = new EventEmitter<INglDatatableRowClick>();

  private _columnsSubscription: Subscription;

  constructor(private detector: ChangeDetectorRef) {}

  columnTrackBy(index: number, column: NglDatatableColumn) {
    return column.key || index;
  }

  dataTrackBy = (index: number, data: any) => {
    return this.trackByKey ? data[this.trackByKey] : index;
  }

  onColumnSort(column: NglDatatableColumn, order: 'asc' | 'desc') {
    const key = column.key;
    if (!key) {
      throw new Error(`ng-lightning: No "key" property is set for sortable column "${column.heading}"`);
    }
    this.sortChange.emit({key, order});
  }

  getColumnSortOrder(column: NglDatatableColumn) {
    return this.sort && column.key === this.sort.key ? this.sort.order : null;
  }

  onRowClick(event: Event, data: any) {
    this.rowClick.emit({ event, data });
  }

  ngAfterContentInit() {
    this._columnsSubscription = this.columns.changes.subscribe(() => this.detector.markForCheck());
  }

  ngOnDestroy() {
    if (this._columnsSubscription) {
      this._columnsSubscription.unsubscribe();
      this._columnsSubscription = null;
    }
  }
}
