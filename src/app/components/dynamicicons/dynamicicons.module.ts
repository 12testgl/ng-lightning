import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglDynamicIconsModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoDynamicIconsComponent } from './dynamicicons.component';

// Examples
import { DemoDynamicIconsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoDynamicIconsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglDynamicIconsModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoDynamicIconsComponent,
    DemoDynamicIconsBasic,
  ],
})
export class NglDemoDynamicIconsModule {}
