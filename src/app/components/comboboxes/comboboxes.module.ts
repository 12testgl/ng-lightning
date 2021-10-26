import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglComboboxesModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoComboboxesComponent } from './comboboxes.component';

// Examples
import { DemoComboboxesBasic } from './examples/basic';
import { DemoComboboxesDisabled } from './examples/disabled';
import { DemoComboboxesRequired } from './examples/required';

const routes: Routes = [
  { path: '', component: DemoComboboxesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NglComboboxesModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoComboboxesComponent,
    DemoComboboxesBasic,
    DemoComboboxesDisabled,
    DemoComboboxesRequired,
  ],
})
export class NglDemoComboboxesModule {}
