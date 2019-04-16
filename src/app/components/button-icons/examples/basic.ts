import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-button-icons-basic',
  templateUrl: './basic.html',
})
export class DemoButtonIconsBasic {

  selected = true;
  iconType = 'border';
  sizes: string[] = ['x-small', 'small', 'large'];

  change() {
    this.selected = !this.selected;
    this.iconType = this.iconType === 'border' ? 'container' : 'border';
  }
}
