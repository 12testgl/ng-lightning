import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-datepickers-input',
  templateUrl: './input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoDatepickersInput {

  value = new Date(2010, 8, 30);

  showToday = true;

  gotoDate() {
    this.value = new Date(2005, 10, 9);
  }

}
