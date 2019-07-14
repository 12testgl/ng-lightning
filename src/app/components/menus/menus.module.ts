import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglMenusModule, NglIconsModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoMenusComponent } from './menus.component';

// Examples
import { DemoMenusBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoMenusComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglMenusModule,
    NglIconsModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoMenusComponent,
    DemoMenusBasic,
  ],
})
export class NglDemoMenusModule {}
