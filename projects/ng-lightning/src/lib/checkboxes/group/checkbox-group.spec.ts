import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent, selectElements } from '../../../../test/util/helpers';
import { NglCheckboxesModule } from '../module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getLabelElement(element: Element): HTMLLegendElement {
  return <HTMLLegendElement>element.querySelector('legend');
}

function getErrorElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('.slds-form-element__help');
}

function getRequiredElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('abbr');
}

function getOptionLabelElements(element: HTMLElement): HTMLElement[] {
  return selectElements(element, 'label');
}

function getInputElements(element: HTMLElement): HTMLElement[] {
  return selectElements(element, 'input');
}

describe('`NglCheckboxGroup`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglCheckboxesModule]}));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const element = fixture.nativeElement.firstElementChild;
    expect(element).toHaveCssClass('slds-form-element');

    const labelEl = getLabelElement(element);
    expect(labelEl).toHaveText('Group Label');

    // No messing with `button` type
    expect(fixture.nativeElement.querySelector('.slds-checkbox_button-group')).toBeFalsy();
  });

  it('should be able to change label', () => {
    const fixture = createTestComponent();
    fixture.componentInstance.label = 'Another label';
    fixture.detectChanges();

    const labelEl = getLabelElement(fixture.nativeElement);
    expect(labelEl).toHaveText('Another label');
  });

  it('should render error message', () => {
    const fixture = createTestComponent(`
      <fieldset ngl-checkbox-group label [error]="error">
        <ngl-checkbox-option label><input ngl type="checkbox"></ngl-checkbox-option>
        <ngl-checkbox-option label><input ngl type="checkbox"></ngl-checkbox-option>
      </fieldset>
    `);
    const element = fixture.nativeElement.firstElementChild;

    expect(element).not.toHaveCssClass('slds-has-error');
    expect(getErrorElement(element)).toBeFalsy();
    fixture.componentInstance.error = 'This is an error!';
    fixture.detectChanges();

    const errorEl = getErrorElement(element);
    expect(element).toHaveCssClass('slds-has-error');
    expect(errorEl).toHaveText('This is an error!');

    const inputEls = getInputElements(fixture.nativeElement);
    inputEls.forEach(e => {
      expect(e.getAttribute('aria-describedby')).toEqual(errorEl.id);
    });
  });

  it('should show required label indication', () => {
    const fixture = createTestComponent(`<fieldset ngl-checkbox-group label [required]="required"></fieldset>`);
    expect(getRequiredElement(fixture.nativeElement)).toBeFalsy();

    fixture.componentInstance.required = true;
    fixture.detectChanges();
    const abbrEl = getRequiredElement(fixture.nativeElement);
    expect(abbrEl).toHaveCssClass('slds-required');

    fixture.componentInstance.required = false;
    fixture.detectChanges();
    expect(getRequiredElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should render options correctly', () => {
    const fixture = createTestComponent();
    const labelEls = getOptionLabelElements(fixture.nativeElement);
    expect(labelEls.map(e => e.textContent.trim())).toEqual(['Label One', 'Label Two']);

    const inputEls = getInputElements(fixture.nativeElement);
    expect(labelEls.map(e => e.getAttribute('for'))).toEqual(inputEls.map(e => e.getAttribute('id')));

    labelEls.forEach(e => expect(e).toHaveCssClass('slds-checkbox__label'));
  });

  it('should render button group', () => {
    const fixture = createTestComponent(`
      <ng-template #lbl>Label One</ng-template>
      <fieldset ngl-checkbox-group label type="button">
        <ngl-checkbox-option [label]="lbl"><input ngl type="checkbox"></ngl-checkbox-option>
        <ngl-checkbox-option [label]="'Label Two'"><input ngl type="checkbox"></ngl-checkbox-option>
      </fieldset>
    `);
    expect(fixture.nativeElement.querySelector('.slds-form-element__control').firstElementChild).toHaveCssClass('slds-checkbox_button-group');

    const labelEls = getOptionLabelElements(fixture.nativeElement);
    expect(labelEls.map(e => e.textContent.trim())).toEqual(['Label One', 'Label Two']);

    labelEls.forEach(e => {
      expect(e).toHaveCssClass('slds-checkbox_button__label');
      expect(e).not.toHaveCssClass('slds-checkbox__label');
    });
  });

});

@Component({
  template: `
  <fieldset ngl-checkbox-group [label]="label">
    <ngl-checkbox-option label="Label One">
      <input ngl type="checkbox">
    </ngl-checkbox-option>
    <ngl-checkbox-option label="Label Two">
      <input ngl type="checkbox">
    </ngl-checkbox-option>
  </fieldset>`,
})
export class TestComponent {
  label = 'Group Label';
  error: string;
  required: boolean;
}
