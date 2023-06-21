import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[nglButton]',
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
})
export class NglButton implements OnInit, OnChanges {

  /**
   * Changes the appearance of the button.
   */
  @Input() variant: 'base' | 'neutral' | 'brand' | 'outline-brand' | 'destructive' | 'text-destructive' | 'inverse' | 'success' = 'neutral';

  /**
   * LDS name of the icon.
   * Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
   */
  @Input() iconName: string;

  /**
   * Describes the position of the icon with respect to ng-content.
   */
  @Input() iconPosition: 'left' | 'right' = 'left';

  constructor(private el: ElementRef, private renderer: Renderer2, private hostService: HostService) {
    this.renderer.addClass(this.el.nativeElement, 'slds-button');
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.variant) {
      this.setHostClass();
    }
  }

  hasLeftIcon() {
    return this.iconName && (!this.iconPosition || this.iconPosition === 'left');
  }

  hasRightIcon() {
    return this.iconName && this.iconPosition === 'right';
  }

  private setHostClass() {
    this.hostService.updateClass(this.el, {
      [`slds-button_${this.variant}`]: this.variant && this.variant !== 'base',
    });
  }

}
