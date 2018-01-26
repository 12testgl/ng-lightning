import { Component } from '@angular/core';

@Component({
  selector: 'demo-pick',
  templateUrl: './pick.html',
})
export class DemoPick {
  selected = 'middle';
  multiple = ['middle', 'right'];
  multipleObject = {
    left: true,
    middle: true,
  };
}
