import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-dynamicicons-basic',
  templateUrl: './basic.html',
})
export class DemoDynamicIconsBasic {

  types: any[] = [
    'waffle',
    'eq',
  ];

  type = this.types[0];

  change() {
    this.type = this.types[(this.types.indexOf(this.type) + 1) % this.types.length];
  }
}
