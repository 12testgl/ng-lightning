import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { changeClass } from '../util/util';

@Component({
  selector: 'ngl-progress-bar',
  templateUrl: './progressbar.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglProgressBar implements OnChanges {

  /**
   * The percentage value of the progress bar.
   */
  @Input() set value(value: number) {
    this._value = Math.max(0, Math.min(value, 100)); // Trap on [0, 100]
    this.renderer.setAttribute(this.element.nativeElement, 'aria-valuenow', `${this.value}`);
  }
  get value() {
    return this._value;
  }

  /**
   * The size of the progress bar.
   */
  @Input() size: 'x-small' | 'small' | 'medium' | 'large';

  /**
   * The variant of the progress bar.
   */
  @Input() variant: 'circular';

  private _value: number;

  constructor(public element: ElementRef, public renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'slds-progress-bar');
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'progressbar');
    this.renderer.setAttribute(this.element.nativeElement, 'aria-valuemin', '0');
    this.renderer.setAttribute(this.element.nativeElement, 'aria-valuemax', '100');
  }

  ngOnChanges(changes: SimpleChanges) {
    const { size: changedSize, variant: changedVariant } = changes;
    changeClass(`slds-progress-bar_`, changedSize, this.element, this.renderer);
    changeClass(`slds-progress-bar_`, changedVariant, this.element, this.renderer);
  }
};
