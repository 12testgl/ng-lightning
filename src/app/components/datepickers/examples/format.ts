import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-datepickers-format',
  templateUrl: './format.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoDatepickersFormat {

  value: Date;

}
