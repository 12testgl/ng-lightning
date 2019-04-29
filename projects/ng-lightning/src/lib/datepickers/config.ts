import { InjectionToken } from '@angular/core';

/** Injection token that can be used to specify default options. */
export const NGL_DATEPICKER_CONFIG = new InjectionToken<NglDatepickerConfig>('ngl-datepicker-config');

export class NglDatepickerConfig<D = any> {

  format: 'big-endian' | 'little-endian' | 'middle-endian' = 'big-endian';

  delimiter = '/';

  dropdownAlign: 'left' | 'right' = 'left';

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  dayNamesLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  showToday = true;

  relativeYearFrom = -100;

  relativeYearTo = 10;
}
