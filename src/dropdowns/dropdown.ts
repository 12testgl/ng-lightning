import {Directive, Input, Output, EventEmitter, HostBinding, HostListener, ElementRef, Optional, OnInit, AfterContentInit, OnDestroy, ContentChildren, QueryList} from 'angular2/core';
import {NglDropdownTrigger} from './dropdown-trigger';
import {NglDropdownItem} from './dropdown-item';
import {NglPageClickService} from '../common/page-click.service';
import {toBoolean} from '../util/util';

const openEventEmitter: EventEmitter<any> = new EventEmitter<any>(false);

@Directive({
  selector: '[nglDropdown]',
  host: {
    'class': 'slds-dropdown-trigger--click',
    'tabindex': '0',
  },
})

export class NglDropdown implements OnInit, AfterContentInit, OnDestroy {

  @Input('nglDropdown') set values(values: any[]) {
    this._values = values;
    this._updateItems(this._values || []);
  }
  get values() {
    return this._values;
  }
  @Input('open') set isOpen(isOpen: boolean | string) {
    isOpen = toBoolean(isOpen);
    /*
     * setTimeout in case we are opening but not due to an nglDropdownTrigger event (i.e., by an outside trigger)
     * if setTimeout was not used, we would open and then close due to the way the openChange is emitted
     */
     if (isOpen) {
       this.handlePageClickEvents = false;
       setTimeout(() => this.handlePageClickEvents = true);
     }
    //setTimeout(() => {
    this._isOpen = <boolean>isOpen;
    if (isOpen) {
      setTimeout(() => {
        this.focusNextItem();
      });
    }
    //});
  }
  get isOpen() {
    return this._isOpen;
  }
  @Input() handlePageEvents = true;
  @ContentChildren(NglDropdownTrigger) triggers: QueryList<NglDropdownTrigger> = new QueryList<NglDropdownTrigger>();
  @ContentChildren(NglDropdownItem) items: QueryList<NglDropdownItem> = new QueryList<NglDropdownItem>();
  @Output('openChange') isOpenChange: EventEmitter<boolean> = new EventEmitter<any>(false);
  @Output('select') selectionEmitter: EventEmitter<any> = new EventEmitter<any>(false);
  @HostBinding('class.slds-is-open')
  @HostBinding('attr.aria-expanded')
  get __isOpen() {
    return this.isOpen;
  }

  private handlePageClickEvents = true;
  private _isOpen = false;
  private _values: any[] = [];
  private openEventSubscription: any;
  private clickEventSubscription: any;

  @HostListener('keydown.esc', ['$event'])
  @HostListener('keydown.tab')
  onKeydownClose($event: Event) {
    this.toggle(false);
    if ($event) {
      setTimeout(() => {
        if (this.triggers.length) {
          this.triggers.first.focusSelf();
        }
      });
    }
  }
  @HostListener('keydown.arrowdown', ['$event'])
  @HostListener('keydown.arrowright', ['$event'])
  onKeydownFocusNext($event: Event) {
    $event.preventDefault();
    this.focusNextItem();
  }
  @HostListener('keydown.arrowup', ['$event'])
  @HostListener('keydown.arrowleft', ['$event'])
  onKeydownFocusPrevious($event: Event) {
    $event.preventDefault();
    this.focusPreviousItem();
  }

  constructor(private elementRef: ElementRef, @Optional() private pageClickService: NglPageClickService) {}

  ngOnInit() {
    this.openEventSubscription = openEventEmitter.subscribe(this.handleDropdownOpenEvent.bind(this));
    if (this.pageClickService) {
      this.clickEventSubscription = this.pageClickService.subscribe(this.handlePageClickEvent.bind(this), () => <boolean>this.isOpen);
    }
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this._registerToTriggers();
      this._updateItems(this.values || []);
    });
  }

  ngOnDestroy() {
    this.openEventSubscription.unsubscribe();
    this.clickEventSubscription.unsubscribe();
  }

  toggle(toggle?: boolean) {
    toggle = toggle === undefined ? !this.isOpen : toggle;
    if (toggle === this.isOpen) {
      return;
    }
    this.isOpenChange.emit(toggle);
    if (toggle) {
      openEventEmitter.emit(this);
      this.focusNextItem();
    }
  }

  selectItem(value: any, isSelected: boolean) {
    this.selectionEmitter.emit({value, isSelected});
  }

  private _registerToTriggers() {
    this.triggers.forEach(trigger => trigger.registerParent(this));
  }

  private _updateItems(values: any[]) {
    this.items.forEach(item => {
      item.registerParent(this);
      item.handleSelections(values);
    });
  }

  private focusNextItem() {
    if (!this.items.length) {
      return;
    }
    let activeElementIndex = -1;
    let idx = 0;
    this.items.forEach(item => {
      if (item.hasFocus()) {
        activeElementIndex = idx;
      }
      idx++;
    });
    activeElementIndex++;
    if (activeElementIndex === this.items.length) {
      activeElementIndex = this.items.length - 1;
    }
    this.items.toArray()[activeElementIndex].focusSelf();
  }

  private focusPreviousItem() {
    if (!this.items.length) {
      return;
    }
    let activeElementIndex = this.items.length;
    let idx = 0;
    this.items.forEach(item => {
      if (item.hasFocus()) {
        activeElementIndex = idx;
      }
      idx++;
    });
    activeElementIndex--;
    if (activeElementIndex < 0) {
      activeElementIndex = 0;
    }
    this.items.toArray()[activeElementIndex].focusSelf();
  }

  private getAncestorPathFromEvent($event: any): HTMLElement[] {
    if ($event.path) {
      return $event.path;
    }
    if (!$event.target) {
      return [];
    }
    let ancenstorPath: HTMLElement[] = [ $event.target ];
    let currentElement = $event.target.parentNode;
    while (currentElement) {
      ancenstorPath.unshift(currentElement);
      currentElement = currentElement.parentNode;
    }
    return ancenstorPath;
  }

  private handlePageClickEvent($event: any) {
    if (!this.handlePageEvents || !this.handlePageClickEvents) {
      return;
    }
    const ancestorPath = this.getAncestorPathFromEvent($event);
    if (!ancestorPath.filter((elm: HTMLElement) => elm === this.elementRef.nativeElement).length) {
      this.toggle(false);
    }
  }

  private handleDropdownOpenEvent(dropdown: NglDropdown) {
    if (dropdown !== this) {
      this.toggle(false);
    }
  }

}
