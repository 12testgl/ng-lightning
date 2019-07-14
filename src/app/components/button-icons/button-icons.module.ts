import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglButtonIconsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoButtonIconsComponent } from './button-icons.component';

// Examples
import { DemoButtonIconsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoButtonIconsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglButtonIconsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoButtonIconsComponent,
    DemoButtonIconsBasic,
  ],
})
export class NglDemoButtonIconsModule {}
