import { NgModule, ModuleWithProviders } from '@angular/core';

import { NglAlertModule } from './alert/module';
import { NglAvatarModule } from './avatar/module';
import { NglBadgesModule } from './badges/module';
import { NglBreadcrumbsModule } from './breadcrumbs/module';
import { NglButtonIconsModule } from './buttonicons/module';
import { NglButtonsModule } from './buttons/module';
import { NglCheckboxesModule } from './checkboxes/module';
import { NglComboboxesModule } from './comboboxes/module';
import { NglDatatablesModule } from './datatables/module';
import { NglDatepickersModule } from './datepickers/module';
import { NglDynamicIconsModule } from './dynamicicons/module';
import { NglFilesModule } from './files/module';
import { NglIconsModule } from './icons/module';
import { NglInputsModule } from './inputs/module';
import { NglMenusModule } from './menus/module';
import { NglModalsModule } from './modals/module';
import { NglToastModule } from './toast/module';
import { NglPaginationsModule } from './paginations/module';
import { NglPickModule } from './pick/module';
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

const MODULES = [
  NglAlertModule,
  NglAvatarModule,
  NglBadgesModule,
  NglBreadcrumbsModule,
  NglButtonIconsModule,
  NglButtonsModule,
  NglCheckboxesModule,
  NglComboboxesModule,
  NglDatatablesModule,
  NglDatepickersModule,
  NglDynamicIconsModule,
  NglFilesModule,
  NglIconsModule,
  NglInputsModule,
  NglMenusModule,
  NglModalsModule,
  NglToastModule,
  NglPaginationsModule,
  NglPickModule,
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
export class NglModule {}
