import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglFilesModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoFilesComponent } from './files.component';

// Examples
import { DemoFilesBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoFilesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglFilesModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoFilesComponent,
    DemoFilesBasic,
  ],
})
export class NglDemoFilesModule {}
