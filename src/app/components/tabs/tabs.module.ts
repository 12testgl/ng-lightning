import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglTabsModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoTabsComponent } from './tabs.component';

// Examples
import { DemoTabsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoTabsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglTabsModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoTabsComponent,
    DemoTabsBasic,
  ],
})
export class NglDemoTabsModule {}
