import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoFileUploadComponent } from './file-upload.component';

// Examples
import { DemoFileUploadBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoFileUploadComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoFileUploadComponent,
    DemoFileUploadBasic,
  ],
})
export class NglDemoFileUploadModule {}
