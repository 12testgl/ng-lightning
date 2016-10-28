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
    this.weekdays = [];
    for (let i = 0; i < 7; i++) {
      const offset = (this.firstDayOfWeek + i) % 7;
      this.weekdays.push({
        id: `weekday-${i}`,
        label: this.dayNamesShort[offset],
        title: this.dayNamesLong[offset],
      });
    }
  }
}
