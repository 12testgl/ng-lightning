import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglTabs } from './tabs';
import { NglTab } from './tab';
import { NglTabVerbose, NglTabContent, NglTabLabel } from './tab-verbose';
import { NglInternalOutletModule } from '../util/outlet.module';

const NGL_TAB_DIRECTIVES = [
  NglTabs,
  NglTab,
  NglTabVerbose, NglTabContent, NglTabLabel,
];

@NgModule({
  declarations: [NGL_TAB_DIRECTIVES],
  exports: [NGL_TAB_DIRECTIVES],
  imports: [CommonModule, NglInternalOutletModule],
})
export class NglTabsModule {}
