import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../../test/util/helpers';
import { NglCheckboxesModule } from '../module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getInputElement(element: Element): HTMLInputElement {
  return <HTMLInputElement>element.querySelector('input');
}

function getLabelElement(element: Element): HTMLLabelElement {
  return <HTMLLabelElement>element.querySelector('label');
}

function getAssistiveElement(element: Element): HTMLLabelElement {
  return <HTMLLabelElement>element.querySelector('.slds-assistive-text');
}

describe('`NglCheckboxButton`', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglCheckboxesModule]}));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const element = fixture.nativeElement.firstElementChild;

    expect(element).toHaveCssClass('slds-checkbox_add-button');

    const labelEl = getLabelElement(element);
    expect(labelEl).toHaveCssClass('slds-checkbox_faux');

    const assistiveEl = getAssistiveElement(labelEl);
    expect(assistiveEl).toHaveText('Add product');

    const inputEl = getInputElement(element);
    expect(inputEl).toHaveCssClass('slds-assistive-text');
  });

  it('should connect with the passed input', () => {
    const fixture = createTestComponent();
    const element = fixture.nativeElement.firstElementChild;

    const labelEl = getLabelElement(element);
    const inputEl = getInputElement(element);
    expect(labelEl.getAttribute('for')).toEqual(inputEl.id);
  });

});

@Component({
  template: `
    <ngl-checkbox-button [label]="label" >
      <input ngl type="checkbox" />
    </ngl-checkbox-button>
  `,
})
export class TestComponent {
  label = 'Add product';
}
