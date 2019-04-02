import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoColorpickerComponent } from './colorpicker.component';

// Examples
import { DemoColorpickerBasic } from './examples/basic';
import { DemoColorpickerCustomization } from './examples/customization';
import { DemoColorpickerValidation } from './examples/validation';

const routes: Routes = [
  { path: '', component: DemoColorpickerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoColorpickerComponent,
    DemoColorpickerBasic,
    DemoColorpickerCustomization,
    DemoColorpickerValidation,
  ],
})
export class NglDemoColorpickerModule {}
