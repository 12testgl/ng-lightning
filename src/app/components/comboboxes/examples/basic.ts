import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-comboboxes-basic',
  templateUrl: './basic.html',
})
export class DemoComboboxesBasic {
  options = ['One', 'Two', 'Three'];

  selection: string = null;

  open = false;
}
