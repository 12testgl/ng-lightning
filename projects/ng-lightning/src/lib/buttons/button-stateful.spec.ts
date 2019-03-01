import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent, dispatchEvent } from '../../../test/util/helpers';
import { NglButtonsModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getButtonElement(element: Element): HTMLButtonElement {
  return <HTMLButtonElement>element.querySelector('button');
}

describe('`nglButtonStateful`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglButtonsModule]}));

  it('should render correctly', () => {
    const fixture = createTestComponent(`<button type="button" nglButtonStateful [state]="selected"></button>`);
    const button = getButtonElement(fixture.nativeElement);
    expect(button.getAttribute('aria-live')).toBe('assertive');
    expect(button).toHaveCssClass('slds-button');
    expect(button).toHaveCssClass('slds-button_stateful');
    expect(button).toHaveCssClass('slds-button_neutral');
  });

  it('should toggle state based on input', () => {
    const fixture = createTestComponent(`<button type="button" nglButtonStateful [state]="selected"></button>`);
    const { componentInstance } = fixture;
    const button = getButtonElement(fixture.nativeElement);
    expect(button).toHaveCssClass('slds-not-selected');

    componentInstance.selected = true;
    fixture.detectChanges();
    expect(button).not.toHaveCssClass('slds-not-selected');
    expect(button).toHaveCssClass('slds-is-selected');

    componentInstance.selected = false;
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-not-selected');
    expect(button).not.toHaveCssClass('slds-is-selected');
  });

  it('should emit the appropriate state on click', () => {
    const fixture = createTestComponent();
    const { nativeElement, componentInstance } = fixture;
    componentInstance.change = jasmine.createSpy('change');

    const button = getButtonElement(nativeElement);
    button.click();
    expect(componentInstance.change).toHaveBeenCalledWith(true);

    componentInstance.selected = true;
    fixture.detectChanges();
    button.click();
    expect(componentInstance.change).toHaveBeenCalledWith(false);
  });

  it('should render variation based on input', () => {
    const fixture = createTestComponent(`<button type="button" nglButtonStateful [variant]="variant">`);
    const { componentInstance, nativeElement } = fixture;
    const button = getButtonElement(nativeElement);

    componentInstance.variant = 'brand';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_brand');
    expect(button).not.toHaveCssClass('slds-button_neutral');

    componentInstance.variant = 'text';
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-button_reset');
    expect(button).not.toHaveCssClass('slds-button_brand');
  });

  it('should have the appropriate class when selected and focused', () => {
    const fixture = createTestComponent(`<button type="button" nglButtonStateful [state]="selected">`);
    const { componentInstance, nativeElement } = fixture;
    const button = getButtonElement(nativeElement);

    expect(button).toHaveCssClass('slds-not-selected');

    dispatchEvent(button, 'focus');
    componentInstance.selected = true;
    fixture.detectChanges();
    expect(button).toHaveCssClass('slds-is-selected-clicked');

    dispatchEvent(button, 'blur');
    expect(button).not.toHaveCssClass('slds-is-selected-clicked');
    expect(button).toHaveCssClass('slds-is-selected');
  });
});

@Component({
  template: `
    <button type="button" nglButtonStateful [state]="selected" (stateChange)="change($event)">
      <ngl-state-off iconName="add">Follow</ngl-state-off>
      <ngl-state-on iconName="check">Following</ngl-state-on>
      <ngl-state-hover iconName="close">Unfollow</ngl-state-hover>
    </button>
  `,
})
export class TestComponent {
  selected = false;
  variant = '';
  change: any;
}
