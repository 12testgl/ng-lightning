import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglRadioGroup } from './radio-group';
import { NglRadioOption } from './radio-option';
import { NglRadioInput } from './input/input';

const DIRECTIVES = [
  NglRadioGroup,
  NglRadioOption,
  NglRadioInput,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  imports: [CommonModule, NglInternalOutletModule],
})
export class NglRadiosModule {}
