import { InjectionToken } from '@angular/core';

/** Injection token that can be used to specify default options. */
export const NGL_COMBOBOX_CONFIG = new InjectionToken<NglComboboxConfig>('ngl-combobox-config');

export class NglComboboxConfig<D = any> {

  loadingLabel = 'Loading';

  noOptionsFound = 'No matches found.';

  removeSelectedLabel = 'Remove selected option';
}
