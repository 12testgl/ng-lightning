import {Directive, Input, ElementRef} from 'angular2/core';

@Directive({
 selector: 'ngl-breadcrumb',
})
export class NglBreadcrumb {
  @Input('link-to') link: string;
  content: string;

  constructor(elementRef: ElementRef) {
    this.content = elementRef.nativeElement.textContent;
  }
}
