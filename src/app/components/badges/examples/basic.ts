import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-badges-basic',
  templateUrl: './basic.html',
})
export class DemoBadgesBasic {

  theme = 'default';

  private types: string[] = [
    'default', 'shade', 'inverse', 'alt-inverse', 'success',
    'info', 'warning', 'error', 'offline', 'alert-texture',
  ];

  change() {
    this.theme = this.types[(this.types.indexOf(this.theme) + 1) % this.types.length];
  }
}
