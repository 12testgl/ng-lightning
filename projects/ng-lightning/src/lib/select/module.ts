import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglSelect } from './select/select';
import { NglSelectInput } from './input/input';

const DIRECTIVES = [
  NglSelect,
  NglSelectInput,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  imports: [CommonModule, NglInternalOutletModule],
})
export class NglSelectModule {}
