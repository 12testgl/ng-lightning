import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, Injectable, OnDestroy, ViewChild } from '@angular/core';
import { dispatchKeyboardEvent, createGenericTestComponent } from '../../../test/util';
import { NglPopoversModule } from './module';
import { Size, Variant, NglPopoverTrigger } from './trigger';
import { ESCAPE } from '@angular/cdk/keycodes';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

export function getPopoverElement(): HTMLElement {
  return document.querySelector('[ngl-popover]');
}

function getBodyEl(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.querySelector('.slds-popover__body');
}

function getHeaderEl(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.querySelector('.slds-popover__header');
}

function getFooterEl(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.querySelector('.slds-popover__footer');
}

function getCloseButtonEl(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.querySelector('.slds-popover__close');
}

function getAssistiveTextEl(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.querySelector('.slds-assistive-text');
}

export function expectPlacementStyles(element: HTMLElement, styles: any) {
  const { top, right, bottom, left } = element.style;
  const expected = [styles.top, styles.right, styles.bottom, styles.left].map(e => e || '');
  expect([top, right, bottom, left]).toEqual(expected);
}

function getOutsidePopoverElement(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.children[1];
}

describe('Popovers', () => {
  let fixture: any;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TestComponent, DestroyableComponent],
    imports: [NglPopoversModule],
    providers: [SpyService],
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should render the created popover correctly', () => {
    fixture = createTestComponent();
    const popoverEl = getPopoverElement();
    const bodyEl = getBodyEl(popoverEl);
    expect(popoverEl).toHaveCssClass('slds-popover');
    expect(popoverEl).toHaveCssClass('slds-nubbin_bottom'); // Top placement
    expect(popoverEl.getAttribute('role')).toBe('dialog');
    expect(getCloseButtonEl(popoverEl)).toBeTruthy();
    expect(bodyEl.textContent.trim()).toBe('I am a string');
  });

  it('should render aria correctly', () => {
    fixture = createTestComponent();
    const popoverEl = getPopoverElement();
    const bodyEl = getBodyEl(popoverEl);
    expect(popoverEl.getAttribute('aria-describedby')).toBe(bodyEl.id);
  });

  it('should change visibility based on trigger', () => {
    fixture = createTestComponent();
    fixture.componentInstance.open = false;
    fixture.detectChanges();

    const popoverEl = getPopoverElement();
    expect(popoverEl).toBeFalsy();
  });

  it('should change nubbin and styles based on placement', () => {
    fixture = createTestComponent();
    const { componentInstance } = fixture;
    const popoverEl = getPopoverElement();

    expect(popoverEl).toHaveCssClass('slds-nubbin_bottom');
    expectPlacementStyles(popoverEl, { bottom: '1rem'});

    componentInstance.placement = 'left';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-nubbin_right');
    expect(popoverEl).not.toHaveCssClass('slds-nubbin_bottom');
    expectPlacementStyles(popoverEl, { right: '1rem' });

    componentInstance.placement = 'right-top';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-nubbin_left-top');
    expectPlacementStyles(popoverEl, { left: '1rem', top: '-1.5rem' });

    componentInstance.placement = 'left-bottom';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-nubbin_right-bottom');
    expectPlacementStyles(popoverEl, { right: '1rem', bottom: '-1.5rem' });

    componentInstance.placement = 'bottom';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-nubbin_top');
    expect(popoverEl).not.toHaveCssClass('slds-nubbin_right');
    expectPlacementStyles(popoverEl, { top: '1rem' });
  });

  it('should change variant based on input', () => {
    fixture = createTestComponent();
    const { componentInstance } = fixture;
    const popoverEl = getPopoverElement();

    componentInstance.variant = 'walkthrough';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-popover_walkthrough');

    componentInstance.variant = 'warning';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-popover_warning');
    expect(popoverEl).not.toHaveCssClass('slds-popover_walkthrough');

    componentInstance.variant = 'error';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-popover_error');
    expect(popoverEl).not.toHaveCssClass('slds-popover_warning');

    componentInstance.variant = 'panel';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-popover_panel');
    expect(popoverEl).not.toHaveCssClass('slds-popover_error');

    componentInstance.variant = 'feature';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-popover_feature');
    expect(popoverEl).toHaveCssClass('slds-popover_walkthrough');
    expect(popoverEl).not.toHaveCssClass('slds-popover_panel');

    componentInstance.variant = null;
    fixture.detectChanges();
    expect(popoverEl).not.toHaveCssClass('slds-popover_feature');
    expect(popoverEl).not.toHaveCssClass('slds-popover_walkthrough');
  });

  it('should change size based on input', () => {
    fixture = createTestComponent();
    const { componentInstance } = fixture;
    const popoverEl = getPopoverElement();

    componentInstance.size = 'small';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-popover_small');

    componentInstance.size = 'medium';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-popover_medium');

    componentInstance.size = 'large';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-popover_large');

    componentInstance.size = 'full-width';
    fixture.detectChanges();
    expect(popoverEl).toHaveCssClass('slds-popover_full-width');
  });

  it('should destroy popover when host is destroyed', () => {
    fixture = createTestComponent(`<ng-template #tip></ng-template><span *ngIf="exists" [nglPopover]="tip" nglPopoverOpen="true"></span>`, false);
    fixture.componentInstance.exists = true;
    fixture.detectChanges();
    expect(getPopoverElement()).toBeTruthy();

    fixture.componentInstance.exists = false;
    fixture.detectChanges();
    expect(getPopoverElement()).toBeFalsy();
  });

  it('should properly destroy TemplateRef content', () => {
    fixture = createTestComponent(`
      <ng-template #t><destroyable></destroyable></ng-template>
      <button [nglPopover]="t" [(nglPopoverOpen)]="open"></button>
    `);

    const spyService = fixture.debugElement.injector.get(SpyService);
    expect(spyService.called).not.toHaveBeenCalled();

    fixture.componentInstance.open = false;
    fixture.detectChanges();
    expect(spyService.called).toHaveBeenCalled();
  });

  it('should render popover with string content', () => {
    fixture = createTestComponent();
    const popoverEl = getPopoverElement();
    const bodyEl = getBodyEl(popoverEl);
    expect(bodyEl.textContent.trim()).toBe('I am a string');
  });

  it('should render popover with template content', () => {
    fixture = createTestComponent(`
      <ng-template #popover>I am a string</ng-template>
      <a [nglPopover]="popover" nglPopoverOpen="true"></a>
    `);
    const popoverEl = getPopoverElement();
    expect(popoverEl.textContent.trim()).toBe('I am a string');
  });

  it('should render header with string content', () => {
    fixture = createTestComponent(`<button nglPopover="tip" nglPopoverHeader="header" nglPopoverOpen="true"></button>`);
    const popoverEl = getPopoverElement();
    const headerEl = getHeaderEl(popoverEl);
    expect(headerEl.textContent).toBe('header');
    expect(popoverEl.getAttribute('aria-labelledby')).toBe(headerEl.firstElementChild.id);
  });

  it('should render header with template content', () => {
    fixture = createTestComponent(`
      <ng-template #header>header</ng-template>
      <button nglPopover="tip" [nglPopoverHeader]="header" nglPopoverOpen="true"></button>
    `);
    const popoverEl = getPopoverElement();
    const headerEl = getHeaderEl(popoverEl);
    expect(headerEl.textContent).toBe('header');
  });

  it('should render footer with string content', () => {
    fixture = createTestComponent(`<button nglPopover="tip" nglPopoverFooter="footer" nglPopoverOpen="true"></button>`);
    const popoverEl = getPopoverElement();
    const footerEl = getFooterEl(popoverEl);
    expect(footerEl.textContent).toBe('footer');
  });

  it('should render footer with template content', () => {
    fixture = createTestComponent(`
      <ng-template #footer>footer</ng-template>
      <button nglPopover="tip" [nglPopoverFooter]="footer" nglPopoverOpen="true"></button>
    `);
    const popoverEl = getPopoverElement();
    const footerEl = getFooterEl(popoverEl);
    expect(footerEl.textContent).toBe('footer');
  });

  it('should not render the close button if `nglPopoverOpenChange` is not bound', () => {
    fixture = createTestComponent(`<button nglPopover="tip" [nglPopoverOpen]="true"></button>`);
    const popoverEl = getPopoverElement();
    expect(getCloseButtonEl(popoverEl)).toBeFalsy();
  });

  it('should close if `x` is clicked', () => {
    fixture = createTestComponent();
    const popoverEl = getPopoverElement();
    expect(fixture.componentInstance.cb).not.toHaveBeenCalled();
    getCloseButtonEl(popoverEl).click();
    expect(fixture.componentInstance.cb).toHaveBeenCalledWith('x');
  });

  it('should close if `backdrop` is clicked', async(() => {
    fixture = createTestComponent();
    const outsideDropdownElement = getOutsidePopoverElement(fixture.nativeElement);

    setTimeout(() => {  // Wait for document subsription
      expect(fixture.componentInstance.cb).not.toHaveBeenCalled();
      outsideDropdownElement.click();
      expect(fixture.componentInstance.cb).toHaveBeenCalledWith('backdrop');
    });
  }));

  it('should NOT close if popover is clicked', () => {
    fixture = createTestComponent();
    const popoverEl = getPopoverElement();
    expect(fixture.componentInstance.cb).not.toHaveBeenCalled();
    popoverEl.click();
    expect(fixture.componentInstance.cb).not.toHaveBeenCalled();
  });

  it('should close if `escape` is pressed', () => {
    fixture = createTestComponent();
    expect(fixture.componentInstance.cb).not.toHaveBeenCalled();
    dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
    expect(fixture.componentInstance.cb).toHaveBeenCalledWith('escape');
  });

  it('should return focus back to triggering element if `x` is clicked', () => {
    fixture = createTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;
    fixture.componentInstance.open = 'x';
    fixture.detectChanges();
    expect(triggerEl).toBe(document.activeElement);
  });

  it('should return focus back to triggering element if `escape` is pressed', () => {
    fixture = createTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;
    fixture.componentInstance.open = 'escape';
    fixture.detectChanges();
    expect(triggerEl).toBe(document.activeElement);
  });

  it('should NOT return focus back to triggering element if `backdrop` is clicked', () => {
    fixture = createTestComponent();
    const triggerEl = fixture.nativeElement.firstElementChild;
    fixture.componentInstance.open = 'backdrop';
    fixture.detectChanges();
    expect(triggerEl).not.toBe(document.activeElement);
  });

  it('should render default close button title and assistive text properly', () => {
    fixture = createTestComponent();
    const popoverEl = getPopoverElement();
    const closeButtonEl = getCloseButtonEl(popoverEl);
    const assistiveTextEl = getAssistiveTextEl(closeButtonEl);
    expect(closeButtonEl.title).toBe('Close dialog');
    expect(assistiveTextEl.innerText).toBe('Close dialog');
  });

  it('should render close button title and assistive text based on input', () => {
    fixture = createTestComponent(`<button nglPopover="tip" [nglPopovercloseTitle]="closeTitle" [(nglPopoverOpen)]="open"></button>`);
    const popoverEl = getPopoverElement();
    const closeButtonEl = getCloseButtonEl(popoverEl);
    expect(closeButtonEl.title).toBe('');
    expect(getAssistiveTextEl(closeButtonEl)).toBeFalsy();

    fixture.componentInstance.closeTitle = 'New title';
    fixture.detectChanges();
    expect(closeButtonEl.title).toBe('New title');
    expect(getAssistiveTextEl(closeButtonEl).innerText).toBe('New title');
  });
});

@Component({
  template: `
    <ng-template #tip>I am a string</ng-template>
    <button
      [nglPopover]="tip"
      [nglPopoverPlacement]="placement"
      [nglPopoverVariant]="variant"
      [nglPopoverSize]="size"
      [(nglPopoverOpen)]="open"
      (nglPopoverOpenChange)="cb($event)">Open here
    </button>
  <div></div>`,
})
export class TestComponent {
  @ViewChild(NglPopoverTrigger) popover: NglPopoverTrigger;
  placement: string;
  open = true;
  exists: boolean;
  theme: string;
  variant: Variant;
  size: Size;
  closeTitle = '';

  cb = jasmine.createSpy('cb');
}


@Injectable()
class SpyService {
  called = jasmine.createSpy('spyCall');
}

// tslint:disable-next-line:component-selector
@Component({selector: 'destroyable', template: 'Some content'})
export class DestroyableComponent implements OnDestroy {

  constructor(private service: SpyService) {}

  ngOnDestroy() {
    this.service.called();
  }
}
