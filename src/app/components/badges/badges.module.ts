import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglBadgesModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoBadgesComponent } from './badges.component';

// Examples
import { DemoBadgesBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoBadgesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglBadgesModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoBadgesComponent,
    DemoBadgesBasic,
  ],
})
export class NglDemoBadgesModule {}
