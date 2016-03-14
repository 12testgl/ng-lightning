import { Component } from 'angular2/core';
import { NGL_DIRECTIVES } from '../../../../../dist/ng-lightning';

@Component({
  selector: 'demo-button-groups',
  directives: [NGL_DIRECTIVES],
  template: require('./button-groups.html'),
})
export class DemoButtonGroups {
  options: any[] = [{}, 'opt2'];
  selectedOption = this.options[0];

  addOption() {
    this.options.push('op' + (this.options.length + 1));
  }

  removeOption() {
    this.options.splice(this.options.length - 1, 1);
  }
}
