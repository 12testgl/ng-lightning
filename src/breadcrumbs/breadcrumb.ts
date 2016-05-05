import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngl-breadcrumb',
  templateUrl: './breadcrumb.jade',
  host: {
    '[class.slds-list__item]': 'true',
  },
})
export class NglBreadcrumb {
  @Input() href: string;
}
