import {Component} from '@angular/core';

export interface IComponent {
  key: string;
  title?: string;
  readme?: string;
  html?: string;
  ts?: string;
  api?: string;
};

const keys = [
  'badges', 'breadcrumbs', 'buttons', 'datatables', 'datepickers',
  'forms', 'icons', 'images', 'lookups', 'menus',
  'modals', 'notifications', 'paginations', 'pick', 'picklist',
  'pills', 'popovers', 'ratings', 'sections', 'spinners',
  'tabs',
];

const components: {[key: string]: IComponent} = {};

keys.forEach(key => {
  const component: IComponent = components[key] = { key };

  const path = 'demo/' + key + '/' + key;
  component.html = require('!!raw!./' + path + '.html');
  component.ts = require('!!raw!./' + path + '.ts');
  if (!component.title) {
    component.title = key.charAt(0).toUpperCase() + key.slice(1);
  }
  if (!component.readme) {
    component.readme = require('./demo/' + key + '/README.md').replace(/\{/g, `&#x007b;`).replace(/\}/g, `&#x007d;`);
  }
  if (!component.api) {
    component.api = require('./demo/' + key + '/API.md').replace(/\{/g, `&#x007b;`).replace(/\}/g, `&#x007d;`);
  }
});

@Component({
  templateUrl: './demo.pug',
})
export class DemoComponent {
  components = components;
}
