import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglSliderModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoSliderComponent } from './slider.component';

// Examples
import { DemoSliderBasic } from './examples/basic';
import { DemoSliderConfiguration } from './examples/configuration';
import { DemoSliderSize } from './examples/size';
import { DemSliderValidation } from './examples/validation';
import { DemoSliderVertical } from './examples/vertical';

const routes: Routes = [
  { path: '', component: DemoSliderComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
    NglSliderModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoSliderComponent,
    DemoSliderBasic,
    DemoSliderConfiguration,
    DemoSliderSize,
    DemSliderValidation,
    DemoSliderVertical,
  ],
})
export class NglDemoSliderModule {}
