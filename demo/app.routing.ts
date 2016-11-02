import {Routes} from '@angular/router';

import {IntroComponent} from './intro/intro';
import {DemoComponent} from './components/demo';
import {SupportComponent} from './support/support';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'components', component: DemoComponent},
  { path: 'support', component: SupportComponent},
];
