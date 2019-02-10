import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util/helpers';
import { NglDynamicIconsModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

describe('`ngl-dynamic-icon`', () => {

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TestComponent],
    imports: [NglDynamicIconsModule],
  }));

  it('should render correctly the waffle icon', () => {
    const fixture = createTestComponent();
    const host = fixture.nativeElement.firstElementChild;

    expect(host.firstElementChild.tagName.toLowerCase()).toBe('ngl-dynamic-icon-waffle');
  });

  it('should propagate the click event of waffle icon', () => {
    const fixture = createTestComponent();
    const button = fixture.nativeElement.querySelector('button');

    button.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.onClick).toHaveBeenCalled();
  });
});

@Component({ template: '<ngl-dynamic-icon type="waffle" (click)="onClick($event)"></ngl-dynamic-icon>' })
export class TestComponent {

  onClick = jasmine.createSpy();
}
