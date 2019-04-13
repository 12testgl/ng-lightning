import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoAccordionComponent } from './accordion.component';

// Examples
import { DemoAccordionBasic } from './examples/basic';
import { DemoAccordionMultiple } from './examples/multiple';
import { DemoAccordionHeader } from './examples/header';

const routes: Routes = [
  { path: '', component: DemoAccordionComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoAccordionComponent,
    DemoAccordionBasic,
    DemoAccordionMultiple,
    DemoAccordionHeader,
  ],
})
export class NglDemoAccordionModule {}
