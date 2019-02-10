import { Directive, Input } from '@angular/core';
import { NglFormElement } from './element';

@Directive({
  selector: 'input[nglFormControl][required], textarea[nglFormControl][required], select[nglFormControl][required]',
})
export class NglFormElementRequired {

  constructor(private nglFormElement: NglFormElement) {}

  @Input() set required(required: string | boolean) {
    this.nglFormElement.setRequired(required);
  }
}
