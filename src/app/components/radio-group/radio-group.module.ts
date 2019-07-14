import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglRadiosModule, NglCheckboxesModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoRadioGroupComponent } from './radio-group.component';

// Examples
import { DemoRadioGroupBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoRadioGroupComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NglRadiosModule,
    NglCheckboxesModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoRadioGroupComponent,
    DemoRadioGroupBasic,
  ],
})
export class NglDemoRadioGroupModule {}
