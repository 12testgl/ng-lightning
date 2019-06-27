import { Component, Input, ChangeDetectionStrategy, OnInit, OnChanges, ElementRef } from '@angular/core';
import { HostService } from '../common/host/host.service';
import { isRequired } from '../util/isRequired';
import { ngClassCombine } from '../util/util';
import { normalizeIconName } from './util';

@Component({
  selector: 'ngl-icon, [ngl-icon]',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
})
export class NglIcon implements OnInit, OnChanges {

  @isRequired
  @Input() set iconName(iconName: string) {
    this._iconName = normalizeIconName(iconName);
  }
  get iconName() {
    return this._iconName;
  }

  /**
   * The appearance of a `utility` icon.
   */
  @Input() variant: 'default' | 'warning' | 'error' | 'light' | 'inverse' | null = 'default';

  /**
   * The size of the icon.
   */
  @Input() size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';

  /**
   * Text used to describe the icon for accessibility.
   */
  @Input() alternativeText: string;

  /**
   * CSS classes that are applied to the SVG.
   */
  @Input() svgClass: string | string[] | Set<string> | { [klass: string]: any };

  private _iconName: string;

  constructor(private el: ElementRef, private hostService: HostService) {}

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  svgClasses() {
    const [category] = this.iconName.split(':');
    const isUtility = category === 'utility';
    const isDefaultOrInverse = this.variant === 'default' || this.variant === 'inverse';

    const classes = {
      [`slds-icon_${this.size}`]: !!this.size && this.size !== 'medium',
      [`slds-icon-text-${isDefaultOrInverse ? 'default' : this.variant}`]: isDefaultOrInverse ?
        (this.variant === 'default' ? isUtility : !isUtility)
        : !!this.variant,
    };

    return ngClassCombine(this.svgClass, classes);
  }

  private setHostClass() {
    const [category, icon] = this.iconName.split(':');
    const kebabCaseName = icon.replace(/_/g, '-');

    this.hostService.updateClass(this.el, {
      [`slds-icon_container`]: category !== 'utility',
      [`slds-icon_container_circle`]: category === 'action',
      [`slds-icon-${category}-${kebabCaseName}`]: category !== 'utility' && category !== 'doctype',
    });
  }

}
