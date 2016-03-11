import {Directive, HostListener} from 'angular2/core';
import {NglDropdown} from './dropdown';

@Directive({
  selector: '[nglDropdownTrigger]',
  host: {
    'aria-haspopup': 'true',
    'tabindex': '0',
  },
})
export class NglDropdownTrigger {

  constructor(private dropdown: NglDropdown) {}

  @HostListener('click') toggleOpen() {
    this.dropdown.toggle();
  }
  @HostListener('keydown.arrowdown', ['$event'])
  @HostListener('keydown.arrowright', ['$event'])
  onKeyDownOpen($event: Event) {
    $event.preventDefault();
    this.dropdown.toggle(true);
  }
  @HostListener('keydown.space', ['$event'])
  @HostListener('keydown.enter', ['$event'])
  onKeydownToggle($event: Event) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}
