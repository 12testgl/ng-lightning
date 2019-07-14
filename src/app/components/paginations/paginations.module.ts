import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NglPaginationsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoPaginationsComponent } from './paginations.component';

// Examples
import { DemoPaginationsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoPaginationsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NglPaginationsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoPaginationsComponent,
    DemoPaginationsBasic,
  ],
})
export class NglDemoPaginationsModule {}
