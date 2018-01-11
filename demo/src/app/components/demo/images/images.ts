import {Component} from '@angular/core';

@Component({
  selector: 'demo-images',
  templateUrl: './images.html',
})
export class DemoAvatars {
  type = 'rectangle';
  size = 'medium';
  src = 'assets/images/avatar1.jpg';
  ratio = '16-by-9';

  private types: string[] = ['circle', 'rectangle'];
  private sizes: string[] = ['x-small', 'small', 'medium', 'large'];
  private ratios: string[] = ['', '16-by-9', '4-by-3', '1-by-1'];

  changeType() {
    this.type = this.types[(this.types.indexOf(this.type) + 1) % 2];
  }

  changeSize() {
    this.size = this.sizes[(this.sizes.indexOf(this.size) + 1) % 4];
  }

  changeRatio() {
    this.ratio = this.ratios[(this.ratios.indexOf(this.ratio) + 1) % 4];
  }
};
