import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglPickModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoPickComponent } from './pick.component';

// Examples
import { DemoPickBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoPickComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglPickModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoPickComponent,
    DemoPickBasic,
  ],
})
export class NglDemoPickModule {}
