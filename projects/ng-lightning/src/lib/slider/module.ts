import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglSlider } from './slider';

@NgModule({
  declarations: [NglSlider],
  exports: [NglSlider],
  imports: [CommonModule, NglInternalOutletModule],
})
export class NglSliderModule {}
