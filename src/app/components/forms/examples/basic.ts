import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-forms-basic',
  templateUrl: './basic.html',
})
export class DemoFormsBasic {

  required = false;

  hasError = false;
  error = 'The input has an error!';

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
}
