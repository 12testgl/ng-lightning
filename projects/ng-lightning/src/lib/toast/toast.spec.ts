import { fakeAsync, tick, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createGenericTestComponent } from '../../../test/util/helpers';
import { NglToastModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getCloseButton(fixture: any): HTMLElement {
  return fixture.nativeElement.querySelector('button.slds-notify__close');
}

describe('`ngl-toast`', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglToastModule]}));

  it('should have the proper classes and attributes', () => {
    const fixture = createTestComponent();
    const hostElement = fixture.nativeElement.querySelector('.slds-notify');

    expect(hostElement).toHaveCssClass('slds-notify_toast');
    expect(hostElement.getAttribute('role')).toBe('status');
    expect(hostElement).toHaveCssClass('slds-theme_info');

    const closeButton = getCloseButton(fixture);
    expect(closeButton).toHaveCssClass('slds-notify__close');
  });

  it('should change variant based on input', () => {
    const fixture = createTestComponent('<ngl-toast [variant]="variant"></ngl-toast>');
    const hostElement = fixture.nativeElement.querySelector('.slds-notify');

    expect(hostElement).toHaveCssClass('slds-theme_error');
    expect(hostElement).not.toHaveCssClass('slds-theme_info');

    fixture.componentInstance.variant = 'success';
    fixture.detectChanges();

    expect(hostElement).not.toHaveCssClass('slds-theme_error');
    expect(hostElement).toHaveCssClass('slds-theme_success');

    fixture.componentInstance.variant = null;
    fixture.detectChanges();

    expect(hostElement).not.toHaveCssClass('slds-theme_success');
    expect(hostElement).toHaveCssClass('slds-theme_info');
  });

  it('should have the proper assistive texts', () => {
    const fixture = createTestComponent();
    fixture.componentInstance.assistiveText = 'Test of assistive text';
    fixture.componentInstance.closeButtonAssistiveText = 'Test of close assistive text';
    fixture.detectChanges();

    const assistiveTexts = fixture.nativeElement.querySelectorAll('.slds-assistive-text');
    expect(assistiveTexts.length).toBe(2);
    expect(assistiveTexts[0].textContent).toBe(fixture.componentInstance.assistiveText);
    expect(assistiveTexts[1].textContent).toBe(fixture.componentInstance.closeButtonAssistiveText);
  });

  it('should not have a close button when the (close) attribute is absent', () => {
    const fixture = createTestComponent('<ngl-toast [variant]="variant"></ngl-toast>');
    const closeButton = getCloseButton(fixture);
    expect(closeButton).toBeFalsy();
  });

  it('`dismissible` should prevent display of close button', () => {
    const fixture = createTestComponent(`<ngl-toast [dismissible]="dismissible" (close)="onClose($event)"></ngl-toast>`);
    expect(getCloseButton(fixture)).toBeFalsy();

    fixture.componentInstance.dismissible = true;
    fixture.detectChanges();
    expect(getCloseButton(fixture)).toBeTruthy();
  });

  it('should emit a close event when the close button is clicked', () => {
    const fixture = createTestComponent();
    const closeButton = getCloseButton(fixture);
    closeButton.click();
    expect(fixture.componentInstance.onClose).toHaveBeenCalledWith('button');
  });

  it('should emit a close event when its `close` method is called', () => {
    const fixture = createTestComponent();
    const externalCloseButton = fixture.nativeElement.querySelector('.boundVarCloser');
    externalCloseButton.click();
    expect(fixture.componentInstance.onClose).toHaveBeenCalledWith('api');
  });

  it('should emit a close event when the specified duration has passed', fakeAsync(() => {
    const fixture = createTestComponent();
    fixture.componentInstance.duration = 500;
    fixture.detectChanges();

    tick(400);
    expect(fixture.componentInstance.onClose).not.toHaveBeenCalled();

    tick(100);
    expect(fixture.componentInstance.onClose).toHaveBeenCalledWith('timeout');
    fixture.destroy();
  }));

  it('should set the timeout anew when the binding changes', fakeAsync(() => {
    const fixture = createTestComponent(null, false);
    fixture.componentInstance.duration = 500;
    fixture.detectChanges();

    tick(400);
    fixture.componentInstance.duration = 300;
    fixture.detectChanges();

    tick(299);
    expect(fixture.componentInstance.onClose).not.toHaveBeenCalled();

    tick(10);
    expect(fixture.componentInstance.onClose).toHaveBeenCalledWith('timeout');
    fixture.destroy();
  }));

  it('should cancel the active timeout after the close button has been clicked', fakeAsync(() => {
    const fixture = createTestComponent(null, false);
    fixture.componentInstance.duration = 500;
    fixture.detectChanges();

    tick(400);
    getCloseButton(fixture).click();

    tick(100);
    expect(fixture.componentInstance.onClose).toHaveBeenCalledWith('button');
    expect(fixture.componentInstance.onClose).not.toHaveBeenCalledWith('timeout');
    fixture.destroy();
  }));

  it('should cancel timeout if destroyed', fakeAsync(() => {
    const fixture = createTestComponent(`<ngl-toast *ngIf="variant" duration="1000" (close)="onClose($event)"></ngl-toast>`);

    fixture.componentInstance.variant = null;
    fixture.detectChanges();

    tick(2000);
    expect(fixture.componentInstance.onClose).not.toHaveBeenCalled();
  }));

  it('should display a helper icon based on input', fakeAsync(() => {
    const fixture = createTestComponent(`<ngl-toast iconName="utility:info"></ngl-toast>`);

    const icon = fixture.nativeElement.querySelector('ngl-icon');
    expect(icon).toBeDefined();
    const use = icon.querySelector('use');
    expect(use.getAttribute('xlink:href')).toBe('assets/icons/utility-sprite/svg/symbols.svg#info');
  }));
});


@Component({
  template: `
    <ngl-toast (close)="onClose($event)"
      [assistiveText]="assistiveText" [closeButtonAssistiveText]="closeButtonAssistiveText"
      [duration]="duration"
      #toast="nglToast">
      <h2>Base System Alert</h2>
    </ngl-toast>
    <button type="button" (click)="toast.close('api')" class="boundVarCloser"></button>
  `,
})
export class TestComponent {
  variant = 'error';
  assistiveText: string;
  closeButtonAssistiveText: string;
  duration: number = null;
  dismissible = false;
  onClose = jasmine.createSpy('onClose');
}
