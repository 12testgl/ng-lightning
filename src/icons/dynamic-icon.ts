import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {NglDynamicIconOptions, NglDynamicIconTypes} from '../util/types';

@Component({
  selector: '[ngl-dynamic-icon]',
  templateUrl: './dynamic-icon.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDynamicIcon {
  @Input('nglDynamicIconType') type: NglDynamicIconTypes;
  @Input('nglDynamicIconOption') options: NglDynamicIconOptions;

  @Output() onClick = new EventEmitter<any>();

  clicked(event: any) {
    this.onClick.emit(event);
  }
}
