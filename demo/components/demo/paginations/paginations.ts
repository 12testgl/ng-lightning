import {Component} from '@angular/core';

@Component({
  selector: 'demo-paginations',
  templateUrl: './paginations.html',
})
export class DemoPaginations {
  total = 172;

  pageDefault: number;
  pageBoundary: number;
  page: number;
}
