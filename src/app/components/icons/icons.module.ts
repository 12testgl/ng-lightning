import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglIconsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoIconsComponent } from './icons.component';

// Examples
import { DemoIconsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoIconsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglIconsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoIconsComponent,
    DemoIconsBasic,
  ],
})
export class NglDemoIconsModule {}
