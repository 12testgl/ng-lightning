import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglSpinnersModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoSpinnersComponent } from './spinners.component';

// Examples
import { DemoSpinnersBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoSpinnersComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglSpinnersModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoSpinnersComponent,
    DemoSpinnersBasic,
  ],
})
export class NglDemoSpinnersModule {}
