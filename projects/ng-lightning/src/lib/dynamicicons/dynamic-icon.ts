import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseDynamicIconComponent } from './base-dynamic-icon';

@Component({
  selector: 'ngl-dynamic-icon',
  templateUrl: './dynamic-icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDynamicIcon extends BaseDynamicIconComponent {

  @Input() type: 'ellie' | 'eq' | 'waffle';

  @Input() option: string;

}
