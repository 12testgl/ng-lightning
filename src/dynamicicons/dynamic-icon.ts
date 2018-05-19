import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {NglDynamicIconOptions, NglDynamicIconTypes} from '../util/types';

@Component({
  selector: 'ngl-dynamic-icon',
  templateUrl: './dynamic-icon.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDynamicIcon {

  @Input() type: NglDynamicIconTypes;

  @Input() options: NglDynamicIconOptions;

  @Input() alternativeText: string;

}
