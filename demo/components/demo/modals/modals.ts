import {Component} from '@angular/core';

@Component({
  selector: 'demo-modals',
  templateUrl: './modals.html',
})
export class DemoModals {

  opened: boolean = false;
  size: string;

  open(size: string) {
    this.size = size;
    this.opened = !this.opened;
  }

  cancel() {
    this.opened = false;
  }
}
