import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-datepickers-masking',
  templateUrl: './masking.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoDatepickersMasking {

  value = new Date(2010, 8, 30);

  cleaveOptions = {
    date: true,
    delimiter: '/',
    datePattern: ['Y', 'm', 'd']
  };

}
