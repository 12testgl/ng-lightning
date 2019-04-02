import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglTabsModule } from '../tabs/module';
import { NglPopoversModule } from '../popovers/module';
import { NglFormsModule } from '../forms/module';
import { NglInternalOutletModule } from '../util/outlet.module';

import { NglColorpicker } from './colorpicker';
import { NglColorpickerSwatch } from './swatch/colorpicker-swatch';
import { NglColorpickerCustom } from './custom/colorpicker-custom';
import { NglColorpickerRange } from './custom/range/colorpicker-range';
import { NglColorpickerInputs } from './custom/inputs/colorpicker-inputs';
import { NglColorpickerSwatches } from './swatches/colorpicker-swatches';
import { NglColorpickerSwatchTrigger } from './swatches/trigger';

const DIRECTIVES = [
  NglColorpicker,
];

@NgModule({
  declarations: [
    ...DIRECTIVES,
    NglColorpickerSwatch,
    NglColorpickerCustom,
    NglColorpickerRange,
    NglColorpickerInputs,
    NglColorpickerSwatches,
    NglColorpickerSwatchTrigger,
  ],
  exports: DIRECTIVES,
  imports: [
    CommonModule,
    NglIconsModule,
    NglTabsModule,
    NglPopoversModule,
    NglFormsModule,
    NglInternalOutletModule,
  ],
})
export class NglColorpickerModule {}
