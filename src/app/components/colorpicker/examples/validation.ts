import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-colorpicker-validation',
  templateUrl: './validation.html',
})
export class DemoColorpickerValidation {

  error = null;

  ctrl = new UntypedFormControl('', (control: UntypedFormControl) => {
    const value: string = control.value;

    if (!value) {
      return null;
    }

    if (value.indexOf('#00') > -1) {
      return { tooDark: true };
    } else if (value.toLowerCase().indexOf('#ff') > -1) {
      return { tooLight: true };
    }

    return null;
  });

}
