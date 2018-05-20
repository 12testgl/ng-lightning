import {Component} from '@angular/core';

@Component({
  selector: 'demo-files',
  templateUrl: './files.html',
})
export class DemoFiles {
  ratio = '16-by-9';
  title = `Image ${this.ratio}`;
  iconName = 'doctype:link';
  overlay = false;

  private ratios: string[] = ['', '16-by-9', '4-by-3', '1-by-1'];

  changeRatio() {
    this.ratio = this.ratios[(this.ratios.indexOf(this.ratio) + 1) % this.ratios.length];
    this.title = `Image ${this.ratio}`;
  }

  toggleIcon() {
    this.iconName = this.iconName ? '' : 'doctype:link';
  }

  toggleTitle() {
    this.title = this.title ? '' : `Image ${this.ratio}`;
  }
}
