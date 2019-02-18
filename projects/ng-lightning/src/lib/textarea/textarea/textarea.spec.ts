import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../../test/util/helpers';
import { NglTextareaModule } from '../module';
import { getLabelElement, getRequiredElement, getErrorElement } from '../input/input.spec';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getInputElement(element: Element): HTMLTextAreaElement {
  return <HTMLTextAreaElement>element.querySelector('textarea');
}

describe('`NglTextarea`', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglTextareaModule] }));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const element = fixture.nativeElement.firstElementChild;
    expect(element).toHaveCssClass('slds-form-element');

    const labelEl = getLabelElement(element);
    expect(labelEl).toHaveText('My label');

    const inputEl = getInputElement(element);
    expect(inputEl).toHaveCssClass('slds-textarea');

    const inputId = inputEl.getAttribute('id');
    expect(inputId).toEqual(labelEl.getAttribute('for'));
  });

  it('should hook label indication on input required', () => {
    const fixture = createTestComponent(`<ngl-textarea label><textarea ngl [required]="required"></textarea></ngl-textarea>`);
    expect(getRequiredElement(fixture.nativeElement)).toBeFalsy();

    fixture.componentInstance.required = true;
    fixture.detectChanges();
    const abbrEl = getRequiredElement(fixture.nativeElement);
    expect(abbrEl).toHaveCssClass('slds-required');

    fixture.componentInstance.required = false;
    fixture.detectChanges();
    expect(getRequiredElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should render error message', () => {
    const fixture = createTestComponent();
    fixture.componentInstance.error = 'An error';
    fixture.detectChanges();

    const errorEl = getErrorElement(fixture.nativeElement);
    const inputEl = getInputElement(fixture.nativeElement);
    expect(errorEl).toHaveText('An error');
    expect(errorEl.id).toEqual(inputEl.getAttribute('aria-describedby'));
  });

  it('should throw error if structure is wrong', () => {
    expect(() => createTestComponent(`<ngl-textarea label><textarea></textarea></ngl-textarea>`)).toThrowError();
  });

});


@Component({
  template: `
    <ngl-textarea [label]="label" [error]="error">
      <textarea ngl></textarea>
    </ngl-textarea>
  `,
})
export class TestComponent {
  label = 'My label';
  required: boolean;
  error: string;
}
