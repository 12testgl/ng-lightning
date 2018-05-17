import {TestBed, ComponentFixture}  from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent} from '../../test/util/helpers';
import {NglFilesModule} from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getFileElement(element: HTMLElement) {
  return element.firstElementChild;
}

function getFileCaptionElement(element: HTMLElement) {
  return element.querySelector('figcaption');
}

describe('File Component', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglFilesModule]}));

  it('should render the figure element with default values', () => {
    const fixture = createTestComponent();
    const file = getFileElement(fixture.nativeElement);
    expect(file).toHaveCssClass('slds-file');
    expect(file).toHaveCssClass('slds-file--card');
  });

  it('should render the caption element based on title', () => {
    const fixture = createTestComponent(`<figure nglFile [nglTitle]="title"></figure>`);
    const caption = getFileCaptionElement(fixture.nativeElement);
    expect(caption).toHaveCssClass('slds-file__title');
    expect(caption).toHaveCssClass('slds-file__title--card');

    expect((<HTMLSpanElement>caption.firstElementChild).title).toBe('Image title');
    expect(caption.textContent).toBe('Image title');

    fixture.componentInstance.title = '';
    fixture.detectChanges();
    expect(getFileCaptionElement(fixture.nativeElement)).toBeFalsy();
  });
});


@Component({ template: `<figure nglFile></figure>` })
export class TestComponent {
  ratio: string = '4-by-3';
  title: string = 'Image title';
}
