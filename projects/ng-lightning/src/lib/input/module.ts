import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglFormsModule } from '../forms/module';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglInput } from './input/input';
import { NglInputElement } from './element/element';

const DIRECTIVES = [
  NglInput,
  NglInputElement,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  imports: [CommonModule, NglFormsModule, NglInternalOutletModule],
})
export class NglInputModule {}
