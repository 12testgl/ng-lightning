import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglButton } from './button';
import { NglIconsModule } from '../icons/module';
import { NglButtonStateful } from './button-stateful';
import { NglButtonStateOn, NglButtonStateOff, NglButtonStateHover } from './button-states';

const NGL_BUTTON_DIRECTIVES = [
  NglButton,
  NglButtonStateful,
  NglButtonStateOn,
  NglButtonStateOff,
  NglButtonStateHover
];

@NgModule({
  declarations: NGL_BUTTON_DIRECTIVES,
  exports: NGL_BUTTON_DIRECTIVES,
  imports: [CommonModule, NglIconsModule],
})
export class NglButtonsModule {}
