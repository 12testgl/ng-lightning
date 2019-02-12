import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-checkboxes-basic',
  templateUrl: './basic.html',
})
export class DemoCheckboxesBasic {
  required = true;

  hasError = false;
  error = 'The input has an error!';

  disabled = false;
}
