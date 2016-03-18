import {Component} from 'angular2/core';
import {NGL_DIRECTIVES} from '../../../../../dist/ng-lightning';

@Component({
    selector: 'demo-dropdowns',
    directives: [NGL_DIRECTIVES],
    template: require('./dropdowns.html'),
})
export class DemoDropdowns {
  open = false;

  onToggle($event: Event) {
    $event.stopPropagation();
    this.open = true;
  }
}
