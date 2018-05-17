import {TestBed, ComponentFixture}  from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent, dispatchEvent} from '../../test/util/helpers';
import {NglPopoversModule} from './module';
import {getPopoverElement} from './popover.spec';

const createUnboundTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponentWithoutBinding, html, detectChanges) as ComponentFixture<TestComponentWithoutBinding>;

const createDataBoundTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponentWithBinding, html, detectChanges) as ComponentFixture<TestComponentWithBinding>;

describe('`NglPopoverBehavior` without binding', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponentWithoutBinding], imports: [NglPopoversModule]}));

  it('should add `tabindex` to make it focusable', () => {
    const fixture = createUnboundTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;
    expect(triggerEl.getAttribute('tabindex')).toBe('0');
  });

  it('should change visibility based on mouse', () => {
    const fixture = createUnboundTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;
    dispatchEvent(triggerEl, 'mouseenter');
    expect(getPopoverElement(fixture.nativeElement)).toBeTruthy();

    dispatchEvent(triggerEl, 'mouseleave');
    expect(getPopoverElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should change visibility based on focus', () => {
    const fixture = createUnboundTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;
    dispatchEvent(triggerEl, 'focus');
    expect(getPopoverElement(fixture.nativeElement)).toBeTruthy();

    dispatchEvent(triggerEl, 'blur');
    expect(getPopoverElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should create more than one instances', () => {
    const fixture = createUnboundTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;
    dispatchEvent(triggerEl, 'focus');
    dispatchEvent(triggerEl, 'mouseenter');
    expect(fixture.nativeElement.querySelectorAll('ngl-popover').length).toBe(1);
  });
});

describe('`NglPopoverBehavior` with binding', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponentWithBinding], imports: [NglPopoversModule]}));

  it('should change visibility based on mouse when enabled', () => {
    const fixture = createDataBoundTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;

    fixture.componentInstance.enablePopoverBehavior = true;
    fixture.detectChanges();

    dispatchEvent(triggerEl, 'mouseenter');
    expect(getPopoverElement(fixture.nativeElement)).toBeTruthy();

    dispatchEvent(triggerEl, 'mouseleave');
    expect(getPopoverElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should not change visibility based on mouse when disabled', () => {
    const fixture = createDataBoundTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;

    fixture.componentInstance.enablePopoverBehavior = false;
    fixture.detectChanges();

    dispatchEvent(triggerEl, 'mouseenter');
    expect(getPopoverElement(fixture.nativeElement)).toBeFalsy();

    dispatchEvent(triggerEl, 'mouseleave');
    expect(getPopoverElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should change visibility based on focus when enabled', () => {
    const fixture = createDataBoundTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;

    fixture.componentInstance.enablePopoverBehavior = true;
    fixture.detectChanges();

    dispatchEvent(triggerEl, 'focus');
    expect(getPopoverElement(fixture.nativeElement)).toBeTruthy();

    dispatchEvent(triggerEl, 'blur');
    expect(getPopoverElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should not change visibility based on focus when disabled', () => {
    const fixture = createDataBoundTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;

    fixture.componentInstance.enablePopoverBehavior = false;
    fixture.detectChanges();

    dispatchEvent(triggerEl, 'focus');
    expect(getPopoverElement(fixture.nativeElement)).toBeFalsy();

    dispatchEvent(triggerEl, 'blur');
    expect(getPopoverElement(fixture.nativeElement)).toBeFalsy();
  });


  it('should close if disabled after opening', () => {
    const fixture = createDataBoundTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;

    fixture.componentInstance.enablePopoverBehavior = true;
    fixture.detectChanges();

    dispatchEvent(triggerEl, 'focus');
    expect(getPopoverElement(fixture.nativeElement)).toBeTruthy();

    fixture.componentInstance.enablePopoverBehavior = false;
    fixture.detectChanges();

    expect(getPopoverElement(fixture.nativeElement)).toBeFalsy();
  });
});

@Component({
  template: `
    <ng-template #tip>I am a tooltip</ng-template>
    <span [nglPopover]="tip" nglPopoverBehavior>Open here</span>
  `,
})
export class TestComponentWithoutBinding {}


@Component({
  template: `
    <ng-template #tip>I am a tooltip</ng-template>
    <span [nglPopover]="tip" [nglPopoverBehavior]="enablePopoverBehavior">Open here</span>
  `,
})
export class TestComponentWithBinding {
  public enablePopoverBehavior: boolean;
}
