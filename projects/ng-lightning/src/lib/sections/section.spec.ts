import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util/helpers';
import { NglSectionsModule } from './module';

const createTestComponent = (html?: string) =>
  createGenericTestComponent(TestComponent, html) as ComponentFixture<TestComponent>;

function getSectionEl(element: HTMLElement) {
  return element.firstElementChild;
}
function getTitleEl(element: HTMLElement) {
  return <HTMLDivElement>element.querySelector('.slds-section__title');
}
function getTitleActionEl(element: HTMLElement) {
  return <HTMLDivElement>element.querySelector('.slds-section__title-action');
}
function getContentEl(element: HTMLElement) {
  return <HTMLDivElement>element.querySelector('.slds-section__content');
}
function getArrowEl(element: HTMLElement) {
  return <HTMLDivElement>element.querySelector('svg.slds-section__title-action-icon');
}

describe('Expandable Section Component', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglSectionsModule] }));

  describe('collapsable', () => {
    it('should render correctly', () => {
      const fixture = createTestComponent();
      const { nativeElement } = fixture;
      const sectionEl = getSectionEl(nativeElement);
      const titleActionEl = getTitleActionEl(nativeElement);
      const contentEl = getContentEl(nativeElement);

      fixture.detectChanges();
      expect(sectionEl).toHaveCssClass('slds-section');
      expect(sectionEl).not.toHaveCssClass('slds-is-open');
      expect(titleActionEl.textContent.trim()).toBe('Section title');
      expect(titleActionEl.getAttribute('aria-controls')).toBe(contentEl.getAttribute('id'));
      expect(getContentEl(nativeElement).textContent).toBe('Body');
      expect(getArrowEl(nativeElement)).not.toBeNull();
    });

    it('should toggle based on input', () => {
      const fixture = createTestComponent();
      const { nativeElement, componentInstance } = fixture;
      const sectionEl = getSectionEl(nativeElement);
      const titleActionEl = getTitleActionEl(nativeElement);
      const contentEl = getContentEl(nativeElement);

      componentInstance.open = true;
      fixture.detectChanges();
      expect(sectionEl).toHaveCssClass('slds-is-open');
      expect(titleActionEl.getAttribute('aria-expanded')).toBe('true');
      expect(contentEl.getAttribute('aria-hidden')).toBe('false');

      componentInstance.open = false;
      fixture.detectChanges();
      expect(sectionEl).not.toHaveCssClass('slds-is-open');
      expect(titleActionEl.getAttribute('aria-expanded')).toBe('false');
      expect(contentEl.getAttribute('aria-hidden')).toBe('true');
    });

    it('should toggle when clicking on title', () => {
      const fixture = createTestComponent();
      const sectionEl = getSectionEl(fixture.nativeElement);
      const titleEl = getTitleActionEl(fixture.nativeElement);

      titleEl.click();
      fixture.detectChanges();
      expect(sectionEl).toHaveCssClass('slds-is-open');

      titleEl.click();
      fixture.detectChanges();
      expect(sectionEl).not.toHaveCssClass('slds-is-open');
    });
  });

  describe('non collapsable', () => {
    it('should render correctly', () => {
      const fixture = createTestComponent();
      const { nativeElement, componentInstance } = fixture;

      componentInstance.collapsable = false;
      fixture.detectChanges();
      expect(getArrowEl(nativeElement)).toBeNull();
      expect(getTitleEl(nativeElement)).toHaveCssClass('slds-theme_shade');
      expect(getTitleActionEl(nativeElement)).toBeNull();
      expect(getContentEl(nativeElement).getAttribute('aria-hidden')).toBe('false');
      expect(getContentEl(nativeElement).getAttribute('id')).toBeNull();
    });

    it('should force body expansion', () => {
      const fixture = createTestComponent();
      const { nativeElement, componentInstance } = fixture;
      const sectionEl = getSectionEl(nativeElement);

      componentInstance.open = false;
      componentInstance.collapsable = false;
      fixture.detectChanges();
      expect(sectionEl).toHaveCssClass('slds-is-open');
    });

    it('should not toggle when clicking on title', () => {
      const fixture = createTestComponent();
      const { nativeElement, componentInstance } = fixture;
      const sectionEl = getSectionEl(nativeElement);
      const titleEl = getTitleActionEl(fixture.nativeElement);

      componentInstance.collapsable = false;
      fixture.detectChanges();
      expect(sectionEl).toHaveCssClass('slds-is-open');

      titleEl.click();
      fixture.detectChanges();
      expect(sectionEl).toHaveCssClass('slds-is-open');
    });
  });
});

@Component({
  template: `<ngl-expandable-section [(open)]="open" [collapsable]="collapsable" title="Section title">Body</ngl-expandable-section>`,
})
export class TestComponent {
  open = false;
  collapsable = true;
}
