import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-sections-basic',
  templateUrl: './basic.html',
})
export class DemoSectionsBasic {
  open = true;
  collapsable = true;

  change() {
    this.collapsable = !this.collapsable;
  }
}
