import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoInputComponent } from './input.component';

// Examples
import { DemoInputBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoInputComponent },
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
    DemoInputComponent,
    DemoInputBasic,
  ],
})
export class NglDemoInputModule {}
