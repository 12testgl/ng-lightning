import {Component} from 'angular2/core';
import {NGL_DIRECTIVES} from '../../../dist/ng-lightning';
import {Plunker} from './playground/plunker';
import {IComponent, components} from './components';

@Component({
  template: require('./demo.jade')({ components }),
  directives: [NGL_DIRECTIVES, Plunker].concat(components.map((c: any) => c.component)),
})
export class DemoRoute {
  selectedTab: string[] = [];

  getComponent(key: string): IComponent {
    for (var i = 0, ii = components.length; i < ii; i++) {
      if (components[i].key === key) {
        return components[i];
      }
    }
  }

}
