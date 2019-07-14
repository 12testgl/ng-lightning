import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { NglPopover } from './popover';
import { NglPopoverTrigger } from './trigger';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglIconsModule } from '../icons';

const NGL_POPOVER_DIRECTIVES = [
  NglPopover,
  NglPopoverTrigger,
];

@NgModule({
  declarations: [NGL_POPOVER_DIRECTIVES],
  exports: [NGL_POPOVER_DIRECTIVES],
  imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule, NglIconsModule],
  entryComponents: [NglPopover],
})
export class NglPopoversModule {}
