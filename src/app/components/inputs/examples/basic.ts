import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-inputs-basic',
  templateUrl: './basic.html',
})
export class DemoInputsBasic {
  required = true;

  hasError = false;
  error = 'The input has an error!';

  disabled = false;
}
