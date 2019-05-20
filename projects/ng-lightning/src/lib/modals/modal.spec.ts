import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent, dispatchFixtureKeyEvent } from '../../../test/util';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { By } from '@angular/platform-browser';
import { NglModal } from './modal';
import { NglModalsModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getModal(): HTMLElement {
  return document.querySelector('.slds-modal');
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

function getBackdrop() {
  return document.querySelector('.slds-backdrop');
}

describe('`NglModal`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglModalsModule]}));

  it('should render correctly if open', () => {
    createTestComponent();
    const modal = getModal();
    expect(modal).toHaveCssClass('slds-fade-in-open');
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal.getAttribute('role')).toBe('dialog');

    const header = getHeader(modal);
    expect(header).toHaveText('Modal Header');
    expect(header.id).toEqual(modal.getAttribute('aria-labelledby'));

    const content = modal.querySelector('.slds-modal__content');
    expect(content.firstElementChild).toHaveCssClass('slds-p-around_medium');
    expect(content.textContent.trim()).toBe('Body content.');
    expect(content.id).toEqual(modal.getAttribute('aria-describedby'));

    const backdrop = getBackdrop();
    expect(backdrop).toHaveCssClass('slds-backdrop_open');
  });

  it('should render correctly if closed', () => {
    const fixture = createTestComponent();
    fixture.componentInstance.open = false;
    fixture.detectChanges();

    const modal = getModal();
    expect(modal).toBeFalsy();

    const backdrop = getBackdrop();
    expect(backdrop).toBeFalsy();
  });

  it('should render correctly without header', () => {
    const fixture = createTestComponent();
    const modal = getModal();
    const headerEl = modal.querySelector('.slds-modal__header');
    expect(headerEl).not.toHaveCssClass('slds-modal__header_empty');
    expect(getHeader(modal)).toBeTruthy();

    fixture.componentInstance.header = null;
    fixture.detectChanges();
    expect(headerEl).toHaveCssClass('slds-modal__header_empty');
    expect(getHeader(modal)).toBeFalsy();
  });

  it('should support custom header', () => {
    createTestComponent(`
      <ngl-modal>
        <ng-template nglModalHeader let-id="id"><span [id]="id" class="my-custom">Hello</span></ng-template>
        Body content.
      </ngl-modal>`);
    const modal = getModal();
    const headerEl = modal.querySelector('.slds-modal__header > .my-custom');
    expect(headerEl).toHaveText('Hello');
    expect(headerEl.id).toEqual(getModal().getAttribute('aria-labelledby'));
    expect(getHeader(modal)).toBeFalsy();
  });

  it('should support tagline in header', () => {
    createTestComponent(`
      <ngl-modal header="Custom header">
        <ng-template nglModalTagline><span>Custom tagline</span></ng-template>
      </ngl-modal>`);
    const modal = getModal();
    const headerEl = modal.querySelector('.slds-modal__header');
    const taglineEl = headerEl.lastElementChild;
    expect(taglineEl.tagName).toBe('P');
    expect(taglineEl).toHaveCssClass('slds-m-top_x-small');
    expect(taglineEl.textContent).toBe('Custom tagline');
  });

  it('should close when close button is clicked', () => {
    const fixture = createTestComponent();
    expect(fixture.componentInstance.openChange).not.toHaveBeenCalled();

    const modal = getModal();
    const button = getCloseButton(modal);
    button.click();
    expect(fixture.componentInstance.openChange).toHaveBeenCalledWith(false);
  });

  it('should close when escape is triggered', () => {
    const fixture = createTestComponent();
    expect(fixture.componentInstance.openChange).not.toHaveBeenCalled();

    dispatchFixtureKeyEvent(fixture, By.directive(NglModal), 'keydown.esc');
    expect(fixture.componentInstance.openChange).toHaveBeenCalledWith(false);
  });

  it('should support custom assistive text for close button', () => {
    createTestComponent(`
      <ngl-modal [(open)]="open" closeButtonAssistiveText="Custom close text"></ngl-modal>`);
    const modal = getModal();
    const button = getCloseButton(modal).querySelector('.slds-assistive-text');
    expect(button.textContent).toBe('Custom close text');
  });

  it('should support footer', () => {
    const fixture = createTestComponent(`
      <ngl-modal open="true">
        <ng-template nglModalFooter>{{header}} in footer</ng-template>
      </ngl-modal>`);
    const modal = getModal();
    const footer = modal.querySelector('.slds-modal__footer');
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

    const modal = getModal();
    const footer = getFooter(modal);
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

    const modal = getModal();
    const header = getHeader(modal);
    header.click();
    expect(fixture.componentInstance.closeCallback).not.toHaveBeenCalled();

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
        <div style="height: 110vh"></div>
        <ngl-modal [open]="open"></ngl-modal>
      `, false);

      containerEl = fixture.nativeElement;
      while (containerEl.tagName !== 'HTML') {
        containerEl = containerEl.parentNode;
      }
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

  it('return focus on previously focused element when closed', () => {
    const fixture = createTestComponent(`
        <div id="focused" tabindex="0"></div>
        <ngl-modal [open]="open"><button type="button"></button></ngl-modal>
      `, false);
    fixture.componentInstance.open = false;
    fixture.detectChanges();

    const el = fixture.nativeElement.firstElementChild;
    el.focus();
    expect(document.activeElement).toBe(el);

    fixture.componentInstance.open = true;
    fixture.detectChanges();
    expect(document.activeElement).not.toBe(el);

    fixture.componentInstance.open = false;
    fixture.detectChanges();
    expect(document.activeElement).toBe(el);
  });

  it('should not show close if output is not binded', () => {
    const fixture = createTestComponent(`<ngl-modal [open]="open"></ngl-modal>`);
    const modal = getModal();
    expect(fixture.componentInstance.openChange).not.toHaveBeenCalled();
    expect(getCloseButton(modal)).toBeFalsy();
  });

  it('should handle prompt correctly', () => {
    const fixture = createTestComponent(`
      <ngl-modal header="Header" open="true" [prompt]="prompt">
        <ng-template nglModalFooter></ng-template>
      </ngl-modal>`);
    fixture.componentInstance.prompt = 'error';
    fixture.detectChanges();
    const modal = getModal();
    expect(modal.getAttribute('role')).toBe('alertdialog');
    expect(modal).toHaveCssClass('slds-modal_prompt');

    const header = modal.querySelector('.slds-modal__header');
    expect(header).toHaveCssClass('slds-theme_error');

    const footer = getFooter(modal);
    expect(footer).toHaveCssClass('slds-theme_default');

    fixture.componentInstance.prompt = 'success';
    fixture.detectChanges();
    expect(header).not.toHaveCssClass('slds-theme_error');
    expect(header).toHaveCssClass('slds-theme_success');
  });

  it('should mark body content as a scrollable container', () => {
    const fixture = createTestComponent();
    const modal = getModal();
    const bodyContent = modal.querySelector('.slds-modal__content');
    const scrollable = fixture.debugElement.query(By.directive(CdkScrollable));

    expect(scrollable).toBeTruthy();
    expect(scrollable.nativeElement).toBe(bodyContent);
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
  prompt: string;
  header = 'Modal Header';
  closeCallback = jasmine.createSpy('close');
}
