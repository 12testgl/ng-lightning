import './vendor';
import {Component, provide, enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Router, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {NGL_DIRECTIVES} from '../dist/ng-lightning';
import {components} from './components/demo/components';
import {bootstrap} from 'angular2/platform/browser';

import {provideNglConfig} from '../dist/ng-lightning';

import {IntroRoute} from './components/intro/intro';
import {DemoRoute} from './components/demo/demo';
import {SupportRoute} from './components/support/support';

declare const __ENV__: any;
if (__ENV__.production) {
  enableProdMode();
}

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, NGL_DIRECTIVES],
    template: require('./app.jade')(Object.assign({}, __ENV__, {components})),
})
@RouteConfig([
  { path: '/', name: 'Intro', component: IntroRoute, useAsDefault: true },
  { path: '/components', name: 'Components', component: DemoRoute },
  { path: '/support', name: 'Support', component: SupportRoute },
])
export class App {
  constructor(private router: Router) {}

  mustShowHeaderNavigation() {
    return this.router.currentInstruction && this.router.currentInstruction.urlPath === 'components';
  }

  scrollToSection(key: string) {
    (<any>document.querySelector(`section#${key}`)).scrollIntoView();
    document.body.scrollTop -= 80;
  }
}

bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provideNglConfig(),
]);
