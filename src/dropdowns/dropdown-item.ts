import {Directive, Input, HostBinding, HostListener, ElementRef} from 'angular2/core';
import {NglDropdown} from './dropdown';

@Directive({
  selector: '[nglDropdownItem]',
  host: {
    'tabindex': '0',
  },
})
export class NglDropdownItem {
  @Input('nglDropdownItem') value: any;
  @HostBinding('class.slds-is-selected') get _isSelectedClass() {
    return this.isSelected;
  }
  @HostBinding('attr.aria-selected') get _isSelectedAria() {
    return this.isSelected.toString();
  }

  private isSelected = false;
  private dropdown: NglDropdown;

  @HostListener('click') toggleSelected() {
    this._toggleSelected();
  }
  @HostListener('keydown.space', ['$event'])
  @HostListener('keydown.enter', ['$event'])
  onKeydownToggle($event: Event) {
    $event.preventDefault();
    this._toggleSelected();
  }

  constructor(private elementRef: ElementRef) {}

  registerParent(dropdown: NglDropdown) {
    this.dropdown = dropdown;
  }

  handleSelections(items: any[]) {
    items = items || [];
    this.isSelected = !!items.filter((val: any) => val === this.value).length;
  }

  hasFocus() {
    return this.elementRef.nativeElement === document.activeElement;
  }

  focusSelf() {
    this.elementRef.nativeElement.focus();
  }

  private _toggleSelected() {
    if (!this.dropdown) {
      return;
    }
    this.dropdown.selectItem(this.value, !this.isSelected);
  }
}
