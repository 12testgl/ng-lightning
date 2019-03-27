import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglCarousel } from './carousel';
import { NglCarouselImage } from './carousel-image';
import { NglCarouselIndicator } from './carousel-indicator';

const DIRECTIVES = [
  NglCarousel,
  NglCarouselImage,
];

@NgModule({
  declarations: [...DIRECTIVES, NglCarouselIndicator],
  exports: DIRECTIVES,
  imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
})
export class NglCarouselModule {}
