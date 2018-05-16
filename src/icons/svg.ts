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
    const parts = iconName.split(':').reverse();
    if (parts.length === 2) {
      this._category = parts[1];
    } else {
      this._category = 'utility';
    }
    this._icon = parts[0];
  }

  @Input() xPos: string = '0';

  private _icon: string;
  private _category = 'utility';

  constructor(private config: NglConfig, private cd: ChangeDetectorRef) {
  }

  iconPath() {
    return `${this.config.get('svgPath')}/${this._category}-sprite/svg/symbols.svg#${this._icon}`;
  }
}
