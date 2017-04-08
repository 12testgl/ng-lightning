import {Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngl-pill',
  templateUrl: './pill.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglPill {
  removable: boolean;
  unlinked: boolean = true;

  @Input() nglPillClass;

  @Output() nglPillRemove = new EventEmitter();

  constructor(public detector: ChangeDetectorRef) {}

  remove() {
    this.nglPillRemove.emit(null);
  }
}
