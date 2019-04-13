import { Directive, TemplateRef, Input } from '@angular/core';
import { uniqueId } from '../util/util';

@Directive({
  selector: '[nglAccordionSection]',
})
export class NglAccordionSection {
  constructor(public templateRef: TemplateRef<any>) {}

  /**
   * Displayed as the title of the section.
   */
  @Input() label: string | TemplateRef<any>;

  /**
   * Context data available as local variable in `label`, if TemplateRef.
   */
  @Input() labelContext: any;

  /**
   * The unique name to use with the `activeName` of the accordion component.
   */
  @Input() name = uniqueId('accordion-section');

}
