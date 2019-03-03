import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglIconsModule } from '../icons/module';

import { NglCombobox } from './combobox';
import { NglComboboxOption } from './combobox-option';
import { NglComboboxInput } from './combobox-input';

const DIRECTIVES = [
  NglCombobox,
  NglComboboxOption,
  NglComboboxInput,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  imports: [CommonModule, NglInternalOutletModule, NglIconsModule],
})
export class NglComboboxesModule {}
