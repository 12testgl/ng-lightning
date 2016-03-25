import {Component, ContentChildren, Query, QueryList, Input} from 'angular2/core';
import {NglBreadcrumb} from './breadcrumb';

@Component({
 selector: 'ngl-breadcrumbs',
 directives: [NglBreadcrumb],
 templateUrl: './breadcrumbs.jade',
})
export class NglBreadcrumbs {
  @Input() orientation: 'vertical' | 'horizontal' = 'horizontal';
  @Input('assistive-text') assistiveText: string = 'You are here:';

  @ContentChildren(NglBreadcrumb) breadcrumbs: QueryList<NglBreadcrumb>;

  constructor(@Query(NglBreadcrumb) breadcrumbs: QueryList<NglBreadcrumb) {
    this.breadcrumbs = breadcrumbs;
  }
}
