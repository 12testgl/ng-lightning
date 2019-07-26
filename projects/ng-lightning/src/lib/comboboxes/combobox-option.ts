import { Directive, Input } from '@angular/core';
import { NglComboboxOptionItem } from './combobox';

@Directive({
  selector: 'ngl-combobox-option, [nglComboboxOption]',
})
export class NglComboboxOption implements NglComboboxOptionItem {

  @Input() value: any;

  @Input() label: string;

  @Input() disabled = false;

}
