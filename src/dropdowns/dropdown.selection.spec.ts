import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglDropdown} from './dropdown';
import {NglDropdownTrigger} from './dropdown-trigger';
import {NglDropdownItem} from './dropdown-item';

function getDropdownItem(fixtureElement: HTMLElement, elementOrder: number): HTMLElement {
  return <HTMLElement>fixtureElement.childNodes[0].childNodes[elementOrder];
}

describe('`nglDropdown`', () => {

  it('should select only items specified by the parent', testAsync(({fixture, done}) => {
    const dropdownItem1 = getDropdownItem(fixture.nativeElement, 1);
    const dropdownItem2 = getDropdownItem(fixture.nativeElement, 2);
    fixture.componentInstance.itemValues = [ 'item1' ];
    fixture.detectChanges();

    setTimeout(() => {
      // pass selection down the hierarchy
      fixture.detectChanges();

      expect(dropdownItem1).toHaveCssClass('slds-is-selected');
      expect(dropdownItem1.getAttribute('aria-selected')).toBe('true');
      expect(dropdownItem2).not.toHaveCssClass('slds-is-selected');
      expect(dropdownItem2.getAttribute('aria-selected')).not.toBe('true');

      done();
    });
  }));

  it('should trigger the registered callback in the parent upon selection', testAsync(({fixture, done}) => {
    const dropdownItem2 = getDropdownItem(fixture.nativeElement, 2);
    fixture.detectChanges();

    spyOn(fixture.componentInstance, 'onSelect');

    // wait for the dropdown to register itself in the item
    setTimeout(() => {
      dropdownItem2.click();
      fixture.detectChanges();

      expect(fixture.componentInstance.onSelect).toHaveBeenCalledWith({value: 'item2', isSelected: true});

      done();
    });
  }));

});

// Shortcut function to use instead of `injectAsync` for less boilerplate on each `it`
function testAsync(fn: Function, html: string = null) {
  return injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return new Promise((done: Function) => {
      if (html) {
        tcb = tcb.overrideTemplate(TestComponent, html);
      }
      tcb.createAsync(TestComponent).then(fixture => fn({ fixture, done})).catch(err => console.error(err.stack));
    });
  });
}

@Component({
  directives: [NglDropdown, NglDropdownTrigger, NglDropdownItem],
  template: ['<div [nglDropdown]="itemValues" (select)="onSelect($event)">',
    '<button type="button" nglDropdownTrigger></button>',
    '<div [nglDropdownItem]="\'item1\'"></div>',
    '<div [nglDropdownItem]="\'item2\'"></div>',
    '</div>',
  ].join(''),
})
export class TestComponent {
  itemValues: any[] = [];
  onSelect(itemValue: any) {
    this.itemValues = [ itemValue ];
  }
}
