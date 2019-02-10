import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-paginations-basic',
  templateUrl: './basic.html',
})
export class DemoPaginationsBasic {
  total = 172;

  pageDefault: number;
  pageBoundary: number;
  page: number;
}
