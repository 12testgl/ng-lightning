import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-spinners-basic',
  templateUrl: './basic.html',
})
export class DemoSpinnersBasic {

  variant: string = null;
  size = 'large';

  change() {
    this.variant = this.variant === 'brand' ? null : 'brand';
    this.size = this.size === 'large' ? 'small' : 'large';
  }
}
