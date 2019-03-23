import { InjectionToken } from '@angular/core';

/** Injection token that can be used to specify default options. */
export const NGL_ICON_CONFIG = new InjectionToken<NglIconConfig>('ngl-icon-config');

/**
 * Configuration service for the icons components.
 */
export class NglIconConfig<D = any> {

  /**
   * The path to LDS assets
   */
  svgPath = 'assets/icons';

}
