import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoTextareaComponent } from './textarea.component';

// Examples
import { DemoTextareaBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoTextareaComponent },
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
    DemoTextareaComponent,
    DemoTextareaBasic,
  ],
})
export class NglDemoTextareaModule {}
