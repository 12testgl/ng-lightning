import { Directive, HostBinding, ElementRef, Input, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean } from '../../util/convert';
import { uniqueId } from '../../util/util';

@Directive({
  selector: 'input[ngl]:not([type=checkbox]), input[ngl]:not([type=radio])',
  host: {
    '[class.slds-input]': 'true',
  }
})
export class NglInputElement {

  ɵRequiredSubject = new BehaviorSubject<boolean>(false);

  @HostBinding('attr.aria-describedby') describedBy: string;

  @Input() set required(required: any) {
    this.ɵRequiredSubject.next(toBoolean(required));
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (!this.el.nativeElement.id) {
      this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('input'));
    }
  }

  get id() {
    return this.el.nativeElement.id;
  }
}
