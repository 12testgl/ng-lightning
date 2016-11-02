import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'page-component',
  templateUrl: './page.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  selectedTab = 0;

  @Input() component: any;

  @Output() onTry = new EventEmitter();
}
