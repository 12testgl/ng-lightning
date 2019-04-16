import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-input-basic',
  templateUrl: './basic.html',
})
export class DemoInputBasic {
  required = true;

  hasError = false;
  error = 'The input has an error!';

  disabled = false;
}
