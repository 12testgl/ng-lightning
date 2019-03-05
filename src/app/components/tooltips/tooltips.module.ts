import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoTooltipsComponent } from './tooltips.component';

// Examples
import { DemoTooltipsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoTooltipsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoTooltipsComponent,
    DemoTooltipsBasic,
  ],
})
export class NglDemoTooltipsModule {}
