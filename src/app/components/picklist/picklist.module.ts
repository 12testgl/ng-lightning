import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglComboboxesModule, NglPillsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoPicklistComponent } from './picklist.component';

// Examples
import { DemoPicklistBasic } from './examples/basic';
import { DemoPicklistMultiple } from './examples/multiple';

const routes: Routes = [
  { path: '', component: DemoPicklistComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglComboboxesModule,
    NglPillsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoPicklistComponent,
    DemoPicklistBasic,
    DemoPicklistMultiple,
  ],
})
export class NglDemoPicklistModule {}
