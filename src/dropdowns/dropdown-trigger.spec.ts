import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglDropdown} from './dropdown';
import {NglDropdownTrigger} from './dropdown-trigger';
import {dispatchKeyEvent} from '../../test/helpers';

function getDropdownElement(fixtureElement: HTMLElement): HTMLElement {
  return <HTMLElement>fixtureElement.childNodes[0];
}

function getDropdownTrigger(fixtureElement: HTMLElement): HTMLElement {
  return <HTMLElement>fixtureElement.childNodes[0].childNodes[0];
}

describe('`nglDropdownTrigger`', () => {

  it('should open the dropdown when it is clicked', testAsync(({fixture, done}) => {
    const dropdown = getDropdownElement(fixture.nativeElement);
    const dropdownTrigger = getDropdownTrigger(fixture.nativeElement);
    dropdownTrigger.click();
    fixture.detectChanges();

    expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdown).toHaveCssClass('slds-is-open');
    expect(dropdown.getAttribute('aria-expanded')).toBe('true');

    done();
  }));

  it('should toggle the dropdown on and off when double clicked', testAsync(({fixture, done}) => {
    const dropdown = getDropdownElement(fixture.nativeElement);
    const dropdownTrigger = getDropdownTrigger(fixture.nativeElement);
    dropdownTrigger.click();
    fixture.detectChanges();

    expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdown).toHaveCssClass('slds-is-open');
    expect(dropdown.getAttribute('aria-expanded')).toBe('true');

    dropdownTrigger.click();
    fixture.detectChanges();

    expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdown).not.toHaveCssClass('slds-is-open');
    expect(dropdown.getAttribute('aria-expanded')).toBe('false');

    done();
  }));

  it('should open the dropdown when the down arrow key is pressed while it is focused', testAsync(({fixture, done}) => {
    const dropdown = getDropdownElement(fixture.nativeElement);
    const dropdownTrigger = getDropdownTrigger(fixture.nativeElement);
    dispatchKeyEvent(dropdownTrigger, 'ArrowDown');
    fixture.detectChanges();

    expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdown).toHaveCssClass('slds-is-open');
    expect(dropdown.getAttribute('aria-expanded')).toBe('true');

    done();
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
  directives: [NglDropdown, NglDropdownTrigger],
  template: ['<div nglDropdown [(open)]="open">',
    '<button type="button" nglDropdownTrigger></button>',
    '</div>',
  ].join(''),
})
export class TestComponent {
  open: boolean = false;
}
