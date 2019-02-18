import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoSelectComponent } from './select.component';

// Examples
import { DemoSelectBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoSelectComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoSelectComponent,
    DemoSelectBasic,
  ],
})
export class NglDemoSelectModule {}
