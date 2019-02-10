import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-menus-basic',
  templateUrl: './basic.html',
})
export class DemoMenusBasic {
  selected: string;
  open: boolean;

  items = [
    { value: 'Item 1', icon: 'kanban' },
    { value: 'Item 2', icon: 'side_list' },
    { value: 'Item 3', icon: 'table' },
  ];

  onToggle($event: Event) {
    $event.stopPropagation();
    this.open = true;
  }
}
