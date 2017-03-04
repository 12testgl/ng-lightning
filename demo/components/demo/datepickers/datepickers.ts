import {Component} from '@angular/core';

@Component({
  selector: 'demo-datepickers',
  templateUrl: './datepickers.html',
  styles: [`ngl-datepicker { width: 310px; }`],
})
export class DemoDatepickers {
  date: Date;
  mindate: Date;

  gotoDate() {
    this.date = new Date(2005, 10, 9);
  }

  setMinDate() {
    if (!this.mindate){
      this.mindate = new Date(2005, 1, 2);
    } else {
      this.mindate = null;
    }
  }
}
