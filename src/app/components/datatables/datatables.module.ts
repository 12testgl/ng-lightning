import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglDatatablesModule, NglButtonsModule, NglBadgesModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoDatatablesComponent } from './datatables.component';

// Examples
import { DemoDatatablesBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoDatatablesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglDatatablesModule,
    NglButtonsModule,
    NglBadgesModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoDatatablesComponent,
    DemoDatatablesBasic,
  ],
})
export class NglDemoDatatablesModule {}
