import {Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2} from '@angular/core';
import {replaceClass} from '../util/util';

@Component({
  selector: 'ngl-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar.pug',
})
export class NglAvatar {
  @Input() src: string = '';
  @Input() alt: string = '';

  @Input('size') set setSize(value: string) {
    this.updateClass(this._size, value);
    this._size = value;
  }

  @Input('type') set setType(value: string) {
    this.updateClass(this._type, value);
    this._type = value;
  }

  private _type: string;
  private _size: string;

  constructor(public element: ElementRef, public renderer: Renderer2) {
    renderer.addClass(element.nativeElement, 'slds-avatar');
  }

  ngOnInit() {
    if (!this._type) {
      this.renderer.addClass(this.element.nativeElement, 'slds-avatar_rectangle');
    }

    if (!this._size) {
      this.renderer.addClass(this.element.nativeElement, 'slds-avatar_medium');
    }
  }

  private updateClass(oldValue: string, newValue: string) {
    replaceClass(this, `slds-avatar_${oldValue}`, newValue ? `slds-avatar_${newValue}` : '');
  }
};
