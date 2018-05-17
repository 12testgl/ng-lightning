import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglIcon} from './icon';
import {NglIconSvg} from './svg';
import {NglDynamicIcon} from './dynamic-icon';
import {NglDynamicIconWaffle} from './dynamic-icon-waffle';

const NGL_ICON_DIRECTIVES = [
  NglIcon,
  NglIconSvg,
  NglDynamicIcon,
  NglDynamicIconWaffle,
];

@NgModule({
  declarations: NGL_ICON_DIRECTIVES,
  exports: NGL_ICON_DIRECTIVES,
  imports: [CommonModule],
})
export class NglIconsModule {}
