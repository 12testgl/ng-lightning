import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'tr[nglWeekdays]',
  templateUrl: './weekdays.jade',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDatepickerWeekdays {

  @Input() dayNamesShort: string[];
  @Input() dayNamesLong: string[];
  @Input() firstDayOfWeek: number;

  weekdays: any[] = [];

  ngOnChanges() {
    // add days, starting by the first day of week defined by user
    for (let i = 0 + this.firstDayOfWeek; i < 7; i++) {
      this.weekdays.push({
        id: `weekday-${i}`,
        label: this.dayNamesShort[i],
        title: this.dayNamesLong[i],
      });
    }
    // complete with any days preceeding firstDayOfWeek
    for (let i = 0; i < this.firstDayOfWeek; i++) {
      this.weekdays.push({
        id: `weekday-${i}`,
        label: this.dayNamesShort[i],
        title: this.dayNamesLong[i],
      });
    }
  }
}
