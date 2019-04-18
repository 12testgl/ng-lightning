import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-datepickers-basic',
  templateUrl: './basic.html',
})
export class DemoDatepickersBasic {

  date: Date;

  gotoDate() {
    this.date = new Date(2005, 10, 9);
  }

}
