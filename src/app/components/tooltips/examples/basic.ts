import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-tooltips-basic',
  templateUrl: './basic.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTooltipsBasic {

  placements = ['top', 'right', 'bottom', 'left'];

  placement = this.placements[0];

  open = true;
  open1 = false;
  open2 = true;

  change() {
    const i = this.placements.indexOf(this.placement);
    this.placement = this.placements[(i + 1) % 4];
  }
}
