import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglCarouselModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoCarouselComponent } from './carousel.component';

// Examples
import { DemoCarouselBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoCarouselComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglCarouselModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoCarouselComponent,
    DemoCarouselBasic,
  ],
})
export class NglDemoCarouselModule {}
