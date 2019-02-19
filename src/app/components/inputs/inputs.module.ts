import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoInputsComponent } from './inputs.component';

// Examples
import { DemoInputsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoInputsComponent },
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
    DemoInputsComponent,
    DemoInputsBasic,
  ],
})
export class NglDemoInputsModule {}
