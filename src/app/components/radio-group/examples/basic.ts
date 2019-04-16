import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-radio-group-basic',
  templateUrl: './basic.html',
})
export class DemoRadioGroupBasic {
  required = true;

  hasError = false;
  error = 'The input has an error!';

  disabled = false;
}
