import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { NglConfig, NglConfigurable } from '../config/config';
import { normalizeIconName } from './icon';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'svg[nglIconName]',
  templateUrl: './svg.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@NglConfigurable()
export class NglIconSvg {

  @Input('nglIconName') set iconName(iconName: string) {
    const [category, icon] = normalizeIconName(iconName).split(':');
    this.iconPath = `${this.config.get('svgPath')}/${category}-sprite/svg/symbols.svg#${icon}`;
  }

  @Input() xPos = '0';

  iconPath: string;

  constructor(private config: NglConfig, private cd: ChangeDetectorRef, el: ElementRef, renderer: Renderer2) {
    renderer.setAttribute(el.nativeElement, 'aria-hidden', 'true');
  }
}
