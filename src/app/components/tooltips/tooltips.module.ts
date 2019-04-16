import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoTooltipsComponent } from './tooltips.component';

// Examples
import { DemoTooltipsBasic } from './examples/basic';
import { DemoTooltipsConfig } from './examples/config';
import { DemoTooltipsDelay } from './examples/delay';
import { DemoTooltipsInteractive } from './examples/interactive';
import { DemoTooltipsPlacement } from './examples/placement';

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
    DemoTooltipsConfig,
    DemoTooltipsDelay,
    DemoTooltipsInteractive,
    DemoTooltipsPlacement,
  ],
})
export class NglDemoTooltipsModule {}
