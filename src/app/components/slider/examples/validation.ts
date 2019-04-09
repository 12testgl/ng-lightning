import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-slider-validation',
  templateUrl: './validation.html',
})
export class DemSliderValidation {

  ctrl = new FormControl(null, (control: FormControl) => {
    const value: number = control.value;

    if (value < 40) {
      return { tooSmall: true };
    } else if (value > 60) {
      return { tooBig: true };
    }

    return null;
  });

}
