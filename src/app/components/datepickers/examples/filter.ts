import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-datepickers-filter',
  templateUrl: './filter.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoDatepickersFilter {

  value = new Date();

  minDate = new Date(2000, 4, 10);

  maxDate = new Date(2020, 0, 1);

  dateDisabled = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day === 0 || day === 6;
  }

}
