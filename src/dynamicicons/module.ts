import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglDynamicIcon } from './dynamic-icon';
import { NglDynamicIconEq } from './eq';
import { NglDynamicIconWaffle } from './waffle';

const NGL_DYNAMIC_ICON_DIRECTIVES = [
  NglDynamicIcon,
  NglDynamicIconEq,
  NglDynamicIconWaffle,
];

@NgModule({
  declarations: NGL_DYNAMIC_ICON_DIRECTIVES,
  exports: NGL_DYNAMIC_ICON_DIRECTIVES,
  imports: [ CommonModule ],
})
export class NglDynamicIconsModule {}
