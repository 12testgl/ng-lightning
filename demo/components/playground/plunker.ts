import {Component, ElementRef} from '@angular/core';

const index = require('!!pug?pretty=true!./files/index.pug')(process.env);
const systemjs = require('!!raw!./files/systemjs.config.js').replace('__NG_LIGHTHNING_URL__',
                    process.env.production ? `npm:ng-lightning@${process.env.pkg.version}/bundles/ng-lightning.umd.js` : './ng-lightning.umd.js');
const appMain = require('!!raw!./files/app/main.ts');
const appModule = require('!!raw!./files/app/module.ts');

@Component({
  selector: 'plunker',
  templateUrl: './plunker.pug',
  exportAs: 'playground',
})
export class Plunker {
  component: any;

  index = index;
  appMain = appMain;
  appModule = appModule;
  systemjs = systemjs;

  ts() {
    return this.component.ts.replace(/selector: '([^']+)'/, 'selector: \'my-app\'')
              .replace(`'./${this.component.key}.html'`, '\'app/demo.html\'')
              .replace(/class Demo(.*) \{/, 'class AppComponent {');
  }

  html() {
    return this.component.html;
  }

  lib = require('!!raw!bundle.umd.js');

  open(component: any) {
    this.component = component;
    setTimeout(() => this.element.nativeElement.querySelector('form').submit());
  }

  constructor(private element: ElementRef) {}
}
