import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoComboboxesComponent } from './comboboxes.component';

// Examples
import { DemoComboboxesBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoComboboxesComponent },
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
    DemoComboboxesComponent,
    DemoComboboxesBasic,
  ],
})
export class NglDemoComboboxesModule {}
