import {TestBed, ComponentFixture}  from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent} from '../../test/util/helpers';
import {NglImagesModule} from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getAvatarElement(element: Element): HTMLElement {
  return <HTMLElement>element.firstElementChild;
}

function getImageElement(element: Element): HTMLImageElement {
  return <HTMLImageElement>element.querySelector('img');
}

describe('Avatar Component', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglImagesModule]}));

  it('should render the avatar element with default classes', () => {
    const fixture = createTestComponent(`<ngl-avatar src="image1.jpg" class="custom-class"></ngl-avatar>`);
    const avatar = getAvatarElement(fixture.nativeElement);
    const image = getImageElement(avatar);
    expect(image.getAttribute('src')).toBe('image1.jpg');
    expect(avatar).toHaveCssClass('slds-avatar_rectangle');
    expect(avatar).toHaveCssClass('slds-avatar_medium');
    expect(avatar).toHaveCssClass('slds-avatar');
    expect(avatar).toHaveCssClass('custom-class');
  });

  it('should change the variation of the avatar element based on input', () => {
    const fixture = createTestComponent(`<ngl-avatar [variant]="variant" src="image1.jpg" [ngClass]="{'custom-class': true}"></ngl-avatar>`);
    const avatar = getAvatarElement(fixture.nativeElement);

    expect(avatar).toHaveCssClass('slds-avatar_circle');
    expect(avatar).toHaveCssClass('custom-class');

    fixture.componentInstance.variant = 'rectangle';
    fixture.detectChanges();
    expect(avatar).toHaveCssClass('slds-avatar_rectangle');
    expect(avatar).not.toHaveCssClass('slds-avatar_circle');
    expect(avatar).toHaveCssClass('custom-class');
  });

  it('should change the size of the avatar element based on input', () => {
    const fixture = createTestComponent(`<ngl-avatar [size]="size" src="image1.jpg"></ngl-avatar>`);
    const avatar = getAvatarElement(fixture.nativeElement);

    expect(avatar).toHaveCssClass('slds-avatar_small');
    expect(avatar).not.toHaveCssClass('slds-avatar_large');
    expect(avatar).not.toHaveCssClass('slds-avatar_x-small');
    expect(avatar).not.toHaveCssClass('slds-avatar_medium');

    fixture.componentInstance.size = 'large';
    fixture.detectChanges();
    expect(avatar).toHaveCssClass('slds-avatar_large');
    expect(avatar).not.toHaveCssClass('slds-avatar_small');
  });

  it('should render the avatar element with assistive text', () => {
    const fixture = createTestComponent(`<ngl-avatar alternativeText="assistive text" src="image1.jpg"></ngl-avatar>`);
    const avatar = getAvatarElement(fixture.nativeElement);
    const image = getImageElement(avatar);
    expect(image.getAttribute('alt')).toEqual('assistive text');
  });
});


@Component({ template: `` })
export class TestComponent {
  variant: string = 'circle';
  size: string = 'small';
}
