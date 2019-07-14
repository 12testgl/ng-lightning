import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglAlertModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoAlertComponent } from './alert.component';

// Examples
import { DemoAlertBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoAlertComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglAlertModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoAlertComponent,
    DemoAlertBasic,
  ],
})
export class NglDemoAlertModule {}
