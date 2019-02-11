import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { toBoolean } from '../util/convert';

@Directive({
  selector: '[nglButtonState]',
  host: {
    'aria-live': 'assertive',
  },
})
export class NglButtonState {

  _selected: boolean;
  @Input('nglButtonState') set selected(_selected) {
    this._selected = toBoolean(_selected);

    this.toggleClass('slds-is-selected', this._selected);
    this.toggleClass('slds-not-selected', !this._selected);
  }
  get selected() {
    return this._selected;
  }
  @Output('nglButtonStateChange') selectedChange = new EventEmitter<boolean>();

  constructor(public element: ElementRef, public renderer: Renderer2) {}

  @HostListener('click')
  onSelectChange() {
    this.selectedChange.emit(!this.selected);
  }

  private toggleClass(className: string, isAdd: boolean) {
    if (isAdd) {
      this.renderer.addClass(this.element.nativeElement, className);
    } else {
      this.renderer.removeClass(this.element.nativeElement, className);
    }
  }
}
