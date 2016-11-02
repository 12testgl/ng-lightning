import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'prism',
  template: '<pre class="language-bash"><code ngNonBindable [innerHtml]="html" class="language-bash"></code></pre>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrismComponent {
  @Input() html: string;
}
