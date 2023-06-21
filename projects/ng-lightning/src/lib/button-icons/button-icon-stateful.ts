import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, OnInit, OnChanges,
         Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { HostService } from '../common/host/host.service';
import { InputBoolean } from '../util/convert';

const DEFAULT_VARIANT = 'border';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[nglButtonIconStateful]',
  templateUrl: './button-icon-stateful.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
})
export class NglButtonIconStateful implements OnInit, OnChanges {

  /**
   * Specifies whether button is in selected state or not.
   */
  @HostBinding('class.slds-is-selected')
  @HostBinding('attr.aria-pressed')
  @Input() @InputBoolean() selected = false;

  @Output() selectedChange = new EventEmitter<boolean>();

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
   * The variant changes the appearance of the button.
   */
  @Input() variant: 'border' | 'border-filled' | 'border-inverse' = DEFAULT_VARIANT;

  /**
   *  The size of the button.
   */
  @Input() size: 'xx-small' | 'x-small' | 'small' | null = null;

  get altText() {
    return this.alternativeText || this.title;
  }

  constructor(private el: ElementRef, private hostService: HostService, renderer: Renderer2) {
    renderer.addClass(this.el.nativeElement, 'slds-button');
    renderer.addClass(this.el.nativeElement, 'slds-button_icon');
  }

  @HostListener('click')
  onclick() {
    this.selectedChange.emit(!this.selected);
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  private setHostClass() {
    this.hostService.updateClass(this.el, {
      [`slds-button_icon-${this.variant || DEFAULT_VARIANT}`]: true,
      [`slds-button_icon-${this.size}`]: !!this.size,
    });
  }
}
