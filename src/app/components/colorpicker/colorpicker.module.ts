import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NglColorpickerModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoColorpickerComponent } from './colorpicker.component';

// Examples
import { DemoColorpickerBasic } from './examples/basic';
import { DemoColorpickerConfig } from './examples/config';
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
    NglColorpickerModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoColorpickerComponent,
    DemoColorpickerBasic,
    DemoColorpickerConfig,
    DemoColorpickerCustomization,
    DemoColorpickerValidation,
  ],
})
export class NglDemoColorpickerModule {}
