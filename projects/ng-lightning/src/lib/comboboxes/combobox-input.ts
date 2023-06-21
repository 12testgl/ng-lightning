import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { uniqueId, trapEvent } from '../util/util';
import { DOWN_ARROW, ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { Observable, fromEvent, BehaviorSubject } from 'rxjs';
import { buffer, debounceTime, map } from 'rxjs/operators';
import { NglComboboxService } from './combobox.service';
import { toBoolean } from '../util/convert';

const MAX_INTERVAL_BETWEEN_KEYSTROKES = 300; // ms

@Directive({
  selector: 'input[nglCombobox]',
})
export class NglComboboxInput {

  keyboardBuffer$: Observable<string>;
  ɵRequiredSubject = new BehaviorSubject<boolean>(false);

  @HostBinding('readOnly')
  get isReadonly() {
    return this.service.combobox.variant === 'base' || this.service.combobox.hasLookupSingleSelection;
  }

  @HostBinding('attr.aria-autocomplete')
  get ariaAutocomplete() {
    return this.service.combobox.isLookup ? 'list' : null;
  }

  @HostBinding('class.slds-combobox__input-value')
  get hasReadonlyValue() {
    return this.service.combobox.hasLookupSingleSelection;
  }

  @Input() set required(required: any) {
    this.ɵRequiredSubject.next(toBoolean(required));
  }

  get id() {
    return this.el.nativeElement.id;
  }

  constructor(private service: NglComboboxService,
              private el: ElementRef,
              private renderer: Renderer2) {
    const { nativeElement } = this.el;
    this.renderer.addClass(nativeElement, 'slds-input');
    this.renderer.addClass(nativeElement, 'slds-combobox__input');
    this.renderer.setAttribute(nativeElement, 'autoComplete', 'off');
    this.renderer.setAttribute(nativeElement, 'role', 'textbox');
    this.renderer.setAttribute(nativeElement, 'aria-controls', this.service.combobox.uid);
    if (!nativeElement.id) {
      this.renderer.setAttribute(nativeElement, 'id', uniqueId('combobox-input'));
    }

    const keyboardEvent$ = fromEvent(nativeElement, 'keypress').pipe(map((e: KeyboardEvent) => e.keyCode));
    this.keyboardBuffer$ = keyboardEvent$.pipe(
      buffer(keyboardEvent$.pipe(debounceTime(MAX_INTERVAL_BETWEEN_KEYSTROKES))),
      map((keyCodes: number[]) => keyCodes.map((c) => String.fromCharCode(c)).join(''))
    );
  }

  setAriaActiveDescendant(uid: string | null) {
    if (uid) {
      this.renderer.setAttribute(this.el.nativeElement, 'aria-activedescendant', uid);
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'aria-activedescendant');
    }
  }

  setValue(value: any): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', value !== null ? value : '');
  }

  focus() {
    this.el.nativeElement.focus();
  }

  @HostListener('click')
  onMouseInteraction() {
    if (this.service.combobox.hasLookupSingleSelection || (this.service.combobox.open && this.service.combobox.isLookup)) {
      return;
    }
    this.service.combobox.openChange.emit(!this.service.combobox.open);
  }

  @HostListener('blur')
  onBlur() {
    this.service.combobox.openChange.emit(false);
  }

  @HostListener('keydown', ['$event'])
  onKeyboard(evt: KeyboardEvent) {
    const keyCode = evt.keyCode;

    if (keyCode === ESCAPE) {
      // This is handled by CDK, and detaches overlay
      return;
    }

    if (this.service.combobox.open) {
      switch (keyCode) {
        // User selects currently active option by pressing the `Enter` key
        case ENTER:
          trapEvent(evt);
          this.service.combobox.onOptionSelection();
          return;

        // Propagate to keymanager
        default:
          this.service.combobox.keyManager.onKeydown(evt);
          return;
      }
    } else {

      // Do nothing if readonly Lookup
      if (this.service.combobox.hasLookupSingleSelection) {
        return;
      }

      // Pressing the `Down` or `Enter` key will expand the collapsed menu
      if (keyCode === DOWN_ARROW || keyCode === ENTER) {
        trapEvent(evt);
        this.service.combobox.openChange.emit(true);
        return;
      }

      // Any key on Lookup should expand the collapsed menu
      if (this.service.combobox.isLookup) {
        // Delay emission so actual value of the input has been updated
        setTimeout(() => this.service.combobox.openChange.emit(true), 0);
      }
    }
  }

}
