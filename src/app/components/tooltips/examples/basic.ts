import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-tooltips-basic',
  templateUrl: './basic.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTooltipsBasic {
  placement = 'top';
  open = true;
  open1 = false;
  open2 = true;

  change(placement: string) {
    this.open = true;
    this.placement = placement;
  }
}
