import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {NglConfig, NglConfigurable} from '../config/config';

@Component({
  selector: 'svg[nglIconName]',
  templateUrl: './svg.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.aria-hidden]': 'true',
  },
})
@NglConfigurable()
export class NglIconSvg {

  @Input('nglIconName') set iconName(iconName: string) {
    const [icon, type] = iconName.split(':').reverse();
    this.iconPath = `${this.config.get('svgPath')}/${type || 'utility'}-sprite/svg/symbols.svg#${icon}`;
  }

  @Input() xPos: string = '0';

  iconPath: string;

  constructor(private config: NglConfig, private cd: ChangeDetectorRef) {}
}
