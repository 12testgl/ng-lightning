import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent, selectElements } from '../../../test/util';
import { NglAccordionModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getAccordionElement(element: Element): HTMLElement {
  return <HTMLElement>element.firstElementChild;
}

function getAccordionSections(element: HTMLElement): HTMLElement[] {
  return selectElements(element, 'section.slds-accordion__section');
}

function getAccordionSectionButton(element: HTMLElement): HTMLButtonElement {
  return element.querySelector('button.slds-accordion__summary-action');
}

function getAccordionSectionContent(element: HTMLElement): HTMLButtonElement {
  return element.querySelector('div.slds-accordion__content');
}

function expectOpen(element, expected: string[]) {
  const sections = getAccordionSections(element);
  sections.forEach((section, index) => {
    const isExpanded = expected[index] === '+';

    if (isExpanded) {
      expect(section).toHaveCssClass('slds-is-open');
    } else {
      expect(section).not.toHaveCssClass('slds-is-open');
    }

    const button = getAccordionSectionButton(section);
    const contentEl = getAccordionSectionContent(section);

    expect(button.getAttribute('aria-expanded')).toEqual(`${isExpanded}`);
    expect(contentEl.getAttribute('aria-hidden')).toEqual(`${!isExpanded}`);
    expect(contentEl.textContent).toEqual(isExpanded ? `Content ${index}` : '');
  });
}

describe('Accordion Component', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglAccordionModule]}));

  it('should render correctly headers and aria attributes', () => {
    const fixture = createTestComponent();
    const accordion = getAccordionElement(fixture.nativeElement);
    expect(accordion).toHaveCssClass('slds-accordion');

    const sections = getAccordionSections(accordion);
    sections.forEach((section, i) => {
      expect(section.querySelector('.slds-accordion__summary-heading span.slds-truncate').textContent).toEqual(`Title ${i}`);

      const button = getAccordionSectionButton(section);
      const contentEl = getAccordionSectionContent(section);
      expect(button.getAttribute('aria-controls')).toEqual(contentEl.id);
    });
  });

  it('should render correctly open and closed sections', () => {
    const fixture = createTestComponent();
    expectOpen(fixture.nativeElement, ['', '+', '']);
  });

  it('should update open and closed sections based on input', () => {
    const fixture = createTestComponent();

    fixture.componentInstance.active = 'n2';
    fixture.detectChanges();
    expectOpen(fixture.nativeElement, ['', '', '+']);

    fixture.componentInstance.active = null;
    fixture.detectChanges();
    expectOpen(fixture.nativeElement, ['', '', '']);

    fixture.componentInstance.active = 'n0';
    fixture.detectChanges();
    expectOpen(fixture.nativeElement, ['+', '', '']);
  });

  it('should emit event when toggling section', () => {
    const fixture = createTestComponent();
    const buttons = getAccordionSections(fixture.nativeElement).map(s => getAccordionSectionButton(s));

    // Toggle closed section
    buttons[0].click();
    expect(fixture.componentInstance.change).toHaveBeenCalledWith('n0');

    // Toggle open section
    buttons[1].click();
    expect(fixture.componentInstance.change).toHaveBeenCalledWith(null);
  });

  it('should support template header and context', () => {
    const fixture = createTestComponent(`
      <ul ngl-accordion [activeName]="active" (activeNameChange)="change($event)">
        <ng-template nglAccordionSection name="n0" [label]="custom" [labelContext]="{ id: 0 }">Content 0</ng-template>
        <ng-template nglAccordionSection name="n1" [label]="custom" [labelContext]="{ id: 1 }">Content 1</ng-template>
      </ul>
      <ng-template #custom let-data>Custom header {{ data.id }}</ng-template>
    `);

    const sections = getAccordionSections(fixture.nativeElement);
    sections.forEach((section, i) => {
      expect(section.querySelector('.slds-accordion__summary-heading span.slds-truncate').textContent).toEqual(`Custom header ${i}`);
    });
  });

  describe('multipe', () => {
    const multipleHTML = `
      <ul ngl-accordion [activeName]="active" (activeNameChange)="change($event)" multiple>
      <ng-template nglAccordionSection name="n0" label="Title 0">Content 0</ng-template>
      <ng-template nglAccordionSection name="n1" label="Title 1">Content 1</ng-template>
      <ng-template nglAccordionSection name="n2" label="Title 2">Content 2</ng-template>
      </ul>
    `;

    it('should support more than one open sections', () => {
      const fixture = createTestComponent(multipleHTML, false);

      fixture.componentInstance.active = ['n0', 'n2'];
      fixture.detectChanges();
      expectOpen(fixture.nativeElement, ['+', '', '+']);

      fixture.componentInstance.active = null;
      fixture.detectChanges();
      expectOpen(fixture.nativeElement, ['', '', '']);

      fixture.componentInstance.active = ['n1'];
      fixture.detectChanges();
      expectOpen(fixture.nativeElement, ['', '+', '']);
    });

    it('should emit event when toggling section on multiple', () => {
      const fixture = createTestComponent(multipleHTML, false);
      fixture.componentInstance.active = ['n1'];
      fixture.detectChanges();

      const buttons = getAccordionSections(fixture.nativeElement).map(s => getAccordionSectionButton(s));

      // Toggle closed section
      buttons[0].click();
      expect(fixture.componentInstance.change).toHaveBeenCalledWith(['n1', 'n0']);

      // Toggle open section
      buttons[1].click();
      expect(fixture.componentInstance.change).toHaveBeenCalledWith([]);
    });
  });
});


@Component({ template: `
  <ul ngl-accordion [activeName]="active" (activeNameChange)="change($event)">
    <ng-template nglAccordionSection name="n0" label="Title 0">Content 0</ng-template>
    <ng-template nglAccordionSection name="n1" label="Title 1">Content 1</ng-template>
    <ng-template nglAccordionSection name="n2" label="Title 2">Content 2</ng-template>
  </ul>
`})
export class TestComponent {
  active: string | string[] = 'n1';
  change = jasmine.createSpy();
}
