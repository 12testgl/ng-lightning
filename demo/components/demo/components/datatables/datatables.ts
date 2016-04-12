import {Component} from 'angular2/core';
import {NGL_DIRECTIVES} from '../../../../../dist/ng-lightning';
import {IHead, ISort, toggleSortDirection} from '../../../../../dist/data-tables/data-table';

@Component({
  selector: 'demo-datatables',
  directives: [NGL_DIRECTIVES],
  template: require('./datatables.html'),
})
export class DemoDataTables {

  type: string = 'bordered';

  headers: IHead[] = [
    <IHead>{name: 'name'},
    <IHead>{name: 'surname', sorting: <ISort>{direction: 'none'}},
  ];

  data: any[] = [
    {name: 'Peter', surname: 'Pan'},
    {name: 'Bilbo', surname: 'Baggins'},
    {name: 'Frodo', surname: 'Baggins'},
  ];

  sort(header: IHead) {
    let column = header.name;
    header.sorting.direction = toggleSortDirection(header.sorting.direction);
    this.data.sort((one: any, another: any) => {
      return header.sorting.direction === 'asc' ?
        one[column].localeCompare(another[column]) :
        another[column].localeCompare(one[column]);
    });
  }
}
