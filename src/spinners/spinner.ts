import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { changeClass } from '../util/util';

@Component({
  selector: 'ngl-spinner',
  templateUrl: './spinner.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglSpinner implements OnChanges {

  /**
   * The size of the spinner.
   */
  @Input() size: 'xx-small' | 'x-small' |  'small' | 'medium' | 'large';

  /**
   * The variant changes the appearance of the spinner.
   */
  @Input() variant: 'brand' |  'inverse';

  /**
   * The alternative text used to describe the reason for the wait and need for a spinner.
   */
  @Input() alternativeText: 'brand' | 'inverse';

  private defaultSize = 'medium';

  constructor(public element: ElementRef, public renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'slds-spinner');
    this.renderer.addClass(this.element.nativeElement, `slds-spinner_${this.defaultSize}`);
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'status');
  }

  ngOnChanges(changes: SimpleChanges) {
    const { size: changedSize, variant: changedVariant } = changes;
    changeClass(`slds-spinner_`, changedSize, this.element, this.renderer, this.defaultSize);
    changeClass(`slds-spinner_`, changedVariant, this.element, this.renderer);
  }
};
