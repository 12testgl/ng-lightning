import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NglButtonIcon} from '../buttons/button-icon';
import {NglIconButton} from '../buttons/icon';

@Component({
  selector: 'ngl-data-table',
  directives: [NglButtonIcon, NglIconButton],
  template: `
  <table class="slds-table"
  [ngClass]="
  {'slds-table--bordered': type === 'bordered' || type !== 'scrollable',
  'slds-scrollable--x': type === 'scrollable',
  'slds-max-medium-table--stacked': type === 'stacked',
  'slds-max-medium-table--stacked-horizontal': type === 'stacked-horizontal'}
  "
  >
    <thead>
      <tr class="slds-text-heading--label">
        <th *ngFor="#header of thead" [ngClass]="{'slds-is-sortable': header.sorting}" scope="col">
            <span class="slds-truncate">{{header.name}}
              <button *ngIf="header.sorting" type="button" nglButtonIcon="bare" (click)="sort(header)">
                <ngl-icon-button size="small" [icon]="resolveIcon(header.sorting)" [alt]="'Sorted '+header.direction"></ngl-icon-button>
              </button>
            </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="#record of tbody">
         <td *ngFor="#value of getValues(record)" data-label="stage">
          <span class="slds-truncate">{{value}}</span>
        </td>
      </tr>
    </tbody>
  </table>
   `,
})
export class NglDataTable {

  @Input() thead: IHead[];
  @Input() tbody: any[];
  @Input() type: string = 'bordered';
  @Output() onSort: EventEmitter<IHead> = new EventEmitter();

  getValues(record: any): any[] {
    return this.thead.map(header => record[header.name]);
  }

  resolveIcon(sorting: ISort): string {
    switch (sorting.direction) {
      case 'asc':
        return 'arrowdown';
      case 'desc':
        return 'arrowup';
      default:
        return 'dash';
    }
  }

  sort(column: IHead) {
    if (!column.sorting) return;
    this.onSort.emit(column);
  }
}

export interface IHead {
  name: string;
  sorting?: ISort;
}

export interface ISort {
  direction: 'asc' | 'desc' | 'none';
}

export function toggleSortDirection(direction: string): string {
  switch (direction) {
    case 'asc':
      return 'desc';
    case 'desc':
      return 'asc';
    default:
      return 'asc';
  }
}
