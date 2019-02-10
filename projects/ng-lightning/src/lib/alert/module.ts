import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglAlert } from './alert';
import { NglAlertClose } from './alert-close';
import { NglIconsModule } from '../icons/module';

const NGL_ALERT_DIRECTIVES = [
  NglAlert,
  NglAlertClose,
];

@NgModule({
  declarations: [NGL_ALERT_DIRECTIVES],
  exports: [NGL_ALERT_DIRECTIVES],
  imports: [CommonModule, NglIconsModule],
})
export class NglAlertModule {}
