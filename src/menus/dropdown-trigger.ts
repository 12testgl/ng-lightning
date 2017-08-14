import {Directive, HostListener, ElementRef, OnDestroy} from '@angular/core';
import {NglDropdown} from './dropdown';

@Directive({
  selector: '[nglDropdownTrigger]',
  host: {
    'aria-haspopup': 'true',
  },
})
export class NglDropdownTrigger implements OnDestroy {
  private parentFocusEventSubscription: any;

  constructor(private element: ElementRef, private dropdown: NglDropdown) {
    this.parentFocusEventSubscription = this.dropdown.triggerFocusEventEmitter.subscribe(this.focus.bind(this));
  }

  ngOnDestroy() {
    this.parentFocusEventSubscription.unsubscribe();
  }

  @HostListener('click') toggleOpen() {
    this.dropdown.toggle();
  }

  @HostListener('keydown.arrowdown', ['$event'])
  onKeyDownOpen($event: Event) {
    $event.preventDefault();
    this.dropdown.toggle(true);
  }

  focus() {
    this.element.nativeElement.focus();
  }
}
