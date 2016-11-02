import {Component} from '@angular/core';

@Component({
  selector: 'demo-popovers',
  templateUrl: './popovers.html',
})
export class DemoPopovers {
  placement: string;
  open = true;

  change(placement: string) {
    this.open = true;
    this.placement = placement;
  }
}
