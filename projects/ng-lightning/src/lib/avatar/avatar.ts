import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, Renderer2, HostBinding, OnInit, OnChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';

@Component({
  selector: 'ngl-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar.html',
  providers: [HostService],
})
export class NglAvatar implements OnInit, OnChanges {
  @Input() src = '';

  @HostBinding('attr.title')
  @Input() alternativeText = '';

  /*
   * The size of the avatar.
   */
  @Input() size: string;

  /*
   * The variant changes the shape of the avatar.
   */
  @Input() variant: string;

  @Input() initials: string;

  @Input() fallbackIconName = 'standard:user';

  @Output() error = new EventEmitter();

  private _imgError = false;

  constructor(private element: ElementRef, renderer: Renderer2, private hostService: HostService) {
    renderer.addClass(element.nativeElement, 'slds-avatar');
  }

  fallbackIconClass() {
    const [category, icon] = this.fallbackIconName.split(':');
    return `slds-icon-${category}-${icon}`;
  }

  get shouldShowImage() {
    return this.src && !this._imgError;
  }

  onImgError() {
    this._imgError = true;
    this.error.emit();
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  private setHostClass() {
    this.hostService.updateClass(this.element, {
      [`slds-avatar_${this.size || 'medium'}`]: true,
      [`slds-avatar_${this.variant || 'rectangle'}`]: true,
    });
  }
}
