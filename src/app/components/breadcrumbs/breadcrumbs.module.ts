import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglBreadcrumbsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoBreadcrumbsComponent } from './breadcrumbs.component';

// Examples
import { DemoBreadcrumbsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoBreadcrumbsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglBreadcrumbsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoBreadcrumbsComponent,
    DemoBreadcrumbsBasic,
  ],
})
export class NglDemoBreadcrumbsModule {}
