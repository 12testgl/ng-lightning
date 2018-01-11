import {Component} from '@angular/core';

@Component({
  selector: 'demo-badges',
  templateUrl: './badges.html',
})
export class DemoBadges {

  type = 'inverse';

  private types: string[] = ['default', 'shade', 'inverse'];

  change() {
    this.type = this.types[(this.types.indexOf(this.type) + 1) % 3];
  }
}
