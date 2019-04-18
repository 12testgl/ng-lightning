import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglClickOutsideDirective } from './clickoutside';

const DIRECTIVES = [NglClickOutsideDirective];

@NgModule({
  imports: [CommonModule],
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class NglClickOutsideModule {}
