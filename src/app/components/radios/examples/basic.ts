import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-radios-basic',
  templateUrl: './basic.html',
})
export class DemoRadiosBasic {
  required = true;

  hasError = false;
  error = 'The input has an error!';

  disabled = false;
}
