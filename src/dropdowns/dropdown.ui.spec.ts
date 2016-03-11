import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglPageClickService} from '../common/page-click.service';
import {NglDropdown} from './dropdown';
import {NglDropdownTrigger} from './dropdown-trigger';
import {NglDropdownItem} from './dropdown-item';
import {dispatchKeyEvent} from '../../test/helpers';

function getDropdownElement(fixtureElement: HTMLElement): HTMLElement {
  return <HTMLElement>fixtureElement.childNodes[0];
}

function getDropdownTrigger(fixtureElement: HTMLElement): HTMLElement {
  return <HTMLElement>fixtureElement.childNodes[0].childNodes[0];
}

function getDropdownItem(fixtureElement: HTMLElement): HTMLElement {
  return <HTMLElement>fixtureElement.childNodes[0].childNodes[1];
}

function getOutsideDropdownElement(fixtureElement: HTMLElement): HTMLElement {
  return <HTMLElement>fixtureElement.childNodes[1];
}

describe('`nglDropdown`', () => {

  it('should be closed when initialized as closed', testAsync(({fixture, done}) => {
    fixture.detectChanges();

    const dropdownEl = getDropdownElement(fixture.nativeElement);

    expect(dropdownEl).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdownEl).not.toHaveCssClass('slds-is-open');
    expect(dropdownEl.getAttribute('aria-expanded')).toBe('false');

    done();
  }));

  it('should be opened when input variable `open` is set to true', testAsync(({fixture, done}) => {
    fixture.componentInstance.open = true;
    fixture.detectChanges();

    const dropdownEl = getDropdownElement(fixture.nativeElement);

    expect(dropdownEl).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdownEl).toHaveCssClass('slds-is-open');
    expect(dropdownEl.getAttribute('aria-expanded')).toBe('true');

    done();
  }));

  it('should be closed when anything outside the dropdown is clicked', testAsync(({fixture, done}) => {
    const dropdown = getDropdownElement(fixture.nativeElement);
    const dropdownTrigger = getDropdownTrigger(fixture.nativeElement);
    const outsideDropdownElement = getOutsideDropdownElement(fixture.nativeElement);
    dropdownTrigger.click();
    fixture.detectChanges();

    expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdown).toHaveCssClass('slds-is-open');
    expect(dropdown.getAttribute('aria-expanded')).toBe('true');

    outsideDropdownElement.click();
    fixture.detectChanges();

    setTimeout(() => {
      fixture.detectChanges();

      expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
      expect(dropdown).not.toHaveCssClass('slds-is-open');
      expect(dropdown.getAttribute('aria-expanded')).toBe('false');

      done();
    });
  }));

  it('should be closed when the ESC key is pressed', testAsync(({fixture, done}) => {
    const dropdown = getDropdownElement(fixture.nativeElement);
    const dropdownTrigger = getDropdownTrigger(fixture.nativeElement);
    dropdownTrigger.click();
    fixture.detectChanges();

    expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdown).toHaveCssClass('slds-is-open');
    expect(dropdown.getAttribute('aria-expanded')).toBe('true');

    dispatchKeyEvent(dropdown, 'Escape');
    fixture.detectChanges();

    expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdown).not.toHaveCssClass('slds-is-open');
    expect(dropdown.getAttribute('aria-expanded')).toBe('false');

    done();
  }));

  it('should be focus on the first item onced opened and the down arrow key is pressed', testAsync(({fixture, done}) => {
    const dropdown = getDropdownElement(fixture.nativeElement);
    const dropdownTrigger = getDropdownTrigger(fixture.nativeElement);
    const dropdownItem = getDropdownItem(fixture.nativeElement);
    dropdownTrigger.click();
    fixture.detectChanges();

    expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdown).toHaveCssClass('slds-is-open');
    expect(dropdown.getAttribute('aria-expanded')).toBe('true');

    dispatchKeyEvent(dropdown, 'ArrowDown');
    fixture.detectChanges();

    expect(dropdownItem).toEqual(document.activeElement);

    done();
  }));

  it('should be focus on the first item onced opened and the right arrow key is pressed', testAsync(({fixture, done}) => {
    const dropdown = getDropdownElement(fixture.nativeElement);
    const dropdownTrigger = getDropdownTrigger(fixture.nativeElement);
    const dropdownItem = getDropdownItem(fixture.nativeElement);
    dropdownTrigger.click();
    fixture.detectChanges();
    expect(dropdown).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdown).toHaveCssClass('slds-is-open');
    expect(dropdown.getAttribute('aria-expanded')).toBe('true');

    dispatchKeyEvent(dropdown, 'ArrowRight');
    fixture.detectChanges();

    expect(dropdownItem).toEqual(document.activeElement);

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
  directives: [NglDropdown, NglDropdownTrigger, NglDropdownItem],
  template: ['<div nglDropdown [(open)]="open">',
    '<button type="button" nglDropdownTrigger></button>',
    '<div [nglDropdownItem]="\'item1\'"></div>',
    '</div>',
    '<div></div>',
  ].join(''),
  providers: [NglPageClickService],
})
export class TestComponent {
  open: boolean = false;
}
