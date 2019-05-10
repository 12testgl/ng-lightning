import { InjectionToken } from '@angular/core';
import { FormStyle, getLocaleDayNames, getLocaleMonthNames, TranslationWidth, getLocaleFirstDayOfWeek } from '@angular/common';

/** Injection token that can be used to specify default options. */
export const NGL_DATEPICKER_CONFIG = new InjectionToken<NglDatepickerConfig>('ngl-datepicker-config');

export class NglDatepickerConfig<D = any> {

  format: 'big-endian' | 'little-endian' | 'middle-endian' = 'big-endian';

  delimiter = '/';

  dropdownAlign: 'left' | 'right' = 'left';

  monthNames: string[];

  dayNamesShort: string[];

  dayNamesLong: string[];

  firstDayOfWeek: number;

  showToday = true;

  relativeYearFrom = -100;

  relativeYearTo = 10;

  openOnInputClick = true;

  constructor(locale: string) {
    this.monthNames = getLocaleMonthNames(locale, FormStyle.Standalone, TranslationWidth.Wide);
    this.dayNamesShort = getLocaleDayNames(locale, FormStyle.Standalone, TranslationWidth.Abbreviated);
    this.dayNamesLong = getLocaleDayNames(locale, FormStyle.Standalone, TranslationWidth.Wide);
    this.firstDayOfWeek = getLocaleFirstDayOfWeek(locale);
  }
}
