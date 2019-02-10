import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglFile } from './file';
import { NglFileCrop } from './file-crop';

@NgModule({
  declarations: [NglFile, NglFileCrop],
  exports: [NglFile, NglFileCrop],
  imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
})
export class NglFilesModule {}
