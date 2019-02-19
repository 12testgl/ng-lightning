import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../../test/util/helpers';
import { NglInputsModule } from '../module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

export function getLabelElement(element: Element): HTMLLabelElement {
  return <HTMLLabelElement>element.querySelector('label');
}

function getInputElement(element: Element): HTMLInputElement {
  return <HTMLInputElement>element.querySelector('input');
}

export function getErrorElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('.slds-form-element__help');
}

export function getRequiredElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('abbr');
}

describe('`NglInput`', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglInputsModule] }));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const element = fixture.nativeElement.firstElementChild;
    expect(element).toHaveCssClass('slds-form-element');

    const labelEl = getLabelElement(element);
    expect(labelEl).toHaveText('My label');

    const inputEl = getInputElement(element);
    expect(inputEl).toHaveCssClass('slds-input');

    const inputId = inputEl.getAttribute('id');
    expect(inputId).toEqual(labelEl.getAttribute('for'));
  });

  it('should be able to change label', () => {
    const fixture = createTestComponent();
    fixture.componentInstance.label = 'Another label';
    fixture.detectChanges();

    const labelEl = getLabelElement(fixture.nativeElement);
    expect(labelEl).toHaveText('Another label');
  });

  it('should render error message', () => {
    const fixture = createTestComponent(`<ngl-input label [error]="error"><input ngl type="text"></ngl-input>`);
    const element = fixture.nativeElement.firstElementChild;

    expect(element).not.toHaveCssClass('slds-has-error');
    expect(getErrorElement(element)).toBeFalsy();
    fixture.componentInstance.error = 'This is an error!';
    fixture.detectChanges();

    const errorEl = getErrorElement(element);
    const inputEl = getInputElement(element);
    expect(element).toHaveCssClass('slds-has-error');
    expect(errorEl.id).toEqual(inputEl.getAttribute('aria-describedby'));
    expect(errorEl).toHaveText('This is an error!');
  });

  it('should throw error if structure is wrong', () => {
    expect(() => createTestComponent(`<ngl-input label><input type="input"></ngl-input>`)).toThrowError();
  });

});

@Component({
  template: `
    <ngl-input [label]="label">
      <input ngl type="text">
    </ngl-input>
  `,
})
export class TestComponent {
  label = 'My label';
  error: string;
}
