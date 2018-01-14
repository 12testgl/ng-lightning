import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, PreloadAllModules} from '@angular/router';
import {routes} from './app.routing';

import {NglModule} from 'ng-lightning/ng-lightning';

import {AppComp} from './app';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    NglModule.forRoot(),
  ],
  declarations: [
    AppComp,
  ],
  bootstrap: [AppComp],
})
export class NglDemoModule {}
