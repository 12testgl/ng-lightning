import { Component, Input, Output, ElementRef, EventEmitter, HostListener, ViewChild, ContentChild,
         ChangeDetectionStrategy, Inject, OnChanges, SimpleChanges, AfterContentInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BlockScrollStrategy, ViewportRuler } from '@angular/cdk/overlay';
import { uniqueId } from '../util/util';
import { InputBoolean } from '../util/convert';
import { NglModalHeaderTemplate, NglModalTaglineTemplate, NglModalFooterTemplate } from './templates';

@Component({
  selector: 'ngl-modal',
  templateUrl: './modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglModal implements OnChanges, AfterContentInit, OnDestroy {
  @Input() header = '';

  @Input() size: string;

  @Input() @InputBoolean() directional = false;

  @ViewChild('closeButton') closeButton: ElementRef;

  headingId = uniqueId('modal-heading');

  contentId = uniqueId('modal-content');

  @Input() @InputBoolean() open = true;

  get hasHeader() {
    return this.header || this.headerTpl;
  }

  @Input() closeButtonAssistiveText = 'Close';

  @Output() openChange = new EventEmitter();

  @ContentChild(NglModalHeaderTemplate) headerTpl: NglModalHeaderTemplate;

  @ContentChild(NglModalTaglineTemplate) taglineTpl: NglModalTaglineTemplate;

  @ContentChild(NglModalFooterTemplate) footer: NglModalFooterTemplate;

  @Input() @InputBoolean() dismissOnClickOutside = true;

  private scrollStrategy: BlockScrollStrategy;

  constructor(viewportRuler: ViewportRuler, @Inject(DOCUMENT) document: any) {
    this.scrollStrategy = new BlockScrollStrategy(viewportRuler, document);
  }

  @HostListener('keydown.esc', ['$event'])
  close(evt?: Event) {
    if (evt) {
      evt.stopPropagation();
    }
    this.openChange.emit(false);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('open' in changes) {
      this.handleOpen();
    }
  }

  ngAfterContentInit() {
    this.handleOpen();
  }

  @HostListener('click', ['$event'])
  clickOutside(evt) {
    if (!this.dismissOnClickOutside) {
      return;
    }

    const { classList } = evt.target;
    if (classList.contains('slds-modal') || classList.contains('slds-modal__container')) {
      this.close();
    }
  }

  ngOnDestroy() {
    this.handleOpen(false);
    this.scrollStrategy = null;
  }

  private handleOpen(open = this.open) {
    if (open) {
      this.scrollStrategy.enable();
      setTimeout(() => this.closeButton.nativeElement.focus());
    } else {
      this.scrollStrategy.disable();
    }
  }
}
