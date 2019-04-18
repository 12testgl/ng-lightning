import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglClickOutsideModule } from '../common/clickoutside.module';

import { NglDatepicker } from './datepicker';
import { NglDatepickerInput } from './input/datepicker-input';

import { NglDatepickerWeekdays } from './weekdays';
import { NglDay } from './day';
import { NglDatepickerYear } from './year';

import { NglDateAdapter } from './adapters/date-fns-adapter';

const EXPORTS = [
  NglDatepicker, NglDatepickerInput
];

@NgModule({
  declarations: [...EXPORTS, NglDay, NglDatepickerWeekdays, NglDatepickerYear],
  exports: EXPORTS,
  imports: [CommonModule, FormsModule, NglIconsModule, NglInternalOutletModule, OverlayModule, NglClickOutsideModule],
  providers: [NglDateAdapter],
})
export class NglDatepickersModule {}
