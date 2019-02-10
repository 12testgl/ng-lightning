import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-popovers-basic',
  templateUrl: './basic.html',
})
export class DemoPopoversBasic {
  placement: string;
  open = true;
  openClick1 = false;
  openClick2 = false;

  change(placement: string) {
    this.open = true;
    this.placement = placement;
  }
}
