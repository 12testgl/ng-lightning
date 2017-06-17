import {Component, Input, Output, ElementRef, Renderer, EventEmitter, HostListener, ViewChild, ContentChild} from '@angular/core';
import {trigger, state, animate, transition, style} from '@angular/animations';
import {AnimationEvent} from '@angular/animations';
import {toBoolean, uniqueId} from '../util/util';
import {NglModalFooter} from './footer';
import {NglModalHeaderTemplate} from './header';

@Component({
  selector: 'ngl-modal',
  templateUrl: './modal.pug',
  host: {
    'tabindex': '0',
  },
  animations: [
    trigger('visibilityChanged', [
      state('0' , style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
      state('1' , style({ transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1  })),
      transition('0 <=> 1', animate('.5s cubic-bezier(0.1, 0.7, 0.1, 1)')),
    ]),
  ],
})
export class NglModal {
  @Input() header: string = '';
  @Input() size: 'large';

  @Input() set directional(directional: string | boolean) {
    this._directional = toBoolean(directional);
  }

  get animationOpen() {
    return this._animationOpen;
  }

  get directional() {
    return this._directional;
  }

  @ViewChild('closeButton') closeButton: ElementRef;

  headingId = uniqueId('modal_header');

  @Input() set open(_open: any) {
    _open = toBoolean(_open);
    if (_open === this.open) return;

    this._open = _open;
    this._animationOpen = _open;
    if (this.open) {
      setTimeout(() => this.focusFirst());
    }
  }
  get open() {
    return this._open;
  }

  @Output() openChange = new EventEmitter();

  @ContentChild(NglModalHeaderTemplate) headerTpl: NglModalHeaderTemplate;

  @ContentChild(NglModalFooter) footer: NglModalFooter;

  private _open: boolean = true;
  private _animationOpen: boolean;
  private _directional = false;

  constructor(private renderer: Renderer) {}

  @HostListener('keydown.esc', ['$event'])
  close(evt?: Event) {
    this._animationOpen = false;
    if (evt) {
      evt.stopPropagation();
    }
  }

  @HostListener('click', ['$event'])
  stopPropagation(evt: Event) {
    evt.stopPropagation();
  }

  emitClose(evt: AnimationEvent) {
    if (evt && evt.toState === '0' || !evt.toState) {
      if (evt.totalTime > 0) {
        setTimeout(() => this.openChange.emit(false), 200);
      } else {
        this.openChange.emit(false);
      }
    }
  }

  focusFirst() {
    this.renderer.invokeElementMethod(this.closeButton.nativeElement, 'focus', []);
  }
};
