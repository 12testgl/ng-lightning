import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util/helpers';
import { NglFilesModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

describe('File Crop', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglFilesModule]}));

  it('should set ratio based on input', () => {
    const fixture = createTestComponent();
    const el = fixture.nativeElement.firstElementChild;
    expect(el).toHaveCssClass('slds-file__crop');
    expect(el).toHaveCssClass('slds-file__crop_4-by-3');

    fixture.componentInstance.ratio = null;
    fixture.detectChanges();
    expect(el).not.toHaveCssClass('slds-file__crop');
    expect(el).not.toHaveCssClass('slds-file__crop_4-by-3');

    fixture.componentInstance.ratio = '16-by-9';
    fixture.detectChanges();
    expect(el).toHaveCssClass('slds-file__crop');
    expect(el).toHaveCssClass('slds-file__crop_16-by-9');
    expect(el).not.toHaveCssClass('slds-file__crop_4-by-3');
  });
});


@Component({ template: '<div [nglFileCrop]="ratio"></div>' })
export class TestComponent {
  ratio = '4-by-3';
}
