import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'plunker',
  templateUrl: './plunker.pug',
  exportAs: 'playground',
})
export class Plunker {
  component: any;

  index() {
    if (!this.component) return '';
    return require('!!pug?pretty=true!./files/index.pug')(__ENV__);
  }

  ts() {
    if (!this.component) return '';

    const { key } = this.component;

    const raw = require('!!raw!../demo/' + key + '/' + key + '.ts');
    return raw.replace(/selector: '([^']+)'/, 'selector: \'my-app\'')
              .replace(`'./${key}.html'`, '\'app/demo.html\'')
              .replace(/class Demo(.*) \{/, 'class AppComponent {');
  }

  html() {
    if (!this.component) return '';

    const { key } = this.component;

    const raw = require('!!raw!../demo/' + key + '/' + key + '.html');
    return raw;
  }

  lib() {
    return require('!!raw!bundle.umd.js');
  }

  systemjs() {
    const libPath = __ENV__.production ? `npm:ng-lightning@${__ENV__.pkg.version}/bundles/ng-lightning.umd.js` : './ng-lightning.umd.js';
    return require('!!raw!./files/systemjs.config.js').replace('__NG_LIGHTHNING_URL__', libPath);
  }

  raw(filename: string) {
    return require('!!raw!./files/' + filename);
  }

  open(component: any) {
    this.component = component;
    setTimeout(() => this.element.nativeElement.querySelector('form').submit());
  }

  constructor(public element: ElementRef) {}
}
