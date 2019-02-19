import { Component, Input, Output, ElementRef, EventEmitter, HostListener, ViewChild, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { uniqueId } from '../util/util';
import { InputBoolean, toBoolean } from '../util/convert';
import { NglModalHeaderTemplate, NglModalTaglineTemplate, NglModalFooterTemplate } from './templates';

@Component({
  selector: 'ngl-modal',
  templateUrl: './modal.html',
  host: {
    'tabindex': '0',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglModal {
  @Input() header = '';

  @Input() size: string;

  @Input() @InputBoolean() directional = false;

  @ViewChild('closeButton') closeButton: ElementRef;

  headingId = uniqueId('modal-heading');

  contentId = uniqueId('modal-content');

  @Input() set open(_open: any) {
    _open = toBoolean(_open);
    if (_open === this.open) { return; }

    this._open = _open;
    if (this.open) {
      setTimeout(() => this.closeButton.nativeElement.focus());
    }
  }
  get open() {
    return this._open;
  }

  get hasHeader() {
    return this.header || this.headerTpl;
  }

  @Input() closeButtonAssistiveText = 'Close';

  @Output() openChange = new EventEmitter();

  @ContentChild(NglModalHeaderTemplate) headerTpl: NglModalHeaderTemplate;

  @ContentChild(NglModalTaglineTemplate) taglineTpl: NglModalTaglineTemplate;

  @ContentChild(NglModalFooterTemplate) footer: NglModalFooterTemplate;

  @Input() @InputBoolean() dismissOnClickOutside = true;

  private _open = true;

  @HostListener('keydown.esc', ['$event'])
  close(evt?: Event) {
    if (evt) {
      evt.stopPropagation();
    }
    this.openChange.emit(false);
  }

  clickOutside(evt) {
    if (this.dismissOnClickOutside && (
        evt.target.classList.contains('slds-modal') || evt.target.classList.contains('slds-modal__container'))) {
      this.close();
    }
  }
}
