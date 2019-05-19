import { TestBed, ComponentFixture, tick, fakeAsync, flush } from '@angular/core/testing';
import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ESCAPE, ENTER, DOWN_ARROW } from '@angular/cdk/keycodes';
import { createGenericTestComponent, selectElements, dispatchKeyboardEvent, dispatchEvent } from '../../../test/util';
import { NglComboboxesModule } from './module';
import { NglComboboxOptionItem } from './combobox';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

const createLookupTestComponent = (html: string = `
  <ngl-combobox variant="lookup" label="Combobox label" [options]="options" [multiple]="multiple"
                  [open]="open" (openChange)="onOpen($event)"
                  [selection]="selection" (selectionChange)="onSelection($event)">
    <input nglCombobox />
  </ngl-combobox>
`, detectChanges?: boolean) =>
  createTestComponent(html, detectChanges) as ComponentFixture<TestComponent>;

function getMenu(): HTMLInputElement {
  return document.querySelector('.slds-dropdown.slds-dropdown_fluid');
}

function isOpen(fixture: ComponentFixture<TestComponent>) {
  return fixture.nativeElement.querySelector('.slds-combobox').classList.contains('slds-is-open');
}

function getInput(element: HTMLElement): HTMLInputElement {
  return element.querySelector('input');
}

function getInputIcon(element: HTMLElement): HTMLElement {
  return element.querySelector('.slds-input__icon');
}

function getLabel(element: HTMLElement): HTMLLabelElement {
  return element.querySelector('label');
}

function getOptionElements(): HTMLElement[] {
  const menuEl = getMenu();
  return selectElements(menuEl, 'li');
}

function expectActiveOption(inputEl: HTMLInputElement, index: number) {
  const option = getOptionElements()[index];
  const el = option.firstElementChild;
  expect(el).toHaveCssClass('slds-has-focus');
  expect(inputEl.getAttribute('aria-activedescendant')).toEqual(el.getAttribute('id'));
}

function expectOptions(expected: any[]) {
  const options = getOptionElements();
  expect(options.map(e => e.textContent.trim())).toEqual(expected.map(e => e.replace('+', 'Current Selection:')));
}

describe('`NglCombobox`', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglComboboxesModule, OverlayModule] }));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const { nativeElement } = fixture;

    const [inputEl, labelEl] = [getInput(nativeElement), getLabel(nativeElement)];
    expect(inputEl).toHaveCssClass('slds-input');
    expect(inputEl).toHaveCssClass('slds-combobox__input');
    expect(inputEl.getAttribute('id')).toBeTruthy();
    expect(inputEl.readOnly).toBe(true);
    expect(getInputIcon(nativeElement).querySelector('use').getAttribute('xlink:href')).toContain('#down');

    expect(labelEl.textContent).toEqual('Combobox label');
    expect(labelEl.getAttribute('for')).toEqual(inputEl.getAttribute('id'));
    expect(isOpen(fixture)).toBe(false);
  });

  it('should not override input element given ID', () => {
    const fixture = createTestComponent(`
      <ngl-combobox [options]="options">
        <input nglCombobox id="customid" />
      </ngl-combobox>`);
    const { nativeElement } = fixture;

    const [inputEl, labelEl] = [getInput(nativeElement), getLabel(nativeElement)];
    expect(inputEl.getAttribute('id')).toBe('customid');
    expect(labelEl.getAttribute('for')).toEqual(inputEl.getAttribute('id'));
  });

  it('should open/close based on input', () => {
    const fixture = createTestComponent();
    fixture.componentInstance.open = true;
    fixture.detectChanges();
    expect(isOpen(fixture)).toBe(true);

    fixture.componentInstance.open = false;
    fixture.detectChanges();
    expect(isOpen(fixture)).toBe(false);
  });

  it('should render menu correctly', () => {
    const fixture = createTestComponent();
    fixture.componentInstance.open = true;
    fixture.detectChanges();

    const menuEl = getMenu();
    expect(menuEl).toHaveCssClass('slds-dropdown_length-5');
    expectOptions(['Antonis', 'Kostis', 'Evie']);
  });

  it('should open/close on input element interactions', () => {
    const fixture = createTestComponent();
    const { nativeElement, componentInstance } = fixture;
    const inputEl = getInput(nativeElement);

    inputEl.focus();
    expect(componentInstance.onOpen).not.toHaveBeenCalled();

    inputEl.click();
    expect(componentInstance.onOpen).toHaveBeenCalledWith(true);

    componentInstance.onOpen.calls.reset();
    dispatchKeyboardEvent(inputEl, 'keydown', ENTER);
    expect(componentInstance.onOpen).toHaveBeenCalledWith(true);

    componentInstance.onOpen.calls.reset();
    dispatchKeyboardEvent(inputEl, 'keydown', DOWN_ARROW);
    expect(componentInstance.onOpen).toHaveBeenCalledWith(true);

    componentInstance.onOpen.calls.reset();
    fixture.componentInstance.open = true;
    fixture.detectChanges();
    inputEl.click();
    expect(componentInstance.onOpen).toHaveBeenCalledWith(false);

    componentInstance.onOpen.calls.reset();
    dispatchEvent(inputEl, 'blur');
    expect(componentInstance.onOpen).toHaveBeenCalledWith(false);

    componentInstance.onOpen.calls.reset();
    dispatchKeyboardEvent(inputEl, 'keydown', ESCAPE);
    expect(componentInstance.onOpen).toHaveBeenCalledWith(false);
  });

  it('should activate first option when opening and deactivate when closing', () => {
    const fixture = createTestComponent();
    const { nativeElement, componentInstance } = fixture;
    const inputEl = getInput(nativeElement);

    componentInstance.open = true;
    fixture.detectChanges();
    expectActiveOption(inputEl, 0);

    componentInstance.open = false;
    fixture.detectChanges();
    expect(inputEl.getAttribute('aria-activedescendant')).toBeFalsy();
  });

  it('should activate selected option when opening', () => {
    const fixture = createTestComponent();
    const { nativeElement, componentInstance } = fixture;
    componentInstance.selection = 2;
    fixture.detectChanges();

    componentInstance.open = true;
    fixture.detectChanges();

    const inputEl = getInput(nativeElement);
    expectActiveOption(inputEl, 1);
  });

  it('should activate first option if active option is destroyed when options change', () => {
    const fixture = createTestComponent();
    const { nativeElement, componentInstance } = fixture;
    const inputEl = getInput(nativeElement);

    componentInstance.open = true;
    fixture.detectChanges();

    expectActiveOption(inputEl, 0);

    componentInstance.options = [componentInstance.options[1], componentInstance.options[2]];
    fixture.detectChanges();
    expectActiveOption(inputEl, 0);
  });

  it('should not activate other option if active option is not destroyed when options change', () => {
    const fixture = createTestComponent();
    const { nativeElement, componentInstance } = fixture;
    const inputEl = getInput(nativeElement);

    componentInstance.open = true;
    fixture.detectChanges();

    const options = getOptionElements();
    dispatchEvent(options[2], 'mouseenter');
    expectActiveOption(inputEl, 2);

    componentInstance.options = [componentInstance.options[1], componentInstance.options[2]];
    fixture.detectChanges();
    expectActiveOption(inputEl, 1);
  });

  it('should update selected items based on input value', () => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;
    const inputEl = getInput(nativeElement);

    componentInstance.open = true;
    componentInstance.selection = 1;
    fixture.detectChanges();
    expectOptions(['+Antonis', 'Kostis', 'Evie']);
    expect(inputEl.value).toEqual('Antonis');

    componentInstance.selection = 2;
    fixture.detectChanges();
    expectOptions(['Antonis', '+Kostis', 'Evie']);
    expect(inputEl.value).toEqual('Kostis');
  });

  it('should toggle option selection', () => {
    const fixture = createTestComponent();
    const { componentInstance } = fixture;

    componentInstance.open = true;
    componentInstance.selection = 1;
    fixture.detectChanges();

    const options = getOptionElements();

    dispatchEvent(options[2], 'mousedown');
    fixture.detectChanges();
    expect(componentInstance.onSelection).toHaveBeenCalledWith(3);
    expect(componentInstance.onOpen).toHaveBeenCalledWith(false);
    expect(isOpen(fixture)).toBe(true);

    dispatchEvent(options[1], 'mousedown');
    fixture.detectChanges();
    expect(componentInstance.onSelection).toHaveBeenCalledWith(2);
    expect(componentInstance.onOpen).toHaveBeenCalledWith(false);
    expect(isOpen(fixture)).toBe(true);
  });

  it('should not close based on `closeOnSelection`', () => {
    const fixture = createTestComponent(`
      <ngl-combobox [options]="options" [closeOnSelection]="closeOnSelection"
                    [open]="open" (openChange)="onOpen($event)"
                    [selection]="selection" (selectionChange)="onSelection($event)">
        <input nglCombobox />
      </ngl-combobox>`);
    const { componentInstance } = fixture;

    componentInstance.open = true;
    componentInstance.closeOnSelection = false;
    fixture.detectChanges();

    const options = getOptionElements();

    dispatchEvent(options[2], 'mousedown');
    fixture.detectChanges();
    expect(componentInstance.onSelection).toHaveBeenCalledWith(3);
    expect(componentInstance.onOpen).not.toHaveBeenCalled();

    componentInstance.closeOnSelection = true;
    fixture.detectChanges();

    dispatchEvent(options[2], 'mousedown');
    fixture.detectChanges();
    expect(componentInstance.onSelection).toHaveBeenCalledWith(3);
    expect(componentInstance.onOpen).toHaveBeenCalledWith(false);
  });

  it('should update "multiple" selected items based on input value', () => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;
    const inputEl = getInput(nativeElement);

    componentInstance.open = true;
    componentInstance.multiple = true;
    componentInstance.selection = [1, 3];
    fixture.detectChanges();
    expectOptions(['+Antonis', 'Kostis', '+Evie']);
    expect(inputEl.value).toEqual('2 options selected');

    componentInstance.selection = [2];
    fixture.detectChanges();
    expectOptions(['Antonis', '+Kostis', 'Evie']);
    expect(inputEl.value).toEqual('Kostis');

    componentInstance.selection = [2, 3];
    fixture.detectChanges();
    expectOptions(['Antonis', '+Kostis', '+Evie']);
    expect(inputEl.value).toEqual('2 options selected');
  });

  it('should ignore event on disabled options', () => {
    const fixture = createTestComponent(null, false);
    const { componentInstance } = fixture;
    componentInstance.open = true;
    componentInstance.options[0].disabled = true;
    fixture.detectChanges();

    const disabledOption = getOptionElements()[0];
    dispatchEvent(disabledOption, 'mousedown');
    fixture.detectChanges();
    expect(componentInstance.onSelection).not.toHaveBeenCalled();
    expect(componentInstance.onOpen).not.toHaveBeenCalledWith();

    const mediaEl = disabledOption.querySelector('.slds-media') as HTMLElement;
    expect(mediaEl.getAttribute('aria-disabled')).toEqual('true');
    // TODO: remove these styles after dropping support for LDS < 2.9
    expect(mediaEl.querySelector('.slds-truncate')).toHaveCssClass('slds-disabled-text');
    expect(mediaEl.style.cursor).toEqual('default');
  });

  it('should activate and select option using keyboard', () => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    const inputEl = getInput(nativeElement);
    componentInstance.open = true;
    fixture.detectChanges();

    expectActiveOption(inputEl, 0);

    dispatchKeyboardEvent(inputEl, 'keydown', DOWN_ARROW);
    dispatchKeyboardEvent(inputEl, 'keydown', DOWN_ARROW);
    expectActiveOption(inputEl, 2);

    dispatchKeyboardEvent(inputEl, 'keydown', DOWN_ARROW);
    dispatchKeyboardEvent(inputEl, 'keydown', DOWN_ARROW);
    expectActiveOption(inputEl, 1);

    dispatchKeyboardEvent(inputEl, 'keydown', ENTER);
    expect(componentInstance.onSelection).toHaveBeenCalledWith(2);
  });

  it('should activate option when hovering', () => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    const inputEl = getInput(nativeElement);
    componentInstance.open = true;
    fixture.detectChanges();

    const options = getOptionElements();
    expectActiveOption(inputEl, 0);

    dispatchEvent(options[1], 'mouseenter');
    expectActiveOption(inputEl, 1);
  });

  it('should activate option based on matching text', fakeAsync(() => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    const inputEl = getInput(nativeElement);
    componentInstance.open = true;
    componentInstance.options[1].disabled = true;
    fixture.detectChanges();

    dispatchKeyboardEvent(inputEl, 'keypress', 'E'.charCodeAt(0));
    tick(300);
    expectActiveOption(inputEl, 2);

    // Should ignore disabled options
    dispatchKeyboardEvent(inputEl, 'keypress', 'K'.charCodeAt(0));
    tick(300);
    expectActiveOption(inputEl, 2);

    dispatchKeyboardEvent(inputEl, 'keypress', 'a'.charCodeAt(0));
    tick(300);
    expectActiveOption(inputEl, 0);
  }));

  it('should activate loop matching options if repeating search', fakeAsync(() => {
    const fixture = createTestComponent(null, false);
    const { componentInstance, nativeElement } = fixture;
    const inputEl = getInput(nativeElement);
    componentInstance.open = true;
    componentInstance.options = [{ value: 'abc' }, { value: 'ade' }, { value: 'afg' }];
    fixture.detectChanges();

    expectActiveOption(inputEl, 0);

    dispatchKeyboardEvent(inputEl, 'keypress', 'a'.charCodeAt(0));
    tick(300);
    expectActiveOption(inputEl, 1);

    dispatchKeyboardEvent(inputEl, 'keypress', 'a'.charCodeAt(0));
    tick(300);
    expectActiveOption(inputEl, 2);

    dispatchKeyboardEvent(inputEl, 'keypress', 'a'.charCodeAt(0));
    tick(300);
    expectActiveOption(inputEl, 0);
  }));

  it('should not activate disabled option', () => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    const inputEl = getInput(nativeElement);
    componentInstance.open = true;
    componentInstance.options[1].disabled = true;
    fixture.detectChanges();

    const options = getOptionElements();
    expectActiveOption(inputEl, 0);

    dispatchEvent(options[1], 'mouseenter');
    expectActiveOption(inputEl, 0);

    dispatchKeyboardEvent(inputEl, 'keydown', DOWN_ARROW);
    expectActiveOption(inputEl, 2);
  });

  it('should support string options', () => {
    const fixture = createTestComponent(null, false);
    const { componentInstance, nativeElement } = fixture;
    const inputEl = getInput(nativeElement);
    componentInstance.open = true;
    componentInstance.options = (<any>['aa', 'bb', 'cc']);

    componentInstance.selection = 'bb';
    fixture.detectChanges();
    expectOptions(['aa', '+bb', 'cc']);
    expect(inputEl.value).toEqual('bb');
  });

  it('should change visible options based on input value', () => {
    const fixture = createTestComponent(`
    <ngl-combobox [options]="options" [visibleLength]="length" [open]="true">
        <input nglCombobox id="customid" />
      </ngl-combobox>`);
    const { componentInstance } = fixture;

    componentInstance.length = 7;
    fixture.detectChanges();

    const dropdownEl = getMenu();
    expect(dropdownEl).toHaveCssClass('slds-dropdown_length-7');

    componentInstance.length = 10;
    fixture.detectChanges();
    expect(dropdownEl).not.toHaveCssClass('slds-dropdown_length-7');
    expect(dropdownEl).toHaveCssClass('slds-dropdown_length-10');

    componentInstance.length = 0;
    fixture.detectChanges();
    expect(dropdownEl).not.toHaveCssClass('slds-dropdown_length-0');
    expect(dropdownEl).not.toHaveCssClass('slds-dropdown_length-10');
  });

  describe('Lookup', () => {
    it('should render correctly', () => {
      const fixture = createLookupTestComponent();
      const { nativeElement } = fixture;

      const inputEl = getInput(nativeElement);
      expect(inputEl.readOnly).toBe(false);
      expect(inputEl.getAttribute('aria-autocomplete')).toBe('list');
      expect(getInputIcon(nativeElement).querySelector('use').getAttribute('xlink:href')).toContain('#search');
      expect(inputEl).not.toHaveCssClass('slds-combobox__input-value');
    });

    it('should render correctly when an option is selected', () => {
      const fixture = createLookupTestComponent();
      const { componentInstance, nativeElement } = fixture;
      componentInstance.selection = 1;
      fixture.detectChanges();

      const inputEl = getInput(nativeElement);
      expect(inputEl.readOnly).toBe(true);
      expect(inputEl).toHaveCssClass('slds-combobox__input-value');
      expect(getInputIcon(nativeElement).querySelector('use').getAttribute('xlink:href')).toContain('#close');
    });

    it('should remove selection with clear button', () => {
      const fixture = createLookupTestComponent();
      const { componentInstance, nativeElement } = fixture;
      componentInstance.selection = 1;
      fixture.detectChanges();

      const clearButton = getInputIcon(nativeElement);
      clearButton.click();
      expect(componentInstance.onSelection).toHaveBeenCalledWith(null);
    });

    it('should not open menu when it has selection', () => {
      const fixture = createLookupTestComponent();
      const { componentInstance, nativeElement } = fixture;
      componentInstance.selection = 1;
      fixture.detectChanges();

      const inputEl = getInput(nativeElement);
      inputEl.click();
      expect(componentInstance.onOpen).not.toHaveBeenCalled();

      dispatchKeyboardEvent(inputEl, 'keydown', DOWN_ARROW);
      expect(componentInstance.onOpen).not.toHaveBeenCalled();
    });

    it('should empty input value when "multiple" selections', () => {
      const fixture = createLookupTestComponent();
      const { componentInstance, nativeElement } = fixture;
      const inputEl = getInput(nativeElement);

      componentInstance.open = true;
      componentInstance.multiple = true;
      componentInstance.selection = [1, 3];
      fixture.detectChanges();
      expectOptions(['+Antonis', 'Kostis', '+Evie']);
      expect(inputEl.value).toEqual('');

      componentInstance.selection = [2];
      fixture.detectChanges();
      expectOptions(['Antonis', '+Kostis', 'Evie']);
      expect(inputEl.value).toEqual('');
    });

    it('should open when writing in the input', fakeAsync(() => {
      const fixture = createLookupTestComponent();
      const { componentInstance, nativeElement } = fixture;
      const inputEl = getInput(nativeElement);

      dispatchKeyboardEvent(inputEl, 'keydown', 'E'.charCodeAt(0));
      fixture.detectChanges();
      flush();
      expect(componentInstance.onOpen).toHaveBeenCalledWith(true);
    }));

    it('should display appropriate message when no options exist', () => {
      const fixture = createLookupTestComponent();
      const { componentInstance } = fixture;

      componentInstance.options = null;
      componentInstance.open = true;
      fixture.detectChanges();
      expectOptions(['No matches found.']);
    });
  });

  it('should close menu if input is scrolled outside of view', () => {
    const fixture = createTestComponent(`
      <div cdkScrollable style="padding: 100px; margin: 300px;
                                height: 200px; width: 200px; overflow: auto;">
        <ngl-combobox [options]="options" [open]="true" (openChange)="onOpen($event)" style="display: block; margin-bottom: 600px;">
          <input nglCombobox />
        </ngl-combobox>
      </div>`);
    const { componentInstance, nativeElement } = fixture;

    const scrollingContainerEl = nativeElement.firstElementChild;
    expect(componentInstance.onOpen).not.toHaveBeenCalled();

    scrollingContainerEl.scrollTop = 250;
    dispatchEvent(scrollingContainerEl, 'scroll');
    fixture.detectChanges();
    expect(componentInstance.onOpen).toHaveBeenCalledWith(false);
  });
});

@Component({
  template: `
    <ngl-combobox label="Combobox label" [options]="options" [multiple]="multiple"
                  [open]="open" (openChange)="onOpen($event)"
                  [selection]="selection" (selectionChange)="onSelection($event)">
      <input nglCombobox />
    </ngl-combobox>
  `,
})
export class TestComponent {
  open: boolean;
  selection: any;
  multiple = false;
  closeOnSelection: boolean;
  length: number;

  options: NglComboboxOptionItem[] = [
    { value: 1, label: 'Antonis' },
    { value: 2, label: 'Kostis' },
    { value: 3, label: 'Evie' },
  ];

  onSelection: jasmine.Spy = jasmine.createSpy();
  onOpen: jasmine.Spy = jasmine.createSpy();
}
