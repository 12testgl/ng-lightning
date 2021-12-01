import { Component, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { NglDateAdapter, NGL_DATE_ADAPTER } from 'ng-lightning';

@Injectable()
export class DemoCustomAdapter extends NglDateAdapter {
  pattern(name: 'big-endian' | 'little-endian' | 'middle-endian', delimiter: string): string {
    return name === 'little-endian' ? 'MMM dd yyyy' : 'MM/dd/yy';
  }
}

@Component({
  selector: 'app-demo-datepickers-customadapter',
  templateUrl: './customadapter.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: NGL_DATE_ADAPTER, useClass: DemoCustomAdapter}]
})
export class DemoDatepickersCustomAdapter {

  value: Date;

}
