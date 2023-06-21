import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-comboboxes-required',
  templateUrl: './required.html',
})
export class DemoComboboxesRequired {
  options = ['One', 'Two', 'Three'];

  selection: string = null;

  open = false;
}
