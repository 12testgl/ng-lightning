import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-tooltips-placement',
  templateUrl: './placement.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTooltipsPlacement {
  open = {};
}
