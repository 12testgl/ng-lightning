import { InjectionToken } from '@angular/core';

/** Injection token that can be used to specify default options. */
export const NGL_RATING_CONFIG = new InjectionToken<NglRatingConfig>('ngl-rating-config');

/**
 * Configuration service for the NglRating component.
 */
export class NglRatingConfig<D = any> {

  /**
   * The color of the icon when status is "on"
   */
  colorOn = '#FFB75D';

  /**
   * The color of the icon when status is "off"
   */
  colorOff = '54698D';

}
