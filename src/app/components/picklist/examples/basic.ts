import { Component } from '@angular/core';
import { NglComboboxOptionItem } from 'ng-lightning';

@Component({
  selector: 'app-demo-picklist-basic',
  templateUrl: './basic.html',
})
export class DemoPicklistBasic {
  options: NglComboboxOptionItem[] = Array.from({ length: 20 }).map((_, i) => ({
    value: i,
    label: `${i} Option`,
    disabled: i % 3 === 0,
  }));

  selection = 8;

  open = false;
}
