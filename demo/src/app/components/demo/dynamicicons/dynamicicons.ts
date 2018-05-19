import {Component} from '@angular/core';

@Component({
  selector: 'demo-dynamicicons',
  templateUrl: './dynamicicons.html',
})
export class DemoDynamicIcons {

  types: any[] = [
    'waffle',
    'eq',
  ];

  type = this.types[0];

  change() {
    this.type = this.types[(this.types.indexOf(this.type) + 1) % this.types.length];
  }
}
