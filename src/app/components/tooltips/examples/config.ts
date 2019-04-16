import { Component } from '@angular/core';
import { NGL_TOOLTIP_CONFIG, NglTooltipConfig } from 'ng-lightning';

@Component({
  selector: 'app-demo-tooltips-config',
  templateUrl: './config.html',
  providers: [
    { provide: NGL_TOOLTIP_CONFIG, useValue: <NglTooltipConfig>{ placement: 'top-left', openAuto: true } },
  ],
})
export class DemoTooltipsConfig {}
