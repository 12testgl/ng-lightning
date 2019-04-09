import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-slider-configuration',
  templateUrl: './configuration.html',
})
export class DemoSliderConfiguration {
  value = 50;

  min = 100;

  max = 400;

  step = 50;
}
