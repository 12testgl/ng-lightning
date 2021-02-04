import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';


import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./intro/intro.module').then(m => m.NglDemoIntroModule), pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.NglDemoComponentsModule) },
      { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.NglDemoSupportModule) },
      { path: 'get-started', loadChildren: () => import('./get-started/get-started.module').then(m => m.NglDemoGetStartedModule) },
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
    relativeLinkResolution: 'legacy'
}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
