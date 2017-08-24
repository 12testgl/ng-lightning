import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, HostListener, HostBinding} from '@angular/core';
import {replaceClass, toBoolean, uniqueId} from '../util/util';

export type Direction = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'ngl-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './popover.pug',
})
export class NglPopover {

  @Output() afterViewInit = new EventEmitter();

  @Output() onInteraction = new EventEmitter<boolean>();

  @Input() header: string;
  @Input() footer: string;

  @Input() set theme(theme: any) {
    replaceClass(this, `slds-theme_${this._theme}`, theme ? `slds-theme_${theme}` : '');
    this._theme = theme;
  }

  @Input() set nglTooltip(isTooltip: any) {
    this.renderer[toBoolean(isTooltip) ? 'addClass' : 'removeClass'](this.element.nativeElement, 'slds-popover_tooltip');
  }

  set nubbin(direction: Direction) {
    replaceClass(this, `slds-nubbin_${this._nubbin}`, direction ? `slds-nubbin_${direction}` : '');
    this._nubbin = direction;
  }

  uid = uniqueId('popover');

   @HostBinding('attr.aria-labelledby')
   get labelledby() {
    return this.header ? `${this.uid}-heading` : null;
   }

  private _nubbin: Direction;
  private _theme: string;

  constructor(public element: ElementRef, public renderer: Renderer2, public changeDetector: ChangeDetectorRef) {
    this.renderer.addClass(this.element.nativeElement, 'slds-popover');

    // Prevent position changes of "close by" elements
    this.renderer.setStyle(this.element.nativeElement, 'position', 'absolute');

    this.renderer.setAttribute(this.element.nativeElement, 'aria-describedby', this.uid);
  }

  ngAfterViewInit() {
    this.afterViewInit.emit();
  }

  @HostListener('mouseenter', ['$event', 'true'])
  @HostListener('mouseleave', ['$event', 'false'])
  interactiveHandler(evt: Event, isEnter: boolean) {
    this.onInteraction.emit(isEnter);
  }

}
