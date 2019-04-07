import { Component, Input, Output, ElementRef, EventEmitter, HostListener, ContentChild,
         ChangeDetectionStrategy, Inject, OnChanges, SimpleChanges, AfterContentInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { BlockScrollStrategy, ViewportRuler } from '@angular/cdk/overlay';
import { uniqueId } from '../util/util';
import { InputBoolean } from '../util/convert';
import { NglModalHeaderTemplate, NglModalTaglineTemplate, NglModalFooterTemplate } from './templates';
import { hasObservers } from '../util/hasObservers';

@Component({
  selector: 'ngl-modal',
  templateUrl: './modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglModal implements OnChanges, AfterContentInit, OnDestroy {
  @Input() header = '';

  @Input() size: string;

  @Input() @InputBoolean() directional = false;

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

  @Input() prompt: 'success' | 'warning' | 'error' | 'wrench' | 'offline' | 'info';

  @hasObservers('openChange') showClose: boolean;

  /** The class that traps and manages focus within the dialog. */
  private focusTrap: FocusTrap;

  /** Element that was focused before the dialog was opened. Save this to restore upon close. */
  private elementFocusedBeforeDialogWasOpened: HTMLElement | null = null;

  private scrollStrategy: BlockScrollStrategy;

  constructor(private focusTrapFactory: FocusTrapFactory, viewportRuler: ViewportRuler, @Inject(DOCUMENT) private document: any, private element: ElementRef) {
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

  modalClass() {
    return {
      [`slds-modal_${this.size}`]: !!this.size,
      [`slds-fade-in-open`]: this.open,
      [`slds-modal_prompt`]: !!this.prompt,
    };
  }

  modalHeaderClass() {
    return {
      [`slds-modal__header_empty`]: !this.hasHeader,
      [`slds-theme_${this.prompt}`]: !!this.prompt,
    };
  }

  modalFooterClass() {
    return {
      [`slds-modal__footer_directional`]: !!this.directional,
      [`slds-theme_default`]: !!this.prompt,
    };
  }

  private handleOpen(open = this.open) {
    if (open) {
      if (this.document) {
        this.elementFocusedBeforeDialogWasOpened = this.document.activeElement as HTMLElement;
      }

      this.focusTrap = this.focusTrapFactory.create(this.element.nativeElement);
      this.focusTrap.focusInitialElementWhenReady();
      this.scrollStrategy.enable();
    } else {
      if (this.elementFocusedBeforeDialogWasOpened && typeof this.elementFocusedBeforeDialogWasOpened.focus === 'function') {
        this.elementFocusedBeforeDialogWasOpened.focus();
      }
      if (this.focusTrap) {
        this.focusTrap.destroy();
      }
      this.scrollStrategy.disable();
    }
  }
}
