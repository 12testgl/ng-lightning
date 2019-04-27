import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglIconsModule } from '../icons/module';
import { NglFormsModule } from '../forms/module';

import { NglCombobox } from './combobox';
import { NglComboboxOption } from './combobox-option';
import { NglComboboxInput } from './combobox-input';
import { OverlayModule } from '@angular/cdk/overlay';

const DIRECTIVES = [
  NglCombobox,
  NglComboboxOption,
  NglComboboxInput,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglFormsModule, OverlayModule],
})
export class NglComboboxesModule {}
