import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, Renderer2, ContentChildren, QueryList } from '@angular/core';
import { NglAccordionSection } from './accordion-section';
import { isOptionSelected, addOptionToSelection } from '../util/util';
import { InputBoolean } from '../util/convert';

@Component({
  selector: 'ngl-accordion,[ngl-accordion]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accordion.html',
})
export class NglAccordion {

  /**
   * Defines the expanded section(s).
   */
  @Input() activeName: string | string[];

  @Output() activeNameChange = new EventEmitter<string | string[]>();

  /**
   * Whether we allow multiple sections open at a time.
   */
  @Input() @InputBoolean() multiple = false;

  @ContentChildren(NglAccordionSection) sections: QueryList<NglAccordionSection>;

  constructor(element: ElementRef, renderer: Renderer2) {
    renderer.addClass(element.nativeElement, 'slds-accordion');
  }

  toggle(section: NglAccordionSection) {
    const active = addOptionToSelection(section.name, this.activeName, this.multiple);
    this.activeNameChange.emit(active);
  }

  isActive(section: NglAccordionSection): boolean {
    return isOptionSelected(section.name, this.activeName, this.multiple);
  }

}
