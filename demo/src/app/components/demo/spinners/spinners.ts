import {Component} from '@angular/core';

@Component({
  selector: 'demo-spinners',
  templateUrl: './spinners.html',
})
export class DemoSpinners {

  variant: string = null;
  size = 'large';

  change() {
    this.variant = this.variant === 'brand' ? null : 'brand';
    this.size = this.size === 'large' ? 'small' : 'large';
  }
}
