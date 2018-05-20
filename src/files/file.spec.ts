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
    expect(file).toHaveCssClass('slds-file_card');
  });

  it('should render the caption element based on title', () => {
    const fixture = createTestComponent(`<ngl-file [title]="title"></ngl-file>`);
    const caption = getFileCaptionElement(fixture.nativeElement);
    const firstElementChild = <HTMLSpanElement>caption.firstElementChild;
    expect(caption).toHaveCssClass('slds-file__title');
    expect(caption).toHaveCssClass('slds-file__title_card');
    expect(firstElementChild).toHaveCssClass('slds-media');
    expect(firstElementChild).toHaveCssClass('slds-media_small');
    expect(firstElementChild).toHaveCssClass('slds-media_center');

    expect((<HTMLSpanElement>firstElementChild.querySelector('.slds-file__text')).title).toBe('Image title');
  expect(caption.textContent).toBe('Image title');

    fixture.componentInstance.title = '';
    fixture.detectChanges();
    expect(getFileCaptionElement(fixture.nativeElement)).toBeFalsy();
  });

  it('should render the icon next to title', () => {
    const fixture = createTestComponent(`<ngl-file [title]="title" [icon]="icon"></ngl-file>`);
    const caption = getFileCaptionElement(fixture.nativeElement);

    let icon = caption.querySelector('svg');
    expect(icon).not.toBeNull();

    fixture.componentInstance.icon = '';
    fixture.detectChanges();
    icon = caption.querySelector('svg');
    expect(icon).toBeNull();
  });

  it('should display caption as overlay', () => {
    const fixture = createTestComponent(`<ngl-file [title]="title" [overlay]="overlay"></ngl-file>`);
    const caption = getFileCaptionElement(fixture.nativeElement);

    expect(caption).toHaveCssClass('slds-file__title');
    expect(caption).toHaveCssClass('slds-file__title_overlay');
    expect(caption).toHaveCssClass('slds-align_absolute-center');
    expect(caption).toHaveCssClass('slds-text-heading_large');
    expect(caption).not.toHaveCssClass('slds-file__title_card');

    fixture.componentInstance.overlay = false;
    fixture.detectChanges();
    expect(caption).toHaveCssClass('slds-file__title');
    expect(caption).not.toHaveCssClass('slds-file__title_overlay');
    expect(caption).not.toHaveCssClass('slds-align_absolute-center');
    expect(caption).not.toHaveCssClass('slds-text-heading_large');
    expect(caption).toHaveCssClass('slds-file__title_card');
  });

  it('should support actions in title', () => {
    const fixture = createTestComponent(`
      <ngl-file title="File.pdf">
        <ng-template nglFileActions><span>Action</span></ng-template>
      </ngl-file>
    `);
    const actionsEl = fixture.nativeElement.querySelector('.slds-file__actions-menu');
    const actionEl = actionsEl.lastElementChild;
    expect(actionsEl).not.toBeNull();
    expect(actionEl.textContent).toBe('Action');
  });
});


@Component({ template: `<ngl-file></ngl-file>` })
export class TestComponent {
  ratio: string = '4-by-3';
  title: string = 'Image title';
  icon: string = 'doctype:link';
  overlay: boolean = true;
}
