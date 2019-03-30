import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../../test/util';
import { NglDynamicIconsModule } from '../module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

describe('`ngl-dynamic-icon-waffle`', () => {

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TestComponent],
    imports: [NglDynamicIconsModule],
  }));

  it('should render correctly', () => {
    const fixture = createTestComponent();
    const host = fixture.nativeElement.firstElementChild.firstElementChild;

    expect(host).toHaveClass('slds-button');
    expect(host).toHaveClass('slds-icon-waffle_container');
    expect(host.firstElementChild).toHaveClass('slds-icon-waffle');
  });
});

@Component({ template: '<ngl-dynamic-icon-waffle></ngl-dynamic-icon-waffle>' })
export class TestComponent {
}
