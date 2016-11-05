import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
const prism = require('prismjs');

@Component({
  selector: 'page-component',
  templateUrl: './page.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  selectedTab = 0;

  @Input() component: any;

  @Output() onTry = new EventEmitter();

  html() {
    return prism.highlight(this.component.html, prism.languages.markup);
  }

  ts() {
    return prism.highlight(this.component.ts, prism.languages.javascript);
  }
}
