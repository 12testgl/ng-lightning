import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent, selectElements } from '../../../test/util';
import { NglRadiosModule } from './module';

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

describe('`NglRadioGroup`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglRadiosModule]}));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const element = fixture.nativeElement.firstElementChild;
    expect(element).toHaveCssClass('slds-form-element');

    const labelEl = getLabelElement(element);
    expect(labelEl).toHaveText('Group Label');

    // No messing with `button` type
    expect(fixture.nativeElement.querySelector('.slds-radio_button-group')).toBeFalsy();
  });

  it('should apply the same name to all inputs', () => {
    const fixture = createTestComponent();
    const inputEls = getInputElements(fixture.nativeElement);
    const name = inputEls[0].getAttribute('name');
    expect(name).toBeDefined();
    inputEls.forEach(e => {
      expect(e.getAttribute('name')).toEqual(name);
    });
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
      <fieldset ngl-radio-group label [error]="error">
        <ngl-radio-option label><input ngl type="radio"></ngl-radio-option>
        <ngl-radio-option label><input ngl type="radio"></ngl-radio-option>
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
    const fixture = createTestComponent(`<fieldset ngl-radio-group label [required]="required"></fieldset>`);
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

    labelEls.forEach(e => expect(e).toHaveCssClass('slds-radio__label'));
  });

  it('should render button group', () => {
    const fixture = createTestComponent(`
      <ng-template #lbl>Label One</ng-template>
      <fieldset ngl-radio-group label type="button">
        <ngl-radio-option [label]="lbl"><input ngl type="radio"></ngl-radio-option>
        <ngl-radio-option [label]="'Label Two'"><input ngl type="radio"></ngl-radio-option>
      </fieldset>
    `);
    expect(fixture.nativeElement.querySelector('.slds-form-element__control').firstElementChild).toHaveCssClass('slds-radio_button-group');

    const labelEls = getOptionLabelElements(fixture.nativeElement);
    expect(labelEls.map(e => e.textContent.trim())).toEqual(['Label One', 'Label Two']);

    labelEls.forEach(e => {
      expect(e).toHaveCssClass('slds-radio_button__label');
      expect(e).not.toHaveCssClass('slds-radio__label');
    });
  });

  it('should render dynamic options', () => {
    const fixture = createTestComponent(`
      <fieldset ngl-radio-group [label]="label">
        <ngl-radio-option *ngFor="let o of options" [label]="o">
          <input ngl type="radio">
        </ngl-radio-option>
      </fieldset>
    `);

    const labelEls = getOptionLabelElements(fixture.nativeElement);
    expect(labelEls.map(e => e.textContent.trim())).toEqual(['A', 'B', 'C']);

    labelEls.forEach(e => {
      expect(e).toHaveCssClass('slds-radio__label');
    });

    const inputEls = getInputElements(fixture.nativeElement);
    const name = inputEls[0].getAttribute('name');
    expect(name).toBeDefined();
    inputEls.forEach(e => {
      expect(e.getAttribute('name')).toEqual(name);
    });
  });

});

@Component({
  template: `
  <fieldset ngl-radio-group [label]="label">
    <ngl-radio-option label="Label One">
      <input ngl type="radio">
    </ngl-radio-option>
    <ngl-radio-option label="Label Two">
      <input ngl type="radio">
    </ngl-radio-option>
  </fieldset>`,
})
export class TestComponent {
  label = 'Group Label';
  error: string;
  required: boolean;

  options = ['A', 'B', 'C'];
}
