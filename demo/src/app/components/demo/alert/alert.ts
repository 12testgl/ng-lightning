import {Component} from '@angular/core';

@Component({
  selector: 'demo-alert',
  templateUrl: './alert.html',
})
export class DemoAlert {
  showTopAlert = false;

  onClose(reason: string) {
    console.log(`Closed by ${reason}`);
  }
}
