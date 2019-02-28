import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util/helpers';
import { NglButtonsModule } from './module';
import { NglIconsModule } from '../icons/module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getButtonElement(element: Element) {
  return element.querySelector('button');
}

function getIconElement(element: Element) {
  return element.querySelector('svg');
}

describe('`nglButton`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglButtonsModule, NglIconsModule]}));

  it('should render the default button', () => {
    const fixture = createTestComponent();
    const button = getButtonElement(fixture.nativeElement);
    expect(button).toHaveCssClass('slds-button');
    expect(button).toHaveCssClass('slds-button_neutral');
    expect(button.textContent).toBe('Go');

    expect(getIconElement(button)).toBeFalsy();
  });

  it('should render based on variant input', () => {
    const fixture = createTestComponent(`<button nglButton [variant]="variant"></button>`);
    const { componentInstance, nativeElement } = fixture;
    const button = getButtonElement(nativeElement);

    componentInstance.variant = 'brand';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_brand');

    componentInstance.variant = 'base';
    fixture.detectChanges();
    expect(button).not.toHaveCssClass('slds-button_base');
    expect(button).not.toHaveCssClass('slds-button_brand');

    componentInstance.variant = 'destructive';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_destructive');
  });

  it('should render default icon', () => {
    const fixture = createTestComponent(`<button nglButton iconName="utility:settings"></button>`);
    const button = getButtonElement(fixture.nativeElement);
    const icon = getIconElement(button);
    expect(icon).toHaveCssClass('slds-button__icon');
    expect(icon).toHaveCssClass('slds-button__icon_left');
  });

  it('should render icon based on input position', () => {
    const fixture = createTestComponent(`<button nglButton iconName="utility:settings" [iconPosition]="position"></button>`);
    const button = getButtonElement(fixture.nativeElement);
    let icon = getIconElement(button);
    expect(icon).toHaveCssClass('slds-button__icon');
    expect(icon).toHaveCssClass('slds-button__icon_left');

    fixture.componentInstance.position = 'right';
    fixture.detectChanges();
    icon = getIconElement(button);
    expect(icon).toHaveCssClass('slds-button__icon');
    expect(icon).toHaveCssClass('slds-button__icon_right');
  });
});


@Component({
  template: `<button nglButton>Go</button>`,
})
export class TestComponent {
  variant: string;
  size: string;
  position: string;
}
