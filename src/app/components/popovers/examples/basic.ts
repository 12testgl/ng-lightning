import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-popovers-basic',
  templateUrl: './basic.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoPopoversBasic {
  open: any = {};
  open1 = true;
}
