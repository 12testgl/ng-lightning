import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-toast-basic',
  templateUrl: './basic.html',
})
export class DemoToastBasic {
  showTopToast = false;

  onClose(reason: string) {
    console.log(`Closed by ${reason}`);
  }
}
