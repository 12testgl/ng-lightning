import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util/helpers';
import { NglButtonsModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

describe('`NglButtonStates`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglButtonsModule]}));

  it('should render "on" state', () => {
    const fixture = createTestComponent(`<ngl-state-on iconName="utility:down"></ngl-state-on>`);
    const el = fixture.nativeElement.firstElementChild;
    expect(el).toHaveCssClass('slds-text-selected');
  });

  it('should render "off" state', () => {
    const fixture = createTestComponent(`<ngl-state-off iconName="utility:down"></ngl-state-off>`);
    const el = fixture.nativeElement.firstElementChild;
    expect(el).toHaveCssClass('slds-text-not-selected');
  });

  it('should render "hover" state', () => {
    const fixture = createTestComponent(`<ngl-state-hover iconName="utility:down"></ngl-state-hover>`);
    const el = fixture.nativeElement.firstElementChild;
    expect(el).toHaveCssClass('slds-text-selected-focus');
  });
});

@Component({
  template: ``,
})
export class TestComponent {}
