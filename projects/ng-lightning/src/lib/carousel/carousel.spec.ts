import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent, selectElements, dispatchKeyboardEvent } from '../../../test/util';
import { NglCarouselModule } from './module';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getPlayButton(element: HTMLElement): HTMLInputElement {
  return element.querySelector('.slds-carousel__autoplay > button');
}

function getImages(element: HTMLElement): HTMLElement[] {
  return selectElements(element, '.slds-carousel__panel');
}

function getIndicators(element: HTMLElement): HTMLElement[] {
  return selectElements(element, '.slds-carousel__indicator-action');
}

function expectActive(element: HTMLElement, index: number) {

  const panelsEl = element.querySelector('.slds-carousel__panels') as HTMLDivElement;
  expect(panelsEl.style.transform).toEqual(`translateX(${-index * 100}%)`);

  const images = getImages(element);
  images.forEach((image, i) => {
    expect(image.getAttribute('aria-hidden')).toEqual(`${index !== i}`);
  });

  const indicators = getIndicators(element);
  indicators.forEach((indicator, i) => {
    expect(indicator.getAttribute('aria-selected')).toEqual(`${index === i}`);
    expect(indicator.getAttribute('tabindex')).toEqual(`${index === i ? 0 : -1}`);
  });
}

describe('`NglCarousel`', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglCarouselModule] }));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const { nativeElement } = fixture;

    expect(nativeElement.firstElementChild).toHaveCssClass('slds-carousel');

    expect(getPlayButton(nativeElement)).toBeTruthy();

    const images = getImages(nativeElement);
    const indicators = getIndicators(nativeElement);
    expect(images.length).toBe(3);
    expect(indicators.length).toBe(3);
    for (let i = 0; i < 3; i++) {
      expect(images[i].getAttribute('aria-labelledby')).toEqual(indicators[i].getAttribute('id'));
      expect(images[i].getAttribute('id')).toEqual(indicators[i].getAttribute('aria-controls'));
    }
  });

  it('should display activate image based on input', () => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    expectActive(nativeElement, 0);

    componentInstance.active = 1;
    fixture.detectChanges();
    expectActive(nativeElement, 1);
  });

  it('should display next image after default time', fakeAsync(() => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    expectActive(nativeElement, 0);
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();
    tick(5000);
    expect(componentInstance.onActiveChange).toHaveBeenCalledWith(1);
  }));

  it('should activate with keyboard', () => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    const indicatorsEl = nativeElement.querySelector('.slds-carousel__indicators');

    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();
    dispatchKeyboardEvent(indicatorsEl, 'keydown', LEFT_ARROW);
    expect(componentInstance.onActiveChange).toHaveBeenCalledWith(2);

    dispatchKeyboardEvent(indicatorsEl, 'keydown', RIGHT_ARROW);
    expect(componentInstance.onActiveChange).toHaveBeenCalledWith(1);
  });

  it('should activate by clicking indicators', () => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    const indicators = getIndicators(nativeElement);

    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();

    // Do not notify for clicking already active indicator
    indicators[0].click();
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();

    indicators[2].click();
    expect(componentInstance.onActiveChange).toHaveBeenCalledWith(2);

    indicators[1].click();
    expect(componentInstance.onActiveChange).toHaveBeenCalledWith(1);
  });

  it('should not cycle images if no `autoRefresh`', () => {
    const fixture = createTestComponent(`
      <ngl-carousel [active]="active" (activeChange)="onActiveChange($event)" autoRefresh="false">
        <ngl-carousel-image *ngFor="let i of images" [src]="i.src" [header]="i.header" [description]="i.desc" [alternativeText]="i.alt"></ngl-carousel-image>
      </ngl-carousel>
    `);
    const { componentInstance, nativeElement } = fixture;

    const indicatorsEl = nativeElement.querySelector('.slds-carousel__indicators');

    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();
    dispatchKeyboardEvent(indicatorsEl, 'keydown', LEFT_ARROW);
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();

    componentInstance.active = 2;
    fixture.detectChanges();
    dispatchKeyboardEvent(indicatorsEl, 'keydown', RIGHT_ARROW);
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();
  });

  it('should not display next images if no `autoScroll`', fakeAsync(() => {
    const fixture = createTestComponent(`
      <ngl-carousel [active]="active" (activeChange)="onActiveChange($event)" autoScroll="false">
        <ngl-carousel-image *ngFor="let i of images" [src]="i.src" [header]="i.header" [description]="i.desc" [alternativeText]="i.alt"></ngl-carousel-image>
      </ngl-carousel>
    `);
    const { componentInstance, nativeElement } = fixture;

    expectActive(nativeElement, 0);
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();
    tick(5000);
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();
  }));

  it('should reset timer when active changes', fakeAsync(() => {
    const fixture = createTestComponent();
    const { componentInstance } = fixture;

    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();
    tick(2000);

    componentInstance.active = 1;
    fixture.detectChanges();
    tick(3000);
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();

    tick(2000);
    expect(componentInstance.onActiveChange).toHaveBeenCalledWith(2);
  }));

  it('should reset timer when duration changes', fakeAsync(() => {
    const fixture = createTestComponent(`
      <ngl-carousel [active]="active" (activeChange)="onActiveChange($event)" [scrollDuration]="duration">
        <ngl-carousel-image *ngFor="let i of images" [src]="i.src" [header]="i.header" [description]="i.desc" [alternativeText]="i.alt"></ngl-carousel-image>
      </ngl-carousel>
    `, false);
    const { componentInstance } = fixture;
    componentInstance.duration = 5000;
    fixture.detectChanges();

    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();
    tick(2000);

    componentInstance.duration = 10;
    fixture.detectChanges();
    tick(3000);
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();

    tick(7000);
    expect(componentInstance.onActiveChange).toHaveBeenCalledWith(1);
  }));

  it('should start/pause auto-play using button', fakeAsync(() => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    const button = getPlayButton(nativeElement);
    expect(button.getAttribute('aria-pressed')).toBe('false');
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();
    tick(2000);

    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-pressed')).toBe('true');
    tick(3000);
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();

    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-pressed')).toBe('false');
    tick(2000);
    expect(componentInstance.onActiveChange).not.toHaveBeenCalled();

    tick(3000);
    expect(componentInstance.onActiveChange).toHaveBeenCalledWith(1);
  }));

  it('should move focus to active indicator', () => {
    const fixture = createTestComponent();
    const { componentInstance, nativeElement } = fixture;

    const indicators = getIndicators(nativeElement);
    indicators[0].focus();
    expect(document.activeElement).toBe(indicators[0]);

    componentInstance.active = 1;
    fixture.detectChanges();
    expect(document.activeElement).toBe(indicators[1]);
  });

});

@Component({
  template: `
    <ngl-carousel [active]="active" (activeChange)="onActiveChange($event)">
      <ngl-carousel-image *ngFor="let i of images" [src]="i.src" [header]="i.header" [description]="i.desc" [alternativeText]="i.alt"></ngl-carousel-image>
    </ngl-carousel>
  `,
})
export class TestComponent {
  active: number;
  autoScroll: boolean;
  autoRefresh: boolean;
  duration: number;

  images = [
    { src: 'assets/images/carousel/carousel-01.jpg', header: 'First', desc: 'First description', alt: 'Alt First' },
    { src: 'assets/images/carousel/carousel-02.jpg', header: 'Second', desc: 'Second description', alt: 'Alt Second' },
    { src: 'assets/images/carousel/carousel-03.jpg', header: 'Third', desc: 'Third description', alt: 'Alt Third' },
  ];

  onActiveChange: jasmine.Spy = jasmine.createSpy();
}
