import {Component, Input, Attribute, ElementRef, Renderer, ChangeDetectionStrategy} from 'angular2/core';
import {NglConfig, provideNglConfig} from '../config/config';

@Component({
  selector: 'ngl-icon-button',
  templateUrl: './icon.jade',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNglConfig()],
})
export class NglIconButton {
  @Input() icon: string;
  @Input() align: 'left' | 'right';
  @Input() size: 'x-small' | 'small' | 'large';
  @Input() alt: string;

  constructor(@Attribute('state') public state: 'not-selected' | 'selected' | 'selected-focus',
              public config: NglConfig, element: ElementRef, renderer: Renderer) {

    if (this.state) {
      renderer.setElementClass(element.nativeElement, `slds-text-${this.state}`, true);
    }
  }

  protected svgClasses() {
    let classes: string[] = [];

    if (this.size) {
      classes.push(`slds-button__icon--${this.size}`);
    }

    if (this.align || this.state) {
      classes.push(`slds-button__icon--${this.align || 'left'}`);
    }

    classes.push(this.state ? 'slds-button__icon--stateful' : 'slds-button__icon');

    return classes;
  }
};
