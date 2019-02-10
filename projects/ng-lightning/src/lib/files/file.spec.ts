import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util/helpers';
import { NglFilesModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getFileElement(element: HTMLElement) {
  return element.firstElementChild as HTMLElement;
}

function getFigureCaptionElement(element: HTMLElement) {
  return element.querySelector('figcaption');
}

describe('File Component', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglFilesModule]}));

  it('should render the figure element with default values', () => {
    const fixture = createTestComponent();
    const file = getFileElement(fixture.nativeElement);
    expect(file).toHaveCssClass('slds-file');
    expect(file).toHaveCssClass('slds-file_card');
    expect(getFigureCaptionElement(file)).toBeNull();
  });

  it('should render the caption element based on input', () => {
    const fixture = createTestComponent(`<ngl-file [text]="text"></ngl-file>`);
    const file = getFileElement(fixture.nativeElement);
    expect(file).toHaveCssClass('slds-has-title');

    const caption = getFigureCaptionElement(file);
    const textEl = <HTMLSpanElement>caption.querySelector('.slds-file__text');
    expect(textEl.title).toBe('File title');
    expect(textEl.textContent).toBe('File title');

    fixture.componentInstance.text = '';
    fixture.detectChanges();
    expect(file).not.toHaveCssClass('slds-has-title');
  });
});


@Component({ template: `<ngl-file></ngl-file>` })
export class TestComponent {
  text = 'File title';
}
