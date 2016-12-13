import {TestBed, ComponentFixture}  from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent} from '../../test/util/helpers';
import {NglImagesModule} from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getElements(element: Element) {
  const caption = element.querySelector('figcaption');

  return {
    figure: element.querySelector('figure'),
    image: element.querySelector('img'),
    overlay: element.querySelector('[nglFigureOverlay]'),
    caption: caption,
    assistive: caption ? caption.querySelector('span').querySelector('span') : null,
    title: caption ? caption.querySelector('span') : null,
  };
}

describe('Figure Component', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglImagesModule]}));

  it('should render the figure element with default values', () => {
    const fixture = createTestComponent(`<ngl-figure>
    <img src="image1.jpg" alt="16x9" /></ngl-figure>`);
    const { nativeElement } = fixture;
    const { figure, caption } = getElements(nativeElement);
    expect(figure).toHaveCssClass('slds-image');
    expect(figure).toHaveCssClass('slds-image--card');
    expect(caption).toBeNull();
  });

  it('should render the figure element with title', () => {
    const fixture = createTestComponent(`<ngl-figure title="Figure">
    <img src="image1.jpg" alt="16x9"/></ngl-figure>`);
    const { nativeElement } = fixture;
    const { figure, caption, title, image, assistive } = getElements(nativeElement);
    expect(caption).toHaveCssClass('slds-image__title');
    expect(caption).toHaveCssClass('slds-image__title--card');
    expect(title).toHaveCssClass('slds-image__text');
    expect(title).toHaveCssClass('slds-truncate');
    const captionTextContent = title.textContent.trim();
    expect(captionTextContent).toEqual('Figure');
  });

  it('should set ratio based on input', () => {
    const fixture = createTestComponent(`<ngl-figure title="Figure">
    <div [nglCrop]="ratio">
    <img src="image1.jpg" alt="16x9"/>
    </div>
    </ngl-figure>`);
    const { nativeElement } = fixture;
    const { figure, caption, title, image, assistive } = getElements(nativeElement);
    const figureChild = figure.firstElementChild;
    expect(figureChild).toHaveCssClass('slds-image__crop');
    expect(figureChild).toHaveCssClass('slds-image__crop--4-by-3');
    expect(figureChild).not.toHaveCssClass('slds-image__crop--16-by-9');
    expect(figureChild).not.toHaveCssClass('slds-image__crop--s1-by-1');
  });
});


@Component({ template: `` })
export class TestComponent {
  ratio: string = '4-by-3';
}
