import { Directive, HostListener, HostBinding } from '@angular/core';
import { NglPopoverTrigger } from './trigger';

@Directive({
  selector: '[nglPopover][nglPopoverBehavior]',
})
export class NglPopoverBehavior {

  @HostBinding('attr.tabindex') tabindex = 0;

  constructor(private trigger: NglPopoverTrigger) {}

  @HostListener('mouseenter')
  @HostListener('focus')
  onMouseOver() {
    this.trigger.nglOpen = true;
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  onMouseOut() {
    this.trigger.nglOpen = false;
  }
}
