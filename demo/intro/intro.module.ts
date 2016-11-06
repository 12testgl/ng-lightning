import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';
import {routes} from './intro.routing';

import {IntroComponent} from './intro';
import {PrismComponent} from './prism';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    IntroComponent,
    PrismComponent,
  ],
})
export class NglDemoIntroModule {}
