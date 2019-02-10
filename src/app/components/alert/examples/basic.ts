import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-alert-basic',
  templateUrl: './basic.html',
})
export class DemoAlertBasic {
  showTopAlert = false;

  onClose(reason: string) {
    console.log(`Closed by ${reason}`);
  }
}
