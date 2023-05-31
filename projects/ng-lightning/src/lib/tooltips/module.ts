import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { NglTooltip } from './tooltip';
import { NglTooltipTrigger } from './trigger';
import { NglInternalOutletModule } from '../util/outlet.module';

@NgModule({
    declarations: [NglTooltip, NglTooltipTrigger],
    exports: [NglTooltipTrigger],
    imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule]
})
export class NglTooltipsModule {}
