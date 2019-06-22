import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglFileUpload } from './file-upload';

@NgModule({
  declarations: [NglFileUpload],
  exports: [NglFileUpload],
  imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
})
export class NglFileUploadModule {}
