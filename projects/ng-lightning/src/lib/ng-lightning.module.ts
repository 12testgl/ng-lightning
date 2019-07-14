import { NgModule } from '@angular/core';

import { NglAccordionModule } from './accordion';
import { NglAlertModule } from './alert';
import { NglAvatarModule } from './avatar';
import { NglBadgesModule } from './badges';
import { NglBreadcrumbsModule } from './breadcrumbs';
import { NglButtonIconsModule } from './button-icons';
import { NglButtonsModule } from './buttons';
import { NglCarouselModule } from './carousel';
import { NglCheckboxesModule } from './checkboxes';
import { NglColorpickerModule } from './colorpicker';
import { NglComboboxesModule } from './comboboxes';
import { NglDatatablesModule } from './datatables';
import { NglDatepickersModule } from './datepickers';
import { NglDynamicIconsModule } from './dynamicicons';
import { NglFilesModule } from './files';
import { NglFileUploadModule } from './file-upload';
import { NglIconsModule } from './icons';
import { NglInputModule } from './input';
import { NglMenusModule } from './menus';
import { NglModalsModule } from './modals';
import { NglToastModule } from './toast';
import { NglPaginationsModule } from './paginations';
import { NglPickModule } from './pick';
import { NglPillsModule } from './pills';
import { NglPopoversModule } from './popovers';
import { NglProgressBarModule } from './progressbar';
import { NglRadiosModule } from './radio-group';
import { NglRatingsModule } from './ratings';
import { NglSectionsModule } from './sections';
import { NglSelectModule } from './select';
import { NglSliderModule } from './slider';
import { NglSpinnersModule } from './spinners';
import { NglTabsModule } from './tabs';
import { NglTextareaModule } from './textarea';
import { NglTooltipsModule } from './tooltips';

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
  NglFileUploadModule,
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
