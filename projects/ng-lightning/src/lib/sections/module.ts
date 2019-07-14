import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglExpandableSection } from './section';
import { NglIconsModule } from '../icons';

@NgModule({
  declarations: [NglExpandableSection],
  exports: [NglExpandableSection],
  imports: [CommonModule, NglIconsModule],
})
export class NglSectionsModule {}
