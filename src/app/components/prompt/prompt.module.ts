import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NglModalsModule, NglButtonsModule, NglRadiosModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoPromptComponent } from './prompt.component';

// Examples
import { DemoPromptBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoPromptComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NglModalsModule,
    NglButtonsModule,
    NglRadiosModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoPromptComponent,
    DemoPromptBasic,
  ],
})
export class NglDemoPromptModule {}
