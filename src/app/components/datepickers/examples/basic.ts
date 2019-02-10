import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-datepickers-basic',
  templateUrl: './basic.html',
  styles: [`ngl-datepicker { width: 310px; }`],
})
export class DemoDatepickersBasic {

  date: Date;

  gotoDate() {
    this.date = new Date(2005, 10, 9);
  }
}
