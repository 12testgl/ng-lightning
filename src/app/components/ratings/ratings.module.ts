import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglRatingsModule, NglAvatarModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoRatingsComponent } from './ratings.component';

// Examples
import { DemoRatingsBasic } from './examples/basic';
import { DemoRatingsConfig } from './examples/config';

const routes: Routes = [
  { path: '', component: DemoRatingsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglRatingsModule,
    NglAvatarModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoRatingsComponent,
    DemoRatingsBasic,
    DemoRatingsConfig,
  ],
})
export class NglDemoRatingsModule {}
