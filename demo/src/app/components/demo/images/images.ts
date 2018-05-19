import {Component} from '@angular/core';

@Component({
  selector: 'demo-images',
  templateUrl: './images.html',
})
export class DemoAvatars {
  variant = 'rectangle';
  size = 'medium';
  src = 'assets/images/avatar1.jpg';
  ratio = '16-by-9';

  private variants: string[] = ['circle', 'rectangle'];
  private sizes: string[] = ['x-small', 'small', 'medium', 'large'];
  private ratios: string[] = ['', '16-by-9', '4-by-3', '1-by-1'];

  changeVariant() {
    this.variant = this.variants[(this.variants.indexOf(this.variant) + 1) % this.variants.length];
  }

  changeSize() {
    this.size = this.sizes[(this.sizes.indexOf(this.size) + 1) % this.sizes.length];
  }

  changeRatio() {
    this.ratio = this.ratios[(this.ratios.indexOf(this.ratio) + 1) % this.ratios.length];
  }
}
