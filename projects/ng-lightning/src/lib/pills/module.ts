import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglPill} from './pill';
import {NglPillLink} from './pill-link';
import {NglIconsModule} from '../icons/module';
import {NglAvatarModule} from '../avatar/module';

const NGL_PILL_DIRECTIVES = [
  NglPill,
  NglPillLink,
];

@NgModule({
  declarations: NGL_PILL_DIRECTIVES,
  exports: NGL_PILL_DIRECTIVES,
  imports: [CommonModule, NglIconsModule, NglAvatarModule],
})
export class NglPillsModule {}
