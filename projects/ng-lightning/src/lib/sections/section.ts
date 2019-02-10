import { Component, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { uniqueId } from '../util/util';

@Component({
  selector: 'ngl-expandable-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section.html',
  host: {
    '[class.slds-section]': 'true',
  },
})
export class NglExpandableSection {

  @Input() title: string;
  @Input() collapsable = true;
  @Input() open = false;

  @Output() openChange = new EventEmitter<boolean>();

  private _uid = uniqueId('expandable-section');

  @HostBinding('class.slds-is-open')
  get expanded() {
    return this.collapsable ? this.open : true;
  }

  get uid() {
    return this.collapsable ? this._uid : undefined;
  }

  toggle(event: Event) {
    event.preventDefault();
    this.openChange.emit(!this.open);
  }
}
