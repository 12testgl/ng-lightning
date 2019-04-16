import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';

import { NglButtonIcon } from './button-icon';
import { NglButtonIconStateful } from './button-icon-stateful';

const NGL_BUTTON_ICON_DIRECTIVES = [
  NglButtonIcon,
  NglButtonIconStateful,
];

@NgModule({
  declarations: NGL_BUTTON_ICON_DIRECTIVES,
  exports: NGL_BUTTON_ICON_DIRECTIVES,
  imports: [CommonModule, NglIconsModule],
})
export class NglButtonIconsModule {}
