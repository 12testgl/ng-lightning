import {Component, ElementRef} from '@angular/core';

const index = require('!!pug-loader?pretty=true!./files/index.pug')(process.env);
const systemjs = require('!!raw-loader!./files/systemjs.config.js').replace('__NG_LIGHTHNING_URL__',
                    process.env.production ? `npm:ng-lightning@${process.env.version}/bundles/ng-lightning.umd.js` : './ng-lightning.umd.js');
const appMain = require('!!raw-loader!./files/app/main.ts');
const appModule = require('!!raw-loader!./files/app/module.ts');

@Component({
  selector: 'plunker',
  templateUrl: './plunker.html',
  exportAs: 'playground',
})
export class Plunker {
  component: any;

  index = index;
  appMain = appMain;
  appModule = appModule;
  systemjs = systemjs;

  localBundle = !process.env.production;

  ts() {
    return this.component.ts.replace(/selector: '([^']+)'/, 'selector: \'my-app\'')
              .replace(`'./${this.component.key}.html'`, '\'app/demo.html\'')
              .replace(/class Demo(.*) \{/, 'class AppComponent {');
  }

  html() {
    return this.component.html;
  }

  actionSprite() {
    return require('!!raw-loader!@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg');
  }

  customSprite() {
    return require('!!raw-loader!@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg');
  }

  doctypeSprite() {
    return require('!!raw-loader!@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg');
  }

  standardSprite() {
    return require('!!raw-loader!@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg');
  }

  utilitySprite() {
    return require('!!raw-loader!@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg');
  }

  // Uncomment this if you you want to test UMD bundle during development
  lib = ''; // require('!!raw-loader!ng-lightning/bundles/ng-lightning.umd.js');

  open(component: any) {
    this.component = component;
    setTimeout(() => this.element.nativeElement.querySelector('form').submit());
  }

  constructor(private element: ElementRef) {}
}
