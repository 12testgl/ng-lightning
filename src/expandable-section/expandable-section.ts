import {Component, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy} from '@angular/core';
import {uniqueId} from '../util/util';

@Component({
  selector: 'ngl-expandable-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expandable-section.pug',
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

  // force expansion if collapsable is false
  @HostBinding('class.slds-is-open')
  get expanded() {
    return (this.open && this.collapsable) || !this.collapsable;
  }

  get uid() {
    return this.collapsable ? this._uid : undefined;
  }

  toggle(event: Event) {
    event.preventDefault();
    this.openChange.emit(!this.open);
  }
}
