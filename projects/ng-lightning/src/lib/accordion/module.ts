import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglAccordion } from './accordion';
import { NglAccordionSection } from './accordion-section';
import { NglAccordionItem } from './accordion-item';

const DIRECTIVES = [
  NglAccordion,
  NglAccordionSection,
];

@NgModule({
  declarations: [...DIRECTIVES, NglAccordionItem],
  exports: DIRECTIVES,
  imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
})
export class NglAccordionModule {}
