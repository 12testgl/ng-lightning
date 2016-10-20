import { Component } from '@angular/core';

@Component({
  selector: 'demo-paginations',
  template: require('./paginations.html'),
})
export class DemoPaginations {
  total = 172;

  isCenter: boolean = false;

  changePostion(): void {
    this.isCenter = !this.isCenter;
  }
}
