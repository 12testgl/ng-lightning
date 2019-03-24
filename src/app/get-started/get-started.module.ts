import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GetStartedComponent } from './get-started.component';

const routes: Routes = [
  { path: '', component: GetStartedComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    GetStartedComponent,
  ],
})
export class NglDemoGetStartedModule {}
