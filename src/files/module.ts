import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglFile} from './file';
import {NglFileCrop} from './file-crop';
import {NglIconsModule} from '../icons/module';
import {NglFileActionsTemplate} from './templates';

const NGL_FILE_DIRECTIVES = [
  NglFile,
  NglFileCrop,
  NglFileActionsTemplate,
];

@NgModule({
  declarations: [NGL_FILE_DIRECTIVES],
  exports: [NGL_FILE_DIRECTIVES],
  imports: [CommonModule, NglIconsModule],
})
export class NglFilesModule {}
