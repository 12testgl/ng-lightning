import {Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './intro/intro.module#NglDemoIntroModule', pathMatch: 'full' },
  { path: 'components', loadChildren: './components/index#NglDemoComponentsModule' },
  { path: 'support',  loadChildren: './support/support.module#NglDemoSupportModule' },
];
