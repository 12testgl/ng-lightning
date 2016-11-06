import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';
import {routes} from './support.routing';

import {SupportComponent} from './support';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SupportComponent,
  ],
})
export class NglDemoSupportModule {}
