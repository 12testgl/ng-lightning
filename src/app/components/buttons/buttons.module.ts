import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoButtonsComponent } from './buttons.component';

// Examples
import { DemoButtonsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoButtonsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoButtonsComponent,
    DemoButtonsBasic,
  ],
})
export class NglDemoButtonsModule {}
