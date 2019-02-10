import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemeOption } from '../util/types';

@Component({
  selector: 'ngl-badge',
  templateUrl: './badge.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglBadge {
  @Input() theme: ThemeOption;
}
