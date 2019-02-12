import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglCheckboxButton } from './button/checkbox-button';
import { NglCheckbox } from './checkbox/checkbox';
import { NglCheckboxToggle } from './toggle/checkbox-toggle';
import { NglCheckboxInput } from './input/input';

import { NglCheckboxGroup } from './group/checkbox-group';
import { NglCheckboxOption } from './group/checkbox-option';

const DIRECTIVES = [
  NglCheckboxButton,
  NglCheckbox,
  NglCheckboxToggle,
  NglCheckboxInput,
  NglCheckboxGroup,
  NglCheckboxOption,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  imports: [CommonModule, NglInternalOutletModule],
})
export class NglCheckboxesModule {}
