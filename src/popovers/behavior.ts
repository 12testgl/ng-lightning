import {Directive, HostListener, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NglPopoverTrigger} from './trigger';

@Directive({
  selector: '[nglPopover][nglPopoverBehavior]',
})
export class NglPopoverBehavior implements OnChanges {

  @Input('nglPopoverBehavior')
  public isBehaviorEnabled?: boolean;

  @HostBinding('attr.tabindex') tabindex = 0;

  constructor(private trigger: NglPopoverTrigger) {}

  @HostListener('mouseenter')
  @HostListener('focus')
  onMouseOver() {
    this.trigger.nglOpen = this.isBehaviorEnabled !== false;
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  onMouseOut() {
    this.trigger.nglOpen = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isBehaviorEnabled && this.isBehaviorEnabled === false) {
      this.trigger.nglOpen = false;
    }
  }
}
