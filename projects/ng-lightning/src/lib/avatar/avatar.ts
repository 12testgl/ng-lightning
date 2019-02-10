import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';
import { replaceClass } from '../util/util';

@Component({
  selector: 'ngl-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar.html',
})
export class NglAvatar implements OnInit {
  @Input() src = '';

  @HostBinding('attr.title')
  @Input() alternativeText = '';

  @Input() set size(value: string) {
    this.updateClass(this._size, value);
    this._size = value;
  }

  @Input() set variant(value: string) {
    this.updateClass(this._variant, value);
    this._variant = value;
  }

  @Input() initials: string;

  @Input() fallbackIconName = 'standard:user';

  @Output() error = new EventEmitter();

  private _variant: string;
  private _size: string;
  private _imgError = false;

  constructor(public element: ElementRef, public renderer: Renderer2) {
    renderer.addClass(element.nativeElement, 'slds-avatar');
  }

  ngOnInit() {
    if (!this._variant) {
      this.renderer.addClass(this.element.nativeElement, 'slds-avatar_rectangle');
    }

    if (!this._size) {
      this.renderer.addClass(this.element.nativeElement, 'slds-avatar_medium');
    }
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

  private updateClass(oldValue: string, newValue: string) {
    replaceClass(this, `slds-avatar_${oldValue}`, newValue ? `slds-avatar_${newValue}` : '');
  }
}
