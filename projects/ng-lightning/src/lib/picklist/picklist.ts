import {
  Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ContentChild, ViewChild, ElementRef,
  OnDestroy, AfterContentInit
} from '@angular/core';
import { filter as rxFilter } from 'rxjs/operators';
import { NglPicklistItemTemplate } from './item';
import { NglPick } from '../pick/pick';
import { InputBoolean } from '../util/convert';

@Component({
  selector: 'ngl-picklist[nglPick]',
  templateUrl: './picklist.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    li.slds-is-active {
      background-color: #F4F6F9;
    }`,
  ],
})
export class NglPicklist implements AfterContentInit, OnDestroy {

  filteredData: any[];

  @Input() set data(data: any[]) {
    this._data = data;
    this.filterData();
  }
  get data() {
    return this._data;
  }

  @Input() @InputBoolean() fluid = false;

  @Input() @InputBoolean() disabled = false;

  @Input() dropdownListClass: any;

  @Input('filter') filterType: string | Function;

  @Input() filterPlaceholder = '';

  @Input() set open(value: boolean) {
    this._open = value;
    if (this.open && this.hasFilter) {
      setTimeout(() => this.focusFilter());
    }
  }
  get open() {
    return this._open;
  }
  @Output() openChange = new EventEmitter();

  @ContentChild(NglPicklistItemTemplate) itemTemplate: NglPicklistItemTemplate;

  @ViewChild('filterInput') filterInput: ElementRef;

  get hasFilter() {
    return typeof(this.filterType) !== 'undefined';
  }

  filter = '';

  private _data: any[];
  private _open = false;
  private _changeSubscription: any;
  private filterActiveIndex = 0;
  private hasFilterFocus = false;

  constructor(private pick: NglPick) {}

  ngAfterContentInit() {
    this._changeSubscription = this.pick.nglPickChange.pipe(rxFilter(() => !this.pick.isMultiple))
                                .subscribe(() => this.openChange.emit(false));
  }

  ngOnDestroy() {
    if (this._changeSubscription) {
      this._changeSubscription.unsubscribe();
      this._changeSubscription = null;
    }
  }

  filterData() {
    this.filteredData = this._filterData();
    this.setFilterActive(); // Keep active index in bounds
  }

  _filterData() {
    if (!this.data || !this.hasFilter || !this.filter) {
      return this.data;
    }
    const filter = <any>this.filterType;
    switch (typeof(filter)) {
      case 'string':
        return this.data.filter(d => (filter ? d[filter] : d.toString()).toLowerCase().indexOf(this.filter.toLowerCase()) !== -1);
      case 'function':
        return this.data.filter(filter);
      default:
        throw new Error(`Invalid NglPicklist filter type (${typeof(this.filterType)}). The filter must be empty, a field name or a filter function.`);
    }
  }

  isOptionActive(index: number) {
    return this.hasFilter && this.filterActiveIndex === index;
  }

  onOptionHover(index: number) {
    if (!this.hasFilterFocus) { return; }
    this.filterActiveIndex = index;
  }

  filterChange(filter: string) {
    this.filter = filter;
    this.filterData();
  }

  setFilterActive(moves: number = 0, evt?: Event) {
    if (evt) {
      evt.preventDefault();
      evt.stopPropagation();
    }

    this.filterActiveIndex = Math.max(Math.min(this.filterActiveIndex + moves, this.filteredData.length - 1), 0);
  }

  onFilterPick() {
    if (!this.filteredData.length || this.filterActiveIndex < 0) { return; }
    this.pick.selectOption(this.filteredData[this.filterActiveIndex]);
  }

  focusFilter() {
    this.filterInput.nativeElement.focus();
  }

  onFilterFocus() {
    this.filterActiveIndex = 0;
    this.hasFilterFocus = true;
  }

  onFilterBlur() {
    this.filterActiveIndex = -1;
    this.hasFilterFocus = false;
  }
}
