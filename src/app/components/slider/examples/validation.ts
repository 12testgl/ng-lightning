import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-slider-validation',
  templateUrl: './validation.html',
})
export class DemSliderValidation {

  ctrl = new UntypedFormControl(null, (control: UntypedFormControl) => {
    const value: number = control.value;

    if (value < 40) {
      return { tooSmall: true };
    } else if (value > 60) {
      return { tooBig: true };
    }

    return null;
  });

}
