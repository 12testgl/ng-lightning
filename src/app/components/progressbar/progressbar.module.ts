import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglProgressBarModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoProgressBarComponent } from './progressbar.component';

// Examples
import { DemoProgressBarBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoProgressBarComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglProgressBarModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoProgressBarComponent,
    DemoProgressBarBasic,
  ],
})
export class NglDemoProgressBarModule {}
