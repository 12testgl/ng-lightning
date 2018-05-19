import {TestBed, ComponentFixture}  from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent} from '../../test/util/helpers';
import {NglProgressBarModule} from './module';

const createTestComponent = (html?: string) =>
  createGenericTestComponent(TestComponent, html) as ComponentFixture<TestComponent>;

function getProgressBarElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.firstElementChild;
}

function getProgressBarValueElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.firstElementChild;
}

describe('ProgressBar Component', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglProgressBarModule]}));

  it('should render a progress bar correctly', () => {
    const fixture = createTestComponent();
    const progressbar = getProgressBarElement(fixture.nativeElement);
    const value = getProgressBarValueElement(progressbar);

    expect(progressbar).toBeDefined();
    expect(progressbar).toHaveCssClass('slds-progress-bar');
    expect(progressbar.getAttribute('role')).toBe('progressbar');
    expect(progressbar.getAttribute('aria-valuemin')).toBe('0');
    expect(progressbar.getAttribute('aria-valuemax')).toBe('100');

    expect(progressbar.getAttribute('aria-valuenow')).toBe('60');
    expect(value.style.width).toBe('60%');
  });

  it('should change value of progress bar based on input', () => {
    const fixture = createTestComponent();
    const progressbar = getProgressBarElement(fixture.nativeElement);
    const value = getProgressBarValueElement(progressbar);

    fixture.componentInstance.value = 90;
    fixture.detectChanges();
    expect(progressbar.getAttribute('aria-valuenow')).toBe('90');
    expect(value.style.width).toBe('90%');

    fixture.componentInstance.value = 50;
    fixture.detectChanges();
    expect(progressbar.getAttribute('aria-valuenow')).toBe('50');
    expect(value.style.width).toBe('50%');
  });

  it('should limit value of progress bar between 0 and 100', () => {
    const fixture = createTestComponent();
    const progressbar = getProgressBarElement(fixture.nativeElement);
    const value = getProgressBarValueElement(progressbar);

    fixture.componentInstance.value = 101;
    fixture.detectChanges();
    expect(progressbar.getAttribute('aria-valuenow')).toBe('100');
    expect(value.style.width).toBe('100%');

    fixture.componentInstance.value = -1;
    fixture.detectChanges();
    expect(progressbar.getAttribute('aria-valuenow')).toBe('0');
    expect(value.style.width).toBe('0%');
  });

  it('should change size of progress bar based on input', () => {
    const fixture = createTestComponent(`<ngl-progress-bar value="20" [size]="size" ></ngl-progress-bar>`);
    const progressbar = getProgressBarElement(fixture.nativeElement);
    expect(progressbar).toHaveCssClass('slds-progress-bar_large');

    const value = getProgressBarValueElement(progressbar);
    expect(value.style.width).toBe('20%');

    fixture.componentInstance.size = null;
    fixture.detectChanges();
    expect(progressbar).not.toHaveCssClass('slds-progress-bar_large');

    fixture.componentInstance.size = 'small';
    fixture.detectChanges();
    expect(progressbar).toHaveCssClass('slds-progress-bar_small');
  });

  it('should render a progress bar variant based on input', () => {
    const fixture = createTestComponent(`<ngl-progress-bar [value]="value" [variant]="variant" ></ngl-progress-bar>`);
    const progressbar = getProgressBarElement(fixture.nativeElement);
    expect(progressbar).toHaveCssClass('slds-progress-bar_circular');

    fixture.componentInstance.variant = null;
    fixture.detectChanges();
    expect(progressbar).not.toHaveCssClass('slds-progress-bar_circular');
  });

});

@Component({
  template: `<ngl-progress-bar [value]="value"></ngl-progress-bar>`,
})
export class TestComponent {
  value = 60;
  size = 'large';
  variant = 'circular';
}
