import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglFile} from './file';
import {NglFileCrop} from './file-crop';

@NgModule({
  declarations: [NglFile, NglFileCrop],
  exports: [NglFile, NglFileCrop],
  imports: [CommonModule],
})
export class NglFilesModule {}
