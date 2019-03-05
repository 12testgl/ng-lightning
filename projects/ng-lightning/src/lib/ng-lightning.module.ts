import { NgModule, ModuleWithProviders } from '@angular/core';

import { NglAlertModule } from './alert/module';
import { NglAvatarModule } from './avatar/module';
import { NglBadgesModule } from './badges/module';
import { NglBreadcrumbsModule } from './breadcrumbs/module';
import { NglButtonIconsModule } from './buttonicons/module';
import { NglButtonsModule } from './buttons/module';
import { NglCheckboxesModule } from './checkboxes/module';
import { NglDatatablesModule } from './datatables/module';
import { NglDatepickersModule } from './datepickers/module';
import { NglDynamicIconsModule } from './dynamicicons/module';
import { NglFilesModule } from './files/module';
import { NglIconsModule } from './icons/module';
import { NglInputsModule } from './inputs/module';
import { NglLookupsModule } from './lookups/module';
import { NglMenusModule } from './menus/module';
import { NglModalsModule } from './modals/module';
import { NglToastModule } from './toast/module';
import { NglPaginationsModule } from './paginations/module';
import { NglPickModule } from './pick/module';
import { NglPicklistModule } from './picklist/module';
import { NglPillsModule } from './pills/module';
import { NglPopoversModule } from './popovers/module';
import { NglProgressBarModule } from './progressbar/module';
import { NglRadiosModule } from './radio-group/module';
import { NglRatingsModule } from './ratings/module';
import { NglSectionsModule } from './sections/module';
import { NglSelectModule } from './select/module';
import { NglSpinnersModule } from './spinners/module';
import { NglTabsModule } from './tabs/module';
import { NglTextareaModule } from './textarea/module';
import { NglTooltipsModule } from './tooltips/module';
import { INglConfig } from './config/config.interface';
import { NglConfig, NGL_CONFIG } from './config/config';

const MODULES = [
  NglAlertModule,
  NglAvatarModule,
  NglBadgesModule,
  NglBreadcrumbsModule,
  NglButtonIconsModule,
  NglButtonsModule,
  NglCheckboxesModule,
  NglDatatablesModule,
  NglDatepickersModule,
  NglDynamicIconsModule,
  NglFilesModule,
  NglIconsModule,
  NglInputsModule,
  NglLookupsModule,
  NglMenusModule,
  NglModalsModule,
  NglToastModule,
  NglPaginationsModule,
  NglPickModule,
  NglPicklistModule,
  NglPillsModule,
  NglPopoversModule,
  NglProgressBarModule,
  NglRadiosModule,
  NglRatingsModule,
  NglSectionsModule,
  NglSelectModule,
  NglSpinnersModule,
  NglTabsModule,
  NglTextareaModule,
  NglTooltipsModule,
];

@NgModule({
  exports: MODULES,
})
export class NglModule {
  static forRoot(config: INglConfig = {}): ModuleWithProviders {
    return {
      ngModule: NglModule,
      providers: [
        { provide: NGL_CONFIG, useValue: config },
        NglConfig,
      ],
   };
 }
}
