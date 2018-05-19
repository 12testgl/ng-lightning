import {Component} from '@angular/core';

@Component({
  selector: 'demo-toast',
  templateUrl: './toast.html',
})
export class DemoToast {
  showTopToast = false;

  onClose(reason: string) {
    console.log(`Closed by ${reason}`);
  }
}
