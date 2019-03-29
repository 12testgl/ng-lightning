import { Component, Input, QueryList, ContentChildren, Output, EventEmitter, ElementRef, Renderer2, AfterContentInit } from '@angular/core';
import { isInt } from '../util/util';
import { NglTab } from './tab';

@Component({
  selector: 'ngl-tabset',
  templateUrl: './tabs.html',
})
export class NglTabs implements AfterContentInit {

  @Input() set variant(variant: 'default' | 'scoped') {
    const el = this.element.nativeElement;
    this.renderer.removeClass(el, `slds-tabs_${this.variant}`);
    this._variant = variant;
    this.renderer.addClass(el, `slds-tabs_${this.variant}`);
  }
  get variant() {
    return this._variant || 'default';
  }

  @ContentChildren(NglTab) tabs: QueryList<NglTab>;

  activeTab: NglTab;
  selected: string | number | NglTab;
  @Input('selected') set setSelected(selected: string | number | NglTab) {
    if (selected === this.selected) { return; }

    this.selected = selected;

    if (!this.tabs) { return; } // Wait for content to initialize

    this.activate();
  }

  @Output() selectedChange = new EventEmitter<NglTab>();

  private _variant: 'default' | 'scoped';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, `slds-tabs_${this.variant}`);
  }

  ngAfterContentInit() {
    // Initial selection after all tabs are created
    this.activate();
    if (!this.activeTab) {
      setTimeout(() => this.select(this.tabs.first));
    }
  }

  select(tab: NglTab) {
    this.selectedChange.emit(tab);
  }

  move(evt: Event, moves: number) {
    evt.preventDefault();

    const tabs = this.tabs.toArray();
    const selectedIndex = tabs.indexOf( this.activeTab );
    this.select( tabs[(tabs.length + selectedIndex + moves) % tabs.length] );
  }

  tabClass(tab: NglTab) {
    return {
      [`slds-tabs_${this.variant}__content`]: true,
      [`slds-${tab.active ? 'show' : 'hide'}`]: true,
    };
  }

  trackByTab(index, tab: NglTab) {
    return tab.uid;
  }

  private activate() {
    if (this.activeTab) {
      this.activeTab.active = false;
    }
    this.activeTab = this.findTab();
    if (this.activeTab) {
      this.activeTab.active = true;
    }
  }

  private findTab(value: any = this.selected): NglTab {
    if (value instanceof NglTab) {
      return value;
    }
    if (isInt(value)) {
      return this.tabs.toArray()[+value];
    }
    return this.tabs.toArray().find((t: NglTab) => {
      return t.id && t.id === value;
    });
  }
}
