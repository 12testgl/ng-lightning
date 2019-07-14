import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglAvatarModule, NglButtonsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoAvatarComponent } from './avatar.component';

// Examples
import { DemoAvatarBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoAvatarComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglAvatarModule,
    NglButtonsModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoAvatarComponent,
    DemoAvatarBasic,
  ],
})
export class NglDemoAvatarModule {}
