import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-textarea-basic',
  templateUrl: './basic.html',
})
export class DemoTextareaBasic {
  required = true;

  hasError = false;
  error = 'The input has an error!';

  disabled = false;
}
