import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglButton } from './button';
import { NglIconsModule } from '../icons/module';
// import { NglButtonState } from './button-state';

const NGL_BUTTON_DIRECTIVES = [
  NglButton,
  // NglButtonState,
];

@NgModule({
  declarations: NGL_BUTTON_DIRECTIVES,
  exports: NGL_BUTTON_DIRECTIVES,
  imports: [CommonModule, NglIconsModule],
})
export class NglButtonsModule {}
