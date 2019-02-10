import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-files-basic',
  templateUrl: './basic.html',
})
export class DemoFilesBasic {

  showFilename = true;

  ratio = '16-by-9';

  icon = 'doctype:pdf';

  private ratios: string[] = ['', '16-by-9', '4-by-3', '1-by-1'];

  changeRatio() {
    this.ratio = this.ratios[(this.ratios.indexOf(this.ratio) + 1) % this.ratios.length];
  }

  toggleFilename() {
    this.showFilename = !this.showFilename;
  }

}
