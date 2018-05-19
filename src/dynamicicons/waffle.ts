import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseDynamicIconComponent } from './base-dynamic-icon';

@Component({
  selector: 'ngl-dynamic-icon-waffle',
  templateUrl: './waffle.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDynamicIconWaffle extends BaseDynamicIconComponent {
}
