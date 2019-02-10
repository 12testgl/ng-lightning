import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglToast } from './toast';
import { NglToastClose } from './toast-close';
import { NglIconsModule } from '../icons/module';

const NGL_TOAST_DIRECTIVES = [
  NglToast,
  NglToastClose,
];

@NgModule({
  declarations: [NGL_TOAST_DIRECTIVES],
  exports: [NGL_TOAST_DIRECTIVES],
  imports: [CommonModule, NglIconsModule],
})
export class NglToastModule {}
