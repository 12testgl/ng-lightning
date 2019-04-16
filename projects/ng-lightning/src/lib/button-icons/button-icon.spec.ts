import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util';
import { NglButtonIconsModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getButtonElement(element: Element): HTMLButtonElement {
  return element.querySelector('button');
}

function getIconElement(element: Element): SVGSVGElement {
  return element.querySelector('svg');
}

function getAssistiveElement(element: Element): HTMLDivElement {
  return element.querySelector('.slds-assistive-text');
}

describe('`NglButtonIcon`', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglButtonIconsModule]}));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const {nativeElement} = fixture;
    const button = getButtonElement(nativeElement);
    expect(button).toHaveCssClass('slds-button');
    expect(button).toHaveCssClass('slds-button_icon');

    const icon = getIconElement(nativeElement);
    expect(icon).toHaveCssClass('slds-button__icon');

    const assistive = getAssistiveElement(nativeElement);
    expect(assistive.textContent).toBe('Help');
  });

  it('should fallback to title if no `alternativeText` provided', () => {
    const fixture = createTestComponent(`<button nglButtonIcon title="Info title"></button>`);
    const { nativeElement } = fixture;

    const assistive = getAssistiveElement(nativeElement);
    expect(assistive.textContent).toBe('Info title');
  });

  it('should render the appropriate variant', () => {
    const fixture = createTestComponent(`<button nglButtonIcon [iconName]="iconName" [variant]="variant"></button>`);
    const { componentInstance, nativeElement } = fixture;

    const button = getButtonElement(nativeElement);
    expect(button).toHaveCssClass('slds-button');
    expect(button).toHaveCssClass('slds-button_icon');

    expect(button).toHaveCssClass('slds-button_icon-brand');
    expect(button).not.toHaveCssClass('slds-button_icon-border');

    componentInstance.variant = 'bare';
    fixture.detectChanges();
    expect(button).not.toHaveCssClass('slds-button_icon-bare');
    expect(button).not.toHaveCssClass('slds-button_icon-brand');
    expect(button).not.toHaveCssClass('slds-button_icon-border');

    componentInstance.variant = 'inverse';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_icon-inverse');
  });

  it('should handle size for non-variant', () => {
    const fixture = createTestComponent(`<button nglButtonIcon variant="bare" [iconName]="iconName" [size]="size"></button>`);
    const { componentInstance, nativeElement } = fixture;

    const button = getButtonElement(nativeElement);
    const icon = getIconElement(nativeElement);

    componentInstance.size = 'small';
    fixture.detectChanges();
    expect(button).not.toHaveCssClass('slds-button_icon-small');
    expect(icon).toHaveCssClass('slds-button__icon_small');

    componentInstance.size = 'x-small';
    fixture.detectChanges();
    expect(button).not.toHaveCssClass('slds-button_icon-x-small');
    expect(icon).toHaveCssClass('slds-button__icon_x-small');
    expect(icon).not.toHaveCssClass('slds-button__icon_small');
  });

  it('should handle size for variant', () => {
    const fixture = createTestComponent(`<button nglButtonIcon variant="brand" [iconName]="iconName" [size]="size"></button>`);
    const { componentInstance, nativeElement } = fixture;

    const button = getButtonElement(nativeElement);
    const icon = getIconElement(nativeElement);

    componentInstance.size = 'small';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_icon-small');
    expect(icon).not.toHaveCssClass('slds-button__icon_small');

    componentInstance.size = 'x-small';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_icon-x-small');
    expect(button).not.toHaveCssClass('slds-button_icon-small');
    expect(icon).not.toHaveCssClass('slds-button__icon_x-small');
  });

  it('should allow extra svg classes', () => {
    const fixture = createTestComponent(`<button nglButtonIcon [iconName]="iconName" [svgClass]="svgClass"></button>`);
    const { nativeElement, componentInstance } = fixture;

    const icon = getIconElement(nativeElement);
    expect(icon).toHaveCssClass('anextra');
    expect(icon).toHaveCssClass('fancy');
    expect(icon).toHaveCssClass('one');

    componentInstance.svgClass = ['another', 'one'];
    fixture.detectChanges();
    expect(icon).not.toHaveCssClass('anextra');
    expect(icon).not.toHaveCssClass('fancy');
    expect(icon).toHaveCssClass('one');
    expect(icon).toHaveCssClass('another');

    componentInstance.svgClass = null;
    fixture.detectChanges();
    expect(icon).not.toHaveCssClass('one');
    expect(icon).not.toHaveCssClass('another');
    expect(icon).toHaveCssClass('slds-button__icon');
  });
});

@Component({
  template: `<button nglButtonIcon [iconName]="iconName" alternativeText="Help" title="Info title"></button>`,
})
export class TestComponent {
  iconName = 'utility:info';
  variant = 'brand';
  size: string;
  svgClass: any = 'anextra fancy one';
}
