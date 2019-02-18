import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-select-basic',
  templateUrl: './basic.html',
})
export class DemoSelectBasic {
  required = true;

  hasError = false;
  error = 'The input has an error!';

  disabled = false;
}
