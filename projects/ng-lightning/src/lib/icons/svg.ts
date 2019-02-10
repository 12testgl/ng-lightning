import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { NglConfig, NglConfigurable } from '../config/config';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'svg[nglIconName]',
  templateUrl: './svg.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@NglConfigurable()
export class NglIconSvg {

  @HostBinding('attr.aria-hidden') ariaHidden = 'true';

  @Input('nglIconName') set iconName(iconName: string) {
    const [icon, type] = iconName.split(':').reverse();
    this.iconPath = `${this.config.get('svgPath')}/${type || 'utility'}-sprite/svg/symbols.svg#${icon}`;
  }

  @Input() xPos = '0';

  iconPath: string;

  constructor(private config: NglConfig, private cd: ChangeDetectorRef) {}
}
