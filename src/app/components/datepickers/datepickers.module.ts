import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoDatepickersComponent } from './datepickers.component';

// Examples
import { DemoDatepickersBasic } from './examples/basic';
import { DemoDatepickersConfig } from './examples/config';
import { DemoDatepickersDisabled } from './examples/disabled';
import { DemoDatepickersI18n } from './examples/i18n';
import { DemoDatepickersInput } from './examples/input';
import { DemoDatepickersFilter } from './examples/filter';
import { DemoDatepickersFormat } from './examples/format';
import { DemoDatepickersValidation } from './examples/validation';

const routes: Routes = [
  { path: '', component: DemoDatepickersComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoDatepickersComponent,
    DemoDatepickersBasic,
    DemoDatepickersConfig,
    DemoDatepickersDisabled,
    DemoDatepickersFilter,
    DemoDatepickersFormat,
    DemoDatepickersI18n,
    DemoDatepickersInput,
    DemoDatepickersValidation,
  ],
})
export class NglDemoDatepickersModule {}
