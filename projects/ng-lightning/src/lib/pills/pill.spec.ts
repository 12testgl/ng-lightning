import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util';
import { NglPillsModule } from './module';
import { NglAvatarModule } from '../avatar';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

export function getPill(root: HTMLElement): any {
  return root.firstElementChild;
}

function getActionEl(pill: HTMLElement): HTMLElement {
  return <HTMLElement>pill.querySelector('.slds-pill__action');
}

function getLabelEl(pill: HTMLElement): HTMLElement {
  return <HTMLElement>pill.querySelector('.slds-pill__label');
}

function getRemoveButton(pill: HTMLElement): any {
   return <HTMLButtonElement>pill.querySelector('button');
}

describe('NglPill', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglPillsModule, NglAvatarModule]}));

  it('should have the proper css classes and text content', () => {
    const fixture = createTestComponent();
    const pill = getPill(fixture.nativeElement);
    const action = getActionEl(pill);
    const removeButton = getRemoveButton(pill);
    expect(pill).toHaveCssClass('slds-pill');
    expect(pill).toHaveCssClass('slds-pill_link');
    expect(action.tagName).toBe('A');
    expect(action.firstElementChild).toHaveCssClass('slds-pill__label');
    expect(action.firstElementChild.tagName).toBe('SPAN');
    expect(action.textContent.trim()).toBe('I am a pill!');
    expect(removeButton).toHaveCssClass('slds-pill__remove');
  });

  it('should render unlinked correctly', () => {
    const fixture = createTestComponent(`<ngl-pill>I am unlinked!</ngl-pill>`);
    const pill = getPill(fixture.nativeElement);
    const text = getLabelEl(pill);
    expect(pill).not.toHaveCssClass('slds-pill_link');
    expect(text.tagName).toBe('SPAN');
    expect(text.textContent.trim()).toBe('I am unlinked!');
  });

  it('should render with error correctly', () => {
    const fixture = createTestComponent(`<ngl-pill hasError="true"></ngl-pill>`);
    const pill = getPill(fixture.nativeElement);
    expect(pill).toHaveCssClass('slds-pill');
    expect(pill).toHaveCssClass('slds-has-error');
  });

  it('should render icon correctly', () => {
    const fixture = createTestComponent(`<ngl-pill icon="standard:feedback"></ngl-pill>`);
    const pill = getPill(fixture.nativeElement);
    expect(pill.firstElementChild).toHaveCssClass('slds-pill__icon_container');
  });

  it('should render avatar template correctly', () => {
    const fixture = createTestComponent(`
      <ngl-pill [avatar]="avatar">
        <ng-template #avatar>
          <ngl-avatar></ngl-avatar>
        </ng-template>
      </ngl-pill>
    `);
    const pill = getPill(fixture.nativeElement);
    expect(pill.firstElementChild).toHaveCssClass('slds-pill__icon_container');
    expect(pill.firstElementChild.firstElementChild).toHaveCssClass('slds-avatar');
  });

  it('should not render the remove button without `remove` bound', () => {
    const fixture = createTestComponent(`<ngl-pill></ngl-pill>`);
    const pill = getPill(fixture.nativeElement);
    expect(getRemoveButton(pill)).toBeNull();
  });

  it('should not render the remove button without `remove` bound even with `removable` set', () => {
    const fixture = createTestComponent(`<ngl-pill removable="true"></ngl-pill>`);
    const pill = getPill(fixture.nativeElement);
    expect(getRemoveButton(pill)).toBeNull();
  });

  it('should toggle the remove button based on `removable`', () => {
    const fixture = createTestComponent(`<ngl-pill (remove)="onRemove()" [removable]="removable"></ngl-pill>`);
    const pill = getPill(fixture.nativeElement);

    fixture.componentInstance.removable = false;
    fixture.detectChanges();
    expect(getRemoveButton(pill)).toBeNull();

    fixture.componentInstance.removable = true;
    fixture.detectChanges();
    expect(getRemoveButton(pill)).not.toBeNull();
  });

  it('should trigger the remove event whenever the remove button is clicked', () => {
    const fixture = createTestComponent();
    const pill = getPill(fixture.nativeElement);
    const removeButton = getRemoveButton(pill);
    expect(fixture.componentInstance.onRemove).not.toHaveBeenCalled();
    removeButton.click();
    expect(fixture.componentInstance.onRemove).toHaveBeenCalled();
  });

  it('should support custom title for remove button', () => {
    const fixture = createTestComponent(`<ngl-pill (remove)="onRemove()" removeTitle="Custom remove text"></ngl-pill>`);
    const button = getRemoveButton(fixture.nativeElement);
    const assistiveText = button.querySelector('.slds-assistive-text');
    expect(button.getAttribute('title')).toBe('Custom remove text');
    expect(assistiveText.textContent).toBe('Custom remove text');
  });
});

@Component({
  template: `
    <ngl-pill (remove)="onRemove()">
      <a nglPillAction>I am a pill!</a>
    </ngl-pill>
  `,
})
export class TestComponent {
  removable = true;
  onRemove = jasmine.createSpy('onRemove');
}
