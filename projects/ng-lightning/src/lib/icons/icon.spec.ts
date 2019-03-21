import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util';
import { NglIconsModule } from './module';
import { NglConfig } from '../config/config';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getElements(element: Element) {
  const assistiveEl = element.querySelector('.slds-assistive-text');

  return {
    host: <HTMLElement>element.firstElementChild,
    icon: <SVGSVGElement>element.querySelector('svg'),
    alternativeText: assistiveEl ? assistiveEl.textContent.trim() : null,
  };
}

describe('Icon Component', () => {

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TestComponent],
    imports: [NglIconsModule],
  }));

  it('should render all the icon elements', () => {
    const fixture = createTestComponent(`<ngl-icon iconName="warning" alternativeText="Help!"></ngl-icon>`);

    const { nativeElement } = fixture;
    const { host, icon, alternativeText } = getElements(nativeElement);
    const use = icon.querySelector('use');

    expect(host).not.toHaveCssClass('slds-icon_container');
    expect(icon).toHaveCssClass('slds-icon');
    expect(icon).not.toHaveCssClass('slds-icon-text-error');
    expect(icon).not.toHaveCssClass('slds-icon-text-warning');
    expect(icon).toHaveCssClass('slds-icon-text-default');
    expect(use.getAttribute('xlink:href')).toBe('/mypath/utility-sprite/svg/symbols.svg#warning');
    expect(alternativeText).toEqual('Help!');
  });

  it('should set variant based on input', () => {
    const fixture = createTestComponent(`<ngl-icon iconName="warning" [variant]="variant"></ngl-icon>`);
    const { nativeElement, componentInstance } = fixture;
    const { icon } = getElements(nativeElement);

    componentInstance.variant = 'default';
    fixture.detectChanges();
    expect(icon).toHaveCssClass('slds-icon-text-default');
    expect(icon).not.toHaveCssClass('slds-icon-text-error');
    expect(icon).not.toHaveCssClass('slds-icon-text-warning');

    componentInstance.variant = 'warning';
    fixture.detectChanges();
    expect(icon).toHaveCssClass('slds-icon-text-warning');
    expect(icon).not.toHaveCssClass('slds-icon-text-error');
    expect(icon).not.toHaveCssClass('slds-icon-text-default');

    componentInstance.variant = 'error';
    fixture.detectChanges();
    expect(icon).toHaveCssClass('slds-icon-text-error');
    expect(icon).not.toHaveCssClass('slds-icon-text-warning');
    expect(icon).not.toHaveCssClass('slds-icon-text-default');

    componentInstance.variant = null;
    fixture.detectChanges();
    expect(icon).not.toHaveCssClass('slds-icon-text-error');
    expect(icon).not.toHaveCssClass('slds-icon-text-warning');
    expect(icon).not.toHaveCssClass('slds-icon-text-default');
    expect(icon).not.toHaveCssClass('slds-icon-text-null');
  });

  it('should set size based on input', () => {
    const fixture = createTestComponent(`<ngl-icon iconName="warning" [size]="size"></ngl-icon>`);
    const { nativeElement, componentInstance } = fixture;
    const { icon } = getElements(nativeElement);
    expect(icon).toHaveCssClass('slds-icon_small');

    componentInstance.size = 'large';
    fixture.detectChanges();
    expect(icon).not.toHaveCssClass('slds-icon_small');
    expect(icon).toHaveCssClass('slds-icon_large');
  });

  it('should allow extra svg classes', () => {
    const fixture = createTestComponent(`<ngl-icon iconName="warning" [svgClass]="svgClass"></ngl-icon>`);
    const { nativeElement, componentInstance } = fixture;
    const { icon } = getElements(nativeElement);
    expect(icon).toHaveCssClass('anextra');
    expect(icon).toHaveCssClass('fancy');
    expect(icon).toHaveCssClass('one');

    componentInstance.svgClass = ['another', 'one'];
    fixture.detectChanges();
    expect(icon).not.toHaveCssClass('anextra');
    expect(icon).not.toHaveCssClass('fancy');
    expect(icon).toHaveCssClass('one');
    expect(icon).toHaveCssClass('another');

    componentInstance.svgClass = null;
    fixture.detectChanges();
    expect(icon).not.toHaveCssClass('one');
    expect(icon).not.toHaveCssClass('another');
    expect(icon).toHaveCssClass('slds-icon');
  });

  it('should support sprite category', () => {
    const fixture = createTestComponent(`<ngl-icon [iconName]="category + ':add'"></ngl-icon>`);
    const { nativeElement, componentInstance } = fixture;

    componentInstance.category = 'standard';
    fixture.detectChanges();

    const { host, icon } = getElements(nativeElement);
    const use = icon.querySelector('use');

    expect(host).toHaveCssClass('slds-icon_container');
    expect(host).toHaveCssClass('slds-icon-standard-add');
    expect(icon).not.toHaveCssClass('slds-icon-text-default');
    expect(use.getAttribute('xlink:href')).toBe('/mypath/standard-sprite/svg/symbols.svg#add');

    componentInstance.category = 'utility';
    fixture.detectChanges();
    expect(host).not.toHaveCssClass('slds-icon_container');
    expect(host).not.toHaveCssClass('slds-icon-standard-add');
    expect(icon).toHaveCssClass('slds-icon-text-default');
    expect(use.getAttribute('xlink:href')).toBe('/mypath/utility-sprite/svg/symbols.svg#add');
  });

  it('should handle icons with underscore', () => {
    const fixture = createTestComponent(`<ngl-icon [iconName]="category + ':' + icon"></ngl-icon>`);
    const { nativeElement, componentInstance } = fixture;

    componentInstance.category = 'standard';
    componentInstance.icon = 'work_order';
    fixture.detectChanges();

    const { host, icon } = getElements(nativeElement);
    const use = icon.querySelector('use');

    expect(host).toHaveCssClass('slds-icon-standard-work-order');
    expect(use.getAttribute('xlink:href')).toBe('/mypath/standard-sprite/svg/symbols.svg#work_order');
  });

  it('should handle custom icons', () => {
    const fixture = createTestComponent(`<ngl-icon iconName="custom:custom1"></ngl-icon>`);
    const { host, icon } = getElements(fixture.nativeElement);
    const use = icon.querySelector('use');
    expect(host).toHaveCssClass('slds-icon-custom-custom1');
    expect(use.getAttribute('xlink:href')).toBe('/mypath/custom-sprite/svg/symbols.svg#custom1');
  });
});


@Component({
  template: '',
})
export class TestComponent {
  size = 'small';
  icon: string;
  variant: string;
  category: string;
  svgClass: any = 'anextra fancy one';

  constructor(config: NglConfig) {
    config.update({ svgPath: '/mypath' });
  }
}
