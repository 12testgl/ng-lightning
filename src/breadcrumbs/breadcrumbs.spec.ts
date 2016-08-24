import {TestBed, ComponentFixture} from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent} from '../../test/util/helpers';
import {NglBreadcrumbsModule} from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getBreadcrumbsLinks(element: HTMLElement): HTMLLinkElement[] {
 return [].slice.call(element.querySelectorAll('a'));
}

function getAssistiveText(element: HTMLElement): string {
  const el = <HTMLElement>element.querySelector('nav');
  return el.getAttribute('aria-label');
}

describe('Breadcrumbs Component', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglBreadcrumbsModule]}));

  it('should have anchor across the path', () => {
    const fixture = createTestComponent();
    const anchors: HTMLLinkElement[] = getBreadcrumbsLinks(fixture.nativeElement);

    fixture.detectChanges();
    expect(anchors.map(el => el.getAttribute('href'))).toEqual(['/here', '/there']);
    expect(anchors.map(el => el.textContent)).toEqual(['Here I am!', 'There I was!']);
    anchors.forEach(el => expect(el.parentElement).toHaveCssClass('slds-list__item'));
  });

  it('should render assistive text correctly', () => {
    const fixture = createTestComponent(`<ngl-breadcrumbs [assistiveText]="text"></ngl-breadcrumbs>`);
    expect(getAssistiveText(fixture.nativeElement)).toEqual('Here you are:');
  });
});


@Component({
  template: `
    <ngl-breadcrumbs [assistiveText]="text">
      <ngl-breadcrumb href="/here">Here I am!</ngl-breadcrumb>
      <ngl-breadcrumb href="/there">There I was!</ngl-breadcrumb>
    </ngl-breadcrumbs>`,
})
export class TestComponent {
  text: string = 'Here you are:';
}
