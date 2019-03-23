import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';


import { AppComponent } from './app.component';
import { NglModule } from 'ng-lightning';

const routes: Routes = [
  { path: '', loadChildren: './intro/intro.module#NglDemoIntroModule', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'components', loadChildren: './components/components.module#NglDemoComponentsModule' },
      { path: 'support', loadChildren: './support/support.module#NglDemoSupportModule' },
      { path: 'get-started', loadChildren: './get-started/get-started.module#NglDemoGetStartedModule' },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
    NglModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
