import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../../test/util/helpers';
import { getInputElement, getLabelElement, getRequiredElement, getErrorElement } from '../input/input.spec';
import { NglCheckboxesModule } from '../module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

describe('`NglCheckbox`', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglCheckboxesModule]}));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const element = fixture.nativeElement.firstElementChild;
    expect(element).toHaveCssClass('slds-form-element');

    const labelEl = getLabelElement(element);
    expect(labelEl).toHaveText('My label');

    const inputEl = getInputElement(fixture.nativeElement);
    expect(inputEl.id).toEqual(labelEl.getAttribute('for'));

    expect(getErrorElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should not overwrite existing id of input', () => {
    const fixture = createTestComponent(`<ngl-checkbox label><input ngl id="ch01" type="checkbox" /></ngl-checkbox>`);
    const element = fixture.nativeElement.firstElementChild;

    const labelEl = getLabelElement(element);
    const inputEl = getInputElement(fixture.nativeElement);
    expect(inputEl.id).toEqual('ch01');
    expect(inputEl.id).toEqual(labelEl.getAttribute('for'));
  });

  it('should hook label indication on input required', () => {
    const fixture = createTestComponent(`<ngl-checkbox label><input ngl type="checkbox" [required]="required" /></ngl-checkbox>`);
    expect(getRequiredElement(fixture.nativeElement)).toBeFalsy();

    fixture.componentInstance.required = true;
    fixture.detectChanges();
    const abbrEl = getRequiredElement(fixture.nativeElement);
    expect(abbrEl).toHaveCssClass('slds-required');

    fixture.componentInstance.required = false;
    fixture.detectChanges();
    expect(getRequiredElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should show support stacked layout', () => {
    const fixture = createTestComponent(`<ngl-checkbox label stacked><input ngl type="checkbox" /></ngl-checkbox>`);
    const el = fixture.nativeElement.querySelector('.slds-checkbox');
    expect(el).toHaveCssClass('slds-checkbox_stacked');
  });

  it('should show error correctly', () => {
    const fixture = createTestComponent();
    fixture.componentInstance.error = 'An error';
    fixture.detectChanges();

    const errorEl = getErrorElement(fixture.nativeElement);
    const inputEl = getInputElement(fixture.nativeElement);
    expect(errorEl).toHaveText('An error');
    expect(errorEl.id).toEqual(inputEl.getAttribute('aria-describedby'));
  });

});

@Component({
  template: `
    <ngl-checkbox [label]="label" [error]="error">
      <input ngl type="checkbox" />
    </ngl-checkbox>
  `,
})
export class TestComponent {
  label = 'My label';
  required: boolean;
  error: string;
}
