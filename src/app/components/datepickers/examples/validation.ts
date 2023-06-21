import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-datepickers-validation',
  templateUrl: './validation.html',
})
export class DemoDatepickersValidation {

  ctrl = new UntypedFormControl('', [Validators.required, (control: UntypedFormControl) => {
    if (!(control.value instanceof Date)) {
      return null;
    }

    const date: Date = control.value;
    const [month, day] = [date.getMonth() + 1,  date.getDate()];

    return (month !== 1 || day !== 10) ? { noMatch: true }  : null;
  }]);

}
