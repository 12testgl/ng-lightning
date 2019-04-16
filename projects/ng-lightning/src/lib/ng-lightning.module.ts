import { NgModule } from '@angular/core';

import { NglAccordionModule } from './accordion/module';
import { NglAlertModule } from './alert/module';
import { NglAvatarModule } from './avatar/module';
import { NglBadgesModule } from './badges/module';
import { NglBreadcrumbsModule } from './breadcrumbs/module';
import { NglButtonIconsModule } from './button-icons/module';
import { NglButtonsModule } from './buttons/module';
import { NglCarouselModule } from './carousel/module';
import { NglCheckboxesModule } from './checkboxes/module';
import { NglColorpickerModule } from './colorpicker/module';
import { NglComboboxesModule } from './comboboxes/module';
import { NglDatatablesModule } from './datatables/module';
import { NglDatepickersModule } from './datepickers/module';
import { NglDynamicIconsModule } from './dynamicicons/module';
import { NglFilesModule } from './files/module';
import { NglIconsModule } from './icons/module';
import { NglInputModule } from './input/module';
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
import { NglSliderModule } from './slider/module';
import { NglSpinnersModule } from './spinners/module';
import { NglTabsModule } from './tabs/module';
import { NglTextareaModule } from './textarea/module';
import { NglTooltipsModule } from './tooltips/module';

const MODULES = [
  NglAccordionModule,
  NglAlertModule,
  NglAvatarModule,
  NglBadgesModule,
  NglBreadcrumbsModule,
  NglButtonIconsModule,
  NglButtonsModule,
  NglCarouselModule,
  NglCheckboxesModule,
  NglColorpickerModule,
  NglComboboxesModule,
  NglDatatablesModule,
  NglDatepickersModule,
  NglDynamicIconsModule,
  NglFilesModule,
  NglIconsModule,
  NglInputModule,
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
  NglSliderModule,
  NglSpinnersModule,
  NglTabsModule,
  NglTextareaModule,
  NglTooltipsModule,
];

@NgModule({
  exports: MODULES,
})
export class NglModule {}
