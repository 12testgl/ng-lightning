import { Component, Input, Output, ElementRef, EventEmitter, HostListener, ViewChild, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { toBoolean, uniqueId } from '../util/util';
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

  @Input() set directional(directional: string | boolean) {
    this._directional = toBoolean(directional);
  }
  get directional() {
    return this._directional;
  }

  @ViewChild('closeButton') closeButton: ElementRef;

  headingId = uniqueId('modal-heading');

  contentId = uniqueId('modal-content');

  @Input() set open(_open: any) {
    _open = toBoolean(_open);
    if (_open === this.open) { return; }

    this._open = _open;
    if (this.open) {
      setTimeout(() => this.focusFirst());
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

  private _open = true;
  private _directional = false;

  @HostListener('keydown.esc', ['$event'])
  close(evt?: Event) {
    if (evt) {
      evt.stopPropagation();
    }
    this.openChange.emit(false);
  }

  focusFirst() {
    this.closeButton.nativeElement.focus();
  }
}
