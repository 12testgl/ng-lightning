import {Component} from '@angular/core';

@Component({
  selector: 'demo-badges',
  templateUrl: './badges.html',
})
export class DemoBadges {

  theme = 'default';

  private types: string[] = ['default', 'shade', 'inverse', 'alt-inverse', 'success', 'info', 'warning', 'error', 'offline', 'alert-texture'];

  change() {
    this.theme = this.types[(this.types.indexOf(this.theme) + 1) % this.types.length];
  }
}
