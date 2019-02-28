import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[nglButtonIcon]',
  templateUrl: './button-icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
})
export class NglButtonIcon implements OnInit, OnChanges {

  /**
   * LDS name of the icon.
   * Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
   * Only utility icons can be used in this component.
   */
  @Input() iconName: string;

  /**
   * Fallback value for `alternativeText`.
   */
  @Input() title: string;

  /**
   * The alternative text used to describe the icon.
   * This text should describe what happens, not what the icon looks like.
   */
  @Input() alternativeText;

  /**
   * The variant changes the appearance of the button
   */
  @Input() variant: 'bare' | 'container' | 'brand' | 'border' | 'border-filled' | 'inverse' | 'border-inverse' = 'border';

  /**
   *  For non-bare variants, the size applies to the button, otherwise it applies to the icon itself
   */
  @Input() size: string;

  get altText() {
    return this.alternativeText || this.title;
  }

  constructor(private el: ElementRef, private hostService: HostService, renderer: Renderer2) {
    renderer.addClass(this.el.nativeElement, 'slds-button');
    renderer.addClass(this.el.nativeElement, 'slds-button_icon');
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  iconClass() {
    const hasVariant = this.hasVariant();
    return {
      [`slds-button__icon_${this.size}`]: !hasVariant,
    };
  }

  private setHostClass() {
    const hasVariant = this.hasVariant();
    this.hostService.updateClass(this.el, {
      [`slds-button_icon-${this.variant}`]: hasVariant,
      [`slds-button_icon-${this.size}`]: this.size && hasVariant,
    });
  }

  private hasVariant() {
    return this.variant && this.variant !== 'bare';
  }
}
