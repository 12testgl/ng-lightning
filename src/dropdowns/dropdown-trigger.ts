import {Directive, HostListener, ElementRef} from 'angular2/core';
import {NglDropdown} from './dropdown';

@Directive({
  selector: '[nglDropdownTrigger]',
  host: {
    'aria-haspopup': 'true',
    'tabindex': '0',
  },
})
export class NglDropdownTrigger {
  private dropdown: NglDropdown;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click') toggleOpen() {
    if (this.dropdown) {
      this.dropdown.toggle();
    }
  }
  @HostListener('keydown.arrowdown', ['$event'])
  @HostListener('keydown.arrowright', ['$event'])
  onKeyDownOpen($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    if (this.dropdown) {
      this.dropdown.toggle(true);
    }
  }
  @HostListener('keydown.space', ['$event'])
  @HostListener('keydown.enter', ['$event'])
  onKeydownToggle($event: Event) {
    $event.preventDefault();
    if (this.dropdown) {
      this.dropdown.toggle();
    }
  }

  registerParent(dropdown: NglDropdown) {
    this.dropdown = dropdown;
  }

  focusSelf() {
    this.elementRef.nativeElement.focus();
  }
}
