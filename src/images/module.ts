import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglAvatar} from './avatar';
import {NglFigure} from './figure';
import {NglFigureCrop} from './figure-crop';

@NgModule({
  declarations: [NglAvatar, NglFigure, NglFigureCrop],
  exports: [NglAvatar, NglFigure, NglFigureCrop],
  imports: [CommonModule],
})
export class NglImagesModule {}
