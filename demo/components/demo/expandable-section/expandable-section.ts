import {Component} from '@angular/core';

@Component({
  selector: 'demo-expandable-section',
  templateUrl: './expandable-section.html',
})
export class DemoExpandableSection {
  open: boolean = false;
  collapsable: boolean = true;

  change() {
    this.collapsable = !this.collapsable;
  }
}
