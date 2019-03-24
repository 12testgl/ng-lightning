import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NglModule } from 'ng-lightning';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NglModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
