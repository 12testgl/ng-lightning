import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule} from '@angular/router';
import {routes} from './app.routing';

import {NglModule} from 'ng-lightning/ng-lightning';

import {AppComp} from './app';
import {IntroComponent} from './intro/intro';
import {PrismComponent} from './intro/prism';
import {NglDemoComponentsModule} from './components/index';
import {SupportComponent} from './support/support';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NglModule.forRoot(),
    NglDemoComponentsModule,
  ],
  declarations: [
    AppComp,
    IntroComponent,
    PrismComponent,
    SupportComponent,
  ],
  bootstrap: [AppComp],
})
export class NglDemoModule {}
