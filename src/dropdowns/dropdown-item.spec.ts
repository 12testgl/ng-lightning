import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglDropdown} from './dropdown';
import {NglDropdownTrigger} from './dropdown-trigger';
import {NglDropdownItem} from './dropdown-item';
import {dispatchKeyEvent} from '../../test/helpers';

function getDropdownItem(fixtureElement: HTMLElement, elementOrder: number): HTMLElement {
  return <HTMLElement>fixtureElement.childNodes[0].childNodes[elementOrder];
}

describe('`nglDropdownItem`', () => {

  it('should be selected when the space key is pressed', testAsync(({fixture, done}) => {
    const dropdownItem2 = getDropdownItem(fixture.nativeElement, 2);
    fixture.detectChanges();

    spyOn(fixture.componentInstance, 'onSelect');

    // wait for the dropdown to register itself in the item
    setTimeout(() => {
      dispatchKeyEvent(dropdownItem2, ' ');
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
  template: ['<div nglDropdown (select)="onSelect($event)">',
    '<button type="button" nglDropdownTrigger></button>',
    '<div [nglDropdownItem]="\'item1\'"></div>',
    '<div [nglDropdownItem]="\'item2\'"></div>',
    '</div>',
  ].join(''),
})
export class TestComponent {
  onSelect(itemValue: any) {}
}
