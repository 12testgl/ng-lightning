import {Component} from '@angular/core';

@Component({
  selector: 'demo-sections',
  templateUrl: './sections.html',
})
export class DemoSections {
  open: boolean = true;
  collapsable: boolean = true;

  change() {
    this.collapsable = !this.collapsable;
  }
}
