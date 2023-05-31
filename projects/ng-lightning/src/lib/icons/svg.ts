import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, Inject, Optional } from '@angular/core';
import { normalizeIconName } from './util';
import { NglIconConfig, NGL_ICON_CONFIG } from './config';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'svg[nglIconName]',
  templateUrl: './svg.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglIconSvg {

  path: string;

  @Input('nglIconName') set iconName(iconName: string) {
    const [category, icon] = normalizeIconName(iconName).split(':');
    this.iconPath = `${this.path}/${category}-sprite/svg/symbols.svg#${icon}`;
  }

  @Input() xPos = '0';

  iconPath: string;

  constructor(@Optional() @Inject(NGL_ICON_CONFIG) defaultConfig: NglIconConfig,
              el: ElementRef,
              renderer: Renderer2) {
    renderer.setAttribute(el.nativeElement, 'aria-hidden', 'true');

    const config = { ...new NglIconConfig(), ...defaultConfig };
    this.path = config.svgPath;
  }
}
