import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoCheckboxesComponent } from './checkboxes.component';

// Examples
import { DemoCheckboxesBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoCheckboxesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoCheckboxesComponent,
    DemoCheckboxesBasic,
  ],
})
export class NglDemoCheckboxesModule {}
