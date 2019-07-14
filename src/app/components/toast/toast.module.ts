import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglToastModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoToastComponent } from './toast.component';

// Examples
import { DemoToastBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoToastComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglToastModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoToastComponent,
    DemoToastBasic,
  ],
})
export class NglDemoToastModule {}
