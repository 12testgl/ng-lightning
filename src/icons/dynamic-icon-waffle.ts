import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngl-dynamic-icon-waffle',
  templateUrl: './dynamic-icon-waffle.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDynamicIconWaffle {
  @Output() onClick = new EventEmitter<any>();

  clicked(event: any) {
    this.onClick.emit(event);
  }
}
