import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from 'ng-lightning';

@Component({
  selector: 'app-demo-datepickers-config',
  templateUrl: './config.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGL_DATEPICKER_CONFIG,
      useValue: <NglDatepickerConfig>{
        format: 'middle-endian',
        delimiter: '-',
        showToday: false,
        relativeYearFrom: -5,
        relativeYearTo: 5,
      }
    },
  ],
})
export class DemoDatepickersConfig {

  value = new Date();

}
