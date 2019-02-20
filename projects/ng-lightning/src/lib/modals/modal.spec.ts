import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent, dispatchKeyEvent } from '../../../test/util/helpers';
import { By } from '@angular/platform-browser';
import { NglModal } from './modal';
import { NglModalsModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getModal(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.querySelector('.slds-modal');
}

function getHeader(element: HTMLElement): HTMLElement {
  return element.querySelector('.slds-modal__header > h2');
}

function getFooter(element: HTMLElement): HTMLElement {
  return element.querySelector('.slds-modal__footer');
}

function getCloseButton(element: HTMLElement): HTMLButtonElement {
  return <HTMLButtonElement>element.querySelector('.slds-modal__header > button.slds-modal__close');
}

function getBackdrop(element: HTMLElement) {
  return element.querySelector('.slds-backdrop');
}

describe('`NglModal`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglModalsModule]}));

  it('should render correctly if open', () => {
    const fixture = createTestComponent();
    const modal = getModal(fixture.nativeElement);
    expect(modal).toHaveCssClass('slds-fade-in-open');
    expect(modal.getAttribute('aria-hidden')).toBe('false');

    const header = getHeader(modal);
    expect(header).toHaveText('Modal Header');
    expect(header.id).toEqual(modal.getAttribute('aria-labelledby'));

    const content = modal.querySelector('.slds-modal__content');
    expect(content.firstElementChild).toHaveCssClass('slds-p-around_medium');
    expect(content.textContent.trim()).toBe('Body content.');
    expect(content.id).toEqual(modal.getAttribute('aria-describedby'));

    const backdrop = getBackdrop(fixture.nativeElement);
    expect(backdrop).toHaveCssClass('slds-backdrop_open');
  });

  it('should render correctly if closed', () => {
    const fixture = createTestComponent();
    fixture.componentInstance.open = false;
    fixture.detectChanges();

    const modal = getModal(fixture.nativeElement);
    expect(modal).not.toHaveCssClass('slds-fade-in-open');
    expect(modal.getAttribute('aria-hidden')).toBe('true');

    const backdrop = getBackdrop(fixture.nativeElement);
    expect(backdrop).not.toHaveCssClass('slds-backdrop_open');
  });

  it('should render correctly without header', () => {
    const fixture = createTestComponent();
    const headerEl = fixture.nativeElement.querySelector('.slds-modal__header');
    expect(headerEl).not.toHaveCssClass('slds-modal__header_empty');
    expect(getHeader(fixture.nativeElement)).toBeTruthy();

    fixture.componentInstance.header = null;
    fixture.detectChanges();
    expect(headerEl).toHaveCssClass('slds-modal__header_empty');
    expect(getHeader(fixture.nativeElement)).toBeFalsy();
  });

  it('should support custom header', () => {
    const fixture = createTestComponent(`
      <ngl-modal>
        <ng-template nglModalHeader let-id="id"><span [id]="id" class="my-custom">Hello</span></ng-template>
        Body content.
      </ngl-modal>`);
    const headerEl = fixture.nativeElement.querySelector('.slds-modal__header > .my-custom');
    expect(headerEl).toHaveText('Hello');
    expect(headerEl.id).toEqual(getModal(fixture.nativeElement).getAttribute('aria-labelledby'));
    expect(getHeader(fixture.nativeElement)).toBeFalsy();
  });

  it('should support tagline in header', () => {
    const fixture = createTestComponent(`
      <ngl-modal header="Custom header">
        <ng-template nglModalTagline><span>Custom tagline</span></ng-template>
      </ngl-modal>`);
    const headerEl = fixture.nativeElement.querySelector('.slds-modal__header');
    const taglineEl = headerEl.lastElementChild;
    expect(taglineEl.tagName).toBe('P');
    expect(taglineEl).toHaveCssClass('slds-m-top_x-small');
    expect(taglineEl.textContent).toBe('Custom tagline');
  });

  it('should close when close button is clicked', () => {
    const fixture = createTestComponent();
    expect(fixture.componentInstance.openChange).not.toHaveBeenCalled();

    const button = getCloseButton(fixture.nativeElement);
    button.click();
    expect(fixture.componentInstance.openChange).toHaveBeenCalledWith(false);
  });

  it('should close when escape is triggered', () => {
    const fixture = createTestComponent();
    expect(fixture.componentInstance.openChange).not.toHaveBeenCalled();

    dispatchKeyEvent(fixture, By.directive(NglModal), 'keydown.esc');
    expect(fixture.componentInstance.openChange).toHaveBeenCalledWith(false);
  });

  it('should support custom assistive text for close button', () => {
    const fixture = createTestComponent(`
      <ngl-modal closeButtonAssistiveText="Custom close text"></ngl-modal>`);
    const button = getCloseButton(fixture.nativeElement).querySelector('.slds-assistive-text');
    expect(button.textContent).toBe('Custom close text');
  });

  it('should support footer', () => {
    const fixture = createTestComponent(`
      <ngl-modal open="true">
        <ng-template nglModalFooter>{{header}} in footer</ng-template>
      </ngl-modal>`);
    const footer = fixture.nativeElement.querySelector('.slds-modal__footer');
    expect(footer).toHaveText('Modal Header in footer');
    expect(footer).not.toHaveCssClass('slds-modal__footer_directional');

    fixture.componentInstance.header = 'Changed header';
    fixture.detectChanges();
    expect(footer).toHaveText('Changed header in footer');
  });

  it('should support directional footer', () => {
    const fixture = createTestComponent(`
      <ngl-modal open="true" [directional]="directional">
        <ng-template nglModalFooter></ng-template>
      </ngl-modal>`, false);
    fixture.componentInstance.directional = true;
    fixture.detectChanges();

    const footer = getFooter(fixture.nativeElement);
    expect(footer).toHaveCssClass('slds-modal__footer_directional');

    fixture.componentInstance.directional = false;
    fixture.detectChanges();
    expect(footer).not.toHaveCssClass('slds-modal__footer_directional');
  });

  it('should close when clicking outside and `dismissOnClickOutside` is true', () => {
    const fixture = createTestComponent(`
      <ngl-modal open="true" [header]="header" (openChange)="closeCallback($event)" [dismissOnClickOutside]="dismissOnClickOutside"></ngl-modal>`, false);
    fixture.componentInstance.dismissOnClickOutside = false;
    fixture.detectChanges();

    const header = getHeader(fixture.nativeElement);
    header.click();
    expect(fixture.componentInstance.closeCallback).not.toHaveBeenCalled();

    const modal = getModal(fixture.nativeElement);
    modal.click();
    expect(fixture.componentInstance.closeCallback).not.toHaveBeenCalled();

    fixture.componentInstance.dismissOnClickOutside = true;
    fixture.detectChanges();

    header.click();
    expect(fixture.componentInstance.closeCallback).not.toHaveBeenCalled();
    modal.click();
    expect(fixture.componentInstance.closeCallback).toHaveBeenCalled();
  });

  describe('should prevent body scrolling', () => {
    let fixture, containerEl;

    beforeEach(() => {
      fixture = createTestComponent(`
        <ngl-modal [open]="open" style="display:block; height: 1000px;">
          <div style="height: 100000000px">Loooooong body</div>
        </ngl-modal>
      `, false);

      containerEl = fixture.nativeElement;
      while (containerEl.tagName !== 'HTML') {
        containerEl = containerEl.parentNode;
      }

      containerEl.style.height = '500px';
    });

    afterEach(() => {
      containerEl.style.height = null;
    });

    it('based on input', () => {
      fixture.componentInstance.open = true;
      fixture.detectChanges();
      expect(containerEl).toHaveCssClass('cdk-global-scrollblock');

      fixture.componentInstance.open = false;
      fixture.detectChanges();
      expect(containerEl).not.toHaveCssClass('cdk-global-scrollblock');
    });

    it('in conjunction with "ngIf"', () => {
      fixture.componentInstance.open = true;
      fixture.detectChanges();
      expect(containerEl).toHaveCssClass('cdk-global-scrollblock');

      fixture.componentInstance.open = false;
      fixture.detectChanges();
      expect(containerEl).not.toHaveCssClass('cdk-global-scrollblock');
    });
  });
});

@Component({
  template: `
    <ngl-modal [header]="header" [open]="open" (openChange)="openChange($event)" [size]="size">
      <div class="slds-p-around_medium">Body content.</div>
    </ngl-modal>`,
})
export class TestComponent {
  dismissOnClickOutside: boolean;
  open = true;
  openChange = jasmine.createSpy('openChange');
  directional: boolean;
  header = 'Modal Header';
  closeCallback = jasmine.createSpy('close');
}
