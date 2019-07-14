import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NglComboboxesModule, NglPillsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoLookupsComponent } from './lookups.component';

// Examples
import { DemoLookupsBasic } from './examples/basic';
import { DemoLookupsHttp } from './examples/http';
import { DemoLookupsMultiple } from './examples/multiple';

const routes: Routes = [
  { path: '', component: DemoLookupsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    NglComboboxesModule,
    NglPillsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoLookupsComponent,
    DemoLookupsBasic,
    DemoLookupsHttp,
    DemoLookupsMultiple,
  ],
})
export class NglDemoLookupsModule {}
