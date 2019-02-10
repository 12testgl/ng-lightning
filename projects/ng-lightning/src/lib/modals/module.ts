import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';

import { NglModal } from './modal';
import { NglModalHeaderTemplate, NglModalTaglineTemplate, NglModalFooterTemplate } from './templates';

const NGL_MODAL_DIRECTIVES = [
  NglModal,
  NglModalFooterTemplate,
  NglModalHeaderTemplate,
  NglModalTaglineTemplate,
];

@NgModule({
  declarations: [NGL_MODAL_DIRECTIVES],
  exports: [NGL_MODAL_DIRECTIVES],
  imports: [CommonModule, NglIconsModule],
})
export class NglModalsModule {}
