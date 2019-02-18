import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoRadiosComponent } from './radios.component';

// Examples
import { DemoRadiosBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoRadiosComponent },
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
    DemoRadiosComponent,
    DemoRadiosBasic,
  ],
})
export class NglDemoRadiosModule {}
