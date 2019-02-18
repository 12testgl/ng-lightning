import { Directive, HostBinding, ElementRef, Input, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean } from '../../util/convert';
import { uniqueId } from '../../util/util';

@Directive({
  selector: 'select[ngl]',
  host: {
    '[class.slds-select]': 'true',
  },
})
export class NglSelectInput {

  ɵRequiredSubject = new BehaviorSubject<boolean>(false);

  @HostBinding('attr.aria-describedby') describedBy: string;

  @Input() set required(required: any) {
    this.ɵRequiredSubject.next(toBoolean(required));
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (!this.el.nativeElement.id) {
      this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('select'));
    }
  }

  get id() {
    return this.el.nativeElement.id;
  }
}
