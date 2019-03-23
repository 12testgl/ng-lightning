import { Component } from '@angular/core';
import { NGL_RATING_CONFIG, NglRatingConfig } from 'ng-lightning';

@Component({
  selector: 'app-demo-ratings-config',
  templateUrl: './config.html',
  providers: [
    { provide: NGL_RATING_CONFIG, useValue: <NglRatingConfig>{ colorOn: 'green', colorOff: 'pink' } },
  ],
})
export class DemoRatingsConfig {
  value = 3;
}
