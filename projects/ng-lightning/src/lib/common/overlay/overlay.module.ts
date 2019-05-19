import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglOverlaynglOverlayScrolledOutsideViewDirective } from './overlay-outside';

const DIRECTIVES = [
  NglOverlaynglOverlayScrolledOutsideViewDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class NglOverlayModule {}
