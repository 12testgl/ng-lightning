import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglIcon} from './icon';
import {NglIconSvg} from './svg';
import {NglIconWaffle} from './waffle';

const NGL_ICON_DIRECTIVES = [
  NglIcon,
  NglIconSvg,
  NglIconWaffle,
];

@NgModule({
  declarations: NGL_ICON_DIRECTIVES,
  exports: NGL_ICON_DIRECTIVES,
  imports: [CommonModule],
})
export class NglIconsModule {}
