import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent, selectElements, dispatchKeyEvent } from '../../../test/util/helpers';
import { NglTabsModule } from './module';
import { By } from '@angular/platform-browser';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getTabsContainer(element: Element): HTMLElement {
  return <HTMLElement>element.firstElementChild;
}

function getTabsElement(element: Element): HTMLUListElement {
  return <HTMLUListElement>element.querySelector('ul');
}

function getTabHeaders(element: HTMLElement): HTMLElement[] {
  return selectElements(element, 'li > a');
}

function getTabContent(element: HTMLElement): string {
  return element.querySelector('.slds-tabs_default__content').textContent;
}

function expectHeaders(element: HTMLElement, expected: string[]) {
  const headers = getTabHeaders(element);
  expect(headers.map((h: HTMLElement) => h.innerHTML.replace(/<!--[\s\S]*?-->/g, '').trim())).toEqual(expected);
}

describe('Tabs Component', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglTabsModule]}));

  it('should render the tabs container', () => {
    const fixture = createTestComponent();
    const host = getTabsContainer(fixture.nativeElement);
    const tabs = getTabsElement(host);

    expect(host).toHaveCssClass('slds-tabs_default');
    expect(tabs.tagName).toBe('UL');
    expect(tabs).toHaveCssClass('slds-tabs_default__nav');
  });

  it('should render the tab headers', () => {
    const fixture = createTestComponent();
    expectHeaders(fixture.nativeElement, ['First', 'Second',  'Third tab', 'Fourth tab']);
  });

  it('should render tab headers based on template', () => {
    const fixture = createTestComponent(`<ngl-tabset [(selected)]="selectedTab">
          <ng-template #h><b>My header</b></ng-template>
          <ng-template ngl-tab [label]="h"></ng-template>
          <ngl-tab label="Simple">
            <ng-template ngl-tab-content></ng-template>
          </ngl-tab>
          <ngl-tab>
            <ng-template ngl-tab-label><i>Another</i> header</ng-template>
            <ng-template ngl-tab-content></ng-template>
          </ngl-tab>
        </ngl-tabset>`);
    expectHeaders(fixture.nativeElement, ['<b>My header</b>', 'Simple', '<i>Another</i> header']);
  });

  it('should activate tab based on id', () => {
    const fixture = createTestComponent();
    expect(getTabContent(fixture.nativeElement)).toBe('Tab 2');
  });

  it('should request tab activation on header click', () => {
    const fixture = createTestComponent();

    const headers = getTabHeaders(fixture.nativeElement);
    headers[2].click();
    fixture.detectChanges();
    expect(getTabContent(fixture.nativeElement)).toBe('Tab 3');

    headers[3].click();
    fixture.detectChanges();
    expect(getTabContent(fixture.nativeElement)).toBe('Tab 4');
  });

  it('should activate tab based on keyboard', () => {
    const fixture = createTestComponent();
    const predicate = By.css('ul[role=tablist]');

    dispatchKeyEvent(fixture, predicate, `keydown.ArrowLeft`);
    fixture.detectChanges();
    expect(getTabContent(fixture.nativeElement)).toBe('Tab 1');

    dispatchKeyEvent(fixture, predicate, `keydown.ArrowRight`);
    fixture.detectChanges();
    expect(getTabContent(fixture.nativeElement)).toBe('Tab 2');

    dispatchKeyEvent(fixture, predicate, `keydown.ArrowRight`);
    fixture.detectChanges();
    expect(getTabContent(fixture.nativeElement)).toBe('Tab 3');
  });

  it('should call activate/deactivate methods accordingly', () => {
    const fixture = createTestComponent();
    const { componentInstance } = fixture;

    expect(componentInstance.activate).not.toHaveBeenCalled();
    componentInstance.selectedTab = 'three';
    fixture.detectChanges();
    expect(componentInstance.activate).toHaveBeenCalledWith(true);

    componentInstance.selectedTab = 3; // index based
    fixture.detectChanges();
    expect(componentInstance.activate).toHaveBeenCalledWith(false);
    expect(componentInstance.activate).toHaveBeenCalledWith(4, true);

    componentInstance.selectedTab = 'two';
    fixture.detectChanges();
    expect(componentInstance.activate).toHaveBeenCalledWith(4, false);
  });

  it('should allow activating tab from outside', () => {
    const fixture = createTestComponent(`
      <ngl-tabset [selected]="selectedTab" (selectedChange)="change($event)">
        <ng-template ngl-tab></ng-template>
        <ng-template ngl-tab id="another" #anotherTab="nglTab">Another tab</ng-template>
      </ngl-tabset>
      <button (click)="selectedTab = anotherTab"></button>
    `);
    const button = fixture.nativeElement.querySelector('button');

    expect(getTabContent(fixture.nativeElement)).not.toBe('Another tab');
    button.click();
    fixture.detectChanges();
    expect(getTabContent(fixture.nativeElement)).toBe('Another tab');
  });

  it('should render scoped tabs correctly', () => {
    const fixture = createTestComponent(`
      <ngl-tabset variant="scoped">
        <ng-template ngl-tab></ng-template>
      </ngl-tabset>
    `);

    const host = getTabsContainer(fixture.nativeElement);
    const tabs = getTabsElement(host);

    expect(host).toHaveCssClass('slds-tabs_scoped');
    expect(host).not.toHaveCssClass('slds-tabs_default');
    expect(tabs).toHaveCssClass('slds-tabs_scoped__nav');
  });

});

@Component({
  template: `
    <ngl-tabset [selected]="selectedTab" (selectedChange)="change($event)">
      <ng-template ngl-tab label="First">Tab 1</ng-template>
      <ng-template ngl-tab id="two" label="Second">Tab 2</ng-template>
      <ng-template ngl-tab id="three" label="Third tab" (activate)="activate(true)"
            (deactivate)="activate(false)">Tab 3</ng-template>
      <ngl-tab (activate)="activate(4, true)" (deactivate)="activate(4, false)">
        <ng-template ngl-tab-label>Fourth tab</ng-template>
        <ng-template ngl-tab-content>Tab 4</ng-template>
      </ngl-tab>
    </ngl-tabset>
  `,
})
export class TestComponent {
  selectedTab: string | number = 'two';
  titleCaps: string | boolean = false;
  change = jasmine.createSpy('selectedChange').and.callFake(($event: any) => {
    this.selectedTab = $event;
  });
  activate = jasmine.createSpy('activate');
}
