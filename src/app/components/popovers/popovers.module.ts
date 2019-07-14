import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglPopoversModule, NglButtonsModule, NglIconsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoPopoversComponent } from './popovers.component';

// Examples
import { DemoPopoversBasic } from './examples/basic';
import { DemoPopoversHeader } from './examples/header';
import { DemoPopoversPlacement } from './examples/placement';
import { DemoPopoversSize } from './examples/size';
import { DemoPopoversVariant } from './examples/variant';

const routes: Routes = [
  { path: '', component: DemoPopoversComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglPopoversModule,
    NglButtonsModule,
    NglIconsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoPopoversComponent,
    DemoPopoversBasic,
    DemoPopoversHeader,
    DemoPopoversPlacement,
    DemoPopoversSize,
    DemoPopoversVariant,
  ],
})
export class NglDemoPopoversModule {}
