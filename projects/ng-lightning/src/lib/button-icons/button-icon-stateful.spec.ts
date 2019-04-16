import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util';
import { NglButtonIconsModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getButtonElement(element: Element): HTMLButtonElement {
  return <HTMLButtonElement>element.querySelector('button');
}

function getAssistiveElement(element: Element): SVGSVGElement {
  return element.querySelector('.slds-assistive-text');
}

describe('`NglButtonIconStateful`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglButtonIconsModule]}));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const button = getButtonElement(fixture.nativeElement);

    expect(button).toHaveCssClass('slds-button');
    expect(button).toHaveCssClass('slds-button_icon');
    expect(button).toHaveCssClass('slds-button_icon-border');

    const assistive = getAssistiveElement(fixture.nativeElement);
    expect(assistive.textContent).toBe('Help');
  });

  it('should toggle state based on input', () => {
    const fixture = createTestComponent();
    const { componentInstance } = fixture;
    const button = getButtonElement(fixture.nativeElement);
    expect(button).not.toHaveCssClass('slds-not-selected');
    expect(button.getAttribute('aria-pressed')).toBe('false');

    componentInstance.selected = true;
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-is-selected');
    expect(button.getAttribute('aria-pressed')).toBe('true');

    componentInstance.selected = false;
    fixture.detectChanges();
    expect(button).not.toHaveCssClass('slds-not-selected');
    expect(button.getAttribute('aria-pressed')).toBe('false');

  });

  it('should emit the appropriate event on click', () => {
    const fixture = createTestComponent();
    const { nativeElement, componentInstance } = fixture;

    const button = getButtonElement(nativeElement);
    button.click();
    expect(componentInstance.change).toHaveBeenCalledWith(true);

    componentInstance.selected = true;
    fixture.detectChanges();
    button.click();
    expect(componentInstance.change).toHaveBeenCalledWith(false);
  });

  it('should fallback to title if no `alternativeText` provided', () => {
    const fixture = createTestComponent(`<button nglButtonIconStateful selected="true" title="Info title"></button>`);
    const { nativeElement } = fixture;

    const assistive = getAssistiveElement(nativeElement);
    expect(assistive.textContent).toBe('Info title');
  });

  it('should render the appropriate variant', () => {
    const fixture = createTestComponent(`<button nglButtonIconStateful selected="true" [variant]="variant"></button>`);
    const { componentInstance, nativeElement } = fixture;

    const button = getButtonElement(nativeElement);
    expect(button).toHaveCssClass('slds-button_icon-border');

    componentInstance.variant = 'border-filled';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_icon-border-filled');
    expect(button).not.toHaveCssClass('slds-button_icon-border');

    componentInstance.variant = null;
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_icon-border');
    expect(button).not.toHaveCssClass('slds-button_icon-border-filled');
  });

  it('should handle size', () => {
    const fixture = createTestComponent(`<button nglButtonIconStateful selected="true" [size]="size"></button>`);
    const { componentInstance, nativeElement } = fixture;

    const button = getButtonElement(nativeElement);

    componentInstance.size = 'small';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_icon-small');

    componentInstance.size = 'x-small';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_icon-x-small');
    expect(button).not.toHaveCssClass('slds-button_icon-small');
  });

});

@Component({
  template: `
    <button type="button" nglButtonIconStateful [selected]="selected" (selectedChange)="change($event)" alternativeText="Help"></button>
  `,
})
export class TestComponent {
  selected = false;
  change = jasmine.createSpy();
  variant: string;
  size: string;
}
