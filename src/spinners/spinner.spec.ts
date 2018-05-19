import {TestBed, ComponentFixture}  from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent} from '../../test/util/helpers';
import {NglSpinnersModule} from './module';

const createTestComponent = (html?: string) =>
  createGenericTestComponent(TestComponent, html) as ComponentFixture<TestComponent>;

function getSpinnerElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.firstElementChild;
}

function getAlternativeTextElement(element: Element): HTMLDivElement {
  return getSpinnerElement(element).querySelector('.slds-assistive-text');
}

describe('Spinner Component', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglSpinnersModule]}));

  it('should render a medium spinner', () => {
    const fixture = createTestComponent();

    const spinner = getSpinnerElement(fixture.nativeElement);

    expect(spinner).toBeDefined();
    expect(spinner).toHaveCssClass('slds-spinner_medium');
  });

  it('should render a large spinner based on input', () => {
    const fixture = createTestComponent(`<ngl-spinner [size]="size" ></ngl-spinner>`);
    const spinner = getSpinnerElement(fixture.nativeElement);
    expect(spinner).toHaveCssClass('slds-spinner_large');

    fixture.componentInstance.size = null;
    fixture.detectChanges();
    expect(spinner).toHaveCssClass('slds-spinner_medium');
    expect(spinner).not.toHaveCssClass('slds-spinner_large');

    fixture.componentInstance.size = 'small';
    fixture.detectChanges();
    expect(spinner).toHaveCssClass('slds-spinner_small');
    expect(spinner).not.toHaveCssClass('slds-spinner_medium');
  });

  it('should render a spinner variant based on input', () => {
    const fixture = createTestComponent(`<ngl-spinner [variant]="variant" ></ngl-spinner>`);
    const spinner = getSpinnerElement(fixture.nativeElement);
    expect(spinner).toHaveCssClass('slds-spinner_brand');

    fixture.componentInstance.variant = null;
    fixture.detectChanges();
    expect(spinner).not.toHaveCssClass('slds-spinner_brand');

    fixture.componentInstance.variant = 'inverse';
    fixture.detectChanges();
    expect(spinner).toHaveCssClass('slds-spinner_inverse');
    expect(spinner).not.toHaveCssClass('slds-spinner_brand');
  });

  it('should have assistive text', () => {
    const fixture = createTestComponent(`<ngl-spinner alternativeText="loading" ></ngl-spinner>`);
    const altEl = getAlternativeTextElement(fixture.nativeElement);
    expect(altEl.innerText).toEqual('loading');
  });

});

@Component({
  template: `<ngl-spinner></ngl-spinner>`,
})
export class TestComponent {
  size = 'large';
  variant = 'brand';
}
