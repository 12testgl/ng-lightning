import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglProgressBar} from './progressbar';

@NgModule({
  declarations: [NglProgressBar],
  exports: [NglProgressBar],
  imports: [CommonModule],
})
export class NglProgressBarModule {}
