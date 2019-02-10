import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-avatar-basic',
  templateUrl: './basic.html',
})
export class DemoAvatarBasic {

  variant = 'rectangle';
  size = 'medium';
  src = 'assets/images/avatar1.jpg';

  private variants: string[] = ['circle', 'rectangle'];
  private sizes: string[] = ['x-small', 'small', 'medium', 'large'];

  changeVariant() {
    this.variant = this.variants[(this.variants.indexOf(this.variant) + 1) % this.variants.length];
  }

  changeSize() {
    this.size = this.sizes[(this.sizes.indexOf(this.size) + 1) % this.sizes.length];
  }

}
