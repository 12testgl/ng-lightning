import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { DOWN_ARROW, UP_ARROW, ESCAPE } from '@angular/cdk/keycodes';
import { createGenericTestComponent, dispatchEvent, dispatchKeyboardEvent } from '../../../../test/util';
import { getDayElements, expectYearOptions, getDayHeaders } from '../datepicker.spec';
import { NglDatepickersModule } from '../module';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from '../config';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getHost({ nativeElement }: ComponentFixture<any>): HTMLInputElement {
  return nativeElement.querySelector('ngl-datepicker-input');
}

function getInput({ nativeElement }: ComponentFixture<any>): HTMLInputElement {
  return nativeElement.querySelector('input.slds-input');
}

function getTrigger({ nativeElement }: ComponentFixture<any>): HTMLButtonElement {
  return nativeElement.querySelector('button.slds-button.slds-button_icon.slds-input__icon');
}

function getLabel({ nativeElement }: ComponentFixture<any>): HTMLLabelElement {
  return nativeElement.querySelector('label.slds-form-element__label');
}

function getRequiredElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('abbr');
}

function getDatepickerEl(): HTMLInputElement {
  return document.querySelector('ngl-datepicker');
}
function openCalendar(fixture: ComponentFixture<any>): void {
  dispatchKeyboardEvent(getInput(fixture), 'keydown', DOWN_ARROW);
  fixture.detectChanges();
}

function expectOpen(fixture: ComponentFixture<any>, isOpen: boolean) {
  const host = getHost(fixture);
  const datepickerEl = getDatepickerEl();

  if (isOpen) {
    expect(host).toHaveCssClass('slds-is-open');
    expect(datepickerEl.getAttribute('aria-hidden')).toEqual('false');
  } else {
    expect(host).not.toHaveCssClass('slds-is-open');
    expect(datepickerEl).toBeNull();
  }
}

describe('`<ngl-datepicker-input>`', () => {

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TestComponent],
    imports: [NglDatepickersModule, FormsModule, ReactiveFormsModule, OverlayModule],
  }));

  it('should render correctly', () => {
    const fixture = createTestComponent();

    const inputEl = getInput(fixture);
    expect(inputEl.value).toEqual('2010/09/30');
    expect(inputEl.getAttribute('placeholder')).toEqual('Custom placeholder');

    const labelEl = getLabel(fixture);
    expect(labelEl.textContent).toEqual('Select date');
    expect(labelEl.getAttribute('for')).toEqual(inputEl.id);

    expectOpen(fixture, false);
  });

  it('should change value based on input', () => {
    const fixture = createTestComponent();
    const inputEl = getInput(fixture);

    fixture.componentInstance.date = new Date(2013, 7, 11);
    fixture.detectChanges();
    expect(inputEl.value).toEqual('2013/08/11');

    fixture.componentInstance.date = null;
    fixture.detectChanges();
    expect(inputEl.value).toEqual('');
  });

  it('should apply the correct format', () => {
    const fixture = createTestComponent(`<ngl-datepicker-input [value]="date" [format]="format"><input nglDatepickerInput></ngl-datepicker-input>`);
    const inputEl = getInput(fixture);

    fixture.componentInstance.format = 'little-endian';
    fixture.detectChanges();
    expect(inputEl.value).toEqual('30/09/2010');

    fixture.componentInstance.format = 'middle-endian';
    fixture.detectChanges();
    expect(inputEl.value).toEqual('09/30/2010');

    fixture.componentInstance.format = null;
    fixture.detectChanges();
    expect(inputEl.value).toEqual('2010/09/30');
  });

  it('should apply the correct delimiter', () => {
    const fixture = createTestComponent(`<ngl-datepicker-input [value]="date" [delimiter]="delimiter"><input nglDatepickerInput></ngl-datepicker-input>`);
    const inputEl = getInput(fixture);

    fixture.componentInstance.delimiter = '-';
    fixture.detectChanges();
    expect(inputEl.value).toEqual('2010-09-30');

    fixture.componentInstance.delimiter = ' ';
    fixture.detectChanges();
    expect(inputEl.value).toEqual('2010 09 30');

    fixture.componentInstance.delimiter = null;
    fixture.detectChanges();
    expect(inputEl.value).toEqual('2010/09/30');
  });

  it('should be able to set pattern as placeholder if requested', () => {
    const fixture = createTestComponent(`
      <ngl-datepicker-input patternPlaceholder [format]="format" [delimiter]="delimiter">
        <input nglDatepickerInput>
      </ngl-datepicker-input>`);
    const inputEl = getInput(fixture);
    expect(inputEl.getAttribute('placeholder')).toEqual('YYYY/MM/DD');

    fixture.componentInstance.format = 'little-endian';
    fixture.componentInstance.delimiter = '-';
    fixture.detectChanges();
    expect(inputEl.getAttribute('placeholder')).toEqual('DD-MM-YYYY');
  });

  it('should open calendar on trigger click and close on Esc', () => {
    const fixture = createTestComponent();
    const button = getTrigger(fixture);

    button.click();
    fixture.detectChanges();
    expectOpen(fixture, true);

    const datepickerEl = getDatepickerEl();
    dispatchKeyboardEvent(datepickerEl, 'keydown', ESCAPE);
    fixture.detectChanges();
    expectOpen(fixture, false);
  });

  it('should open calendar on input click and close on next click', () => {
    const fixture = createTestComponent();
    const inputEl = getInput(fixture);

    inputEl.click();
    fixture.detectChanges();
    expectOpen(fixture, true);

    inputEl.click();
    fixture.detectChanges();
    expectOpen(fixture, false);
  });

  it('should not open multiple calendars at the same time', () => {
    const fixture = createTestComponent(`
      <ngl-datepicker-input [value]="date"><input nglDatepickerInput></ngl-datepicker-input>
      <ngl-datepicker-input [value]="date"><input nglDatepickerInput></ngl-datepicker-input>
    `);
    const inputs = fixture.nativeElement.querySelectorAll('input.slds-input');

    inputs[0].click();
    fixture.detectChanges();
    expect(document.querySelectorAll('ngl-datepicker').length).toEqual(1);

    inputs[1].click();
    fixture.detectChanges();
    expect(document.querySelectorAll('ngl-datepicker').length).toEqual(1);
  });

  it('should open calendar with up/down arrow keys on input', () => {
    const fixture = createTestComponent();
    const input = getInput(fixture);

    dispatchKeyboardEvent(input, 'keydown', DOWN_ARROW);
    fixture.detectChanges();
    expectOpen(fixture, true);

    dispatchKeyboardEvent(input, 'keydown', ESCAPE);
    fixture.detectChanges();
    expectOpen(fixture, false);

    dispatchKeyboardEvent(input, 'keydown', UP_ARROW);
    fixture.detectChanges();
    expectOpen(fixture, true);
  });

  it('should close calendar when clicking outside of it', () => {
    const fixture = createTestComponent();
    openCalendar(fixture);

    const input = getInput(fixture);
    const datepickerEl = getDatepickerEl();

    dispatchEvent(datepickerEl, 'click');
    fixture.detectChanges();
    expectOpen(fixture, true);

    dispatchEvent(input, 'click');
    fixture.detectChanges();
    expectOpen(fixture, false);
  });

  it('should emit new date when selecting from calendar', () => {
    const fixture = createTestComponent();
    openCalendar(fixture);

    const datepickerEl = getDatepickerEl();
    const days = getDayElements(datepickerEl);
    days[25].click();
    fixture.detectChanges();
    expect(fixture.componentInstance.dateChange).toHaveBeenCalledWith(new Date(2010, 8, 23));
    expectOpen(fixture, false);
  });

  it('should emit new date when interacting with input', fakeAsync(() => {
    const fixture = createTestComponent();
    const input = getInput(fixture);

    input.value = '2013/08/11';
    dispatchEvent(input, 'input');
    tick();
    expect(fixture.componentInstance.dateChange).toHaveBeenCalledWith(new Date(2013, 7, 11));
  }));

  it('should format input value on blur', fakeAsync(() => {
    const fixture = createTestComponent(`<ngl-datepicker-input [(value)]="date"><input nglDatepickerInput></ngl-datepicker-input>`);
    const input = getInput(fixture);

    input.value = '2013/8/11';
    dispatchEvent(input, 'input');
    tick();
    expect(fixture.componentInstance.date).toEqual(new Date(2013, 7, 11));
    expect(input.value).toEqual('2013/8/11');

    dispatchEvent(input, 'blur');
    fixture.detectChanges();
    expect(input.value).toEqual('2013/08/11');
  }));

  it('should emit input value if invalid', fakeAsync(() => {
    const fixture = createTestComponent(`<ngl-datepicker-input [(value)]="date"><input nglDatepickerInput></ngl-datepicker-input>`);
    const input = getInput(fixture);

    input.value = 'abcd';
    dispatchEvent(input, 'input');
    tick();
    expect(fixture.componentInstance.date).toEqual('abcd');
    expect(input.value).toEqual('abcd');

    dispatchEvent(input, 'blur');
    fixture.detectChanges();
    expect(input.value).toEqual('abcd');
  }));

  it('should work correctly with `ngModel`', fakeAsync(async () => {
    const fixture = createTestComponent(`<ngl-datepicker-input [(ngModel)]="date"><input nglDatepickerInput></ngl-datepicker-input>`);
    const input = getInput(fixture);

    await fixture.whenStable();
    expect(input.value).toEqual('2010/09/30');

    input.value = '2013/8/11';
    dispatchEvent(input, 'input');
    tick();
    expect(fixture.componentInstance.date).toEqual(new Date(2013, 7, 11));
    expect(input.value).toEqual('2013/8/11');

    fixture.componentInstance.date = new Date(2014, 9, 23);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(input.value).toEqual('2014/10/23');

    fixture.componentInstance.date = null;
    fixture.detectChanges();
    await fixture.whenStable();
    expect(input.value).toEqual('');
  }));

  it('should have validation for invalid input', fakeAsync(async () => {
    const fixture = createTestComponent(`
      <ngl-datepicker-input [(ngModel)]="date" #x="ngModel" [class.slds-has-error]="!x.valid">
        <input nglDatepickerInput>
      </ngl-datepicker-input>`);
    const host = getHost(fixture);
    const input = getInput(fixture);

    await fixture.whenStable();
    expect(host).not.toHaveCssClass('slds-has-error');

    input.value = 'abc';
    dispatchEvent(input, 'input');
    tick();
    fixture.detectChanges();
    expect(host).toHaveCssClass('slds-has-error');

    input.value = '';
    dispatchEvent(input, 'input');
    tick();
    fixture.detectChanges();
    expect(host).not.toHaveCssClass('slds-has-error');
  }));

  it('should have validation for `min` input', async(() => {
    const fixture = createTestComponent(`
      <ngl-datepicker-input [(ngModel)]="date" [min]="min" #x="ngModel" [class.slds-has-error]="!x.valid">
        <input nglDatepickerInput>
      </ngl-datepicker-input>
    `, false);
    fixture.componentInstance.date = new Date(2010, 7, 11);
    fixture.componentInstance.min = new Date(2013, 7, 11);
    fixture.detectChanges();

    const host = getHost(fixture);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(host).toHaveCssClass('slds-has-error');

      fixture.componentInstance.date = new Date(2015, 7, 11);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(host).not.toHaveCssClass('slds-has-error');
      });
    });
  }));

  it('should update validity if `min` changes', fakeAsync(() => {
    const fixture = createTestComponent(`
      <form>
        <ngl-datepicker-input [(ngModel)]="date" [min]="min" name="dp">
          <input nglDatepickerInput>
        </ngl-datepicker-input>
      </form>`);
    const form = fixture.debugElement.query(By.directive(NgForm)).injector.get(NgForm);

    fixture.detectChanges();
    tick();
    expect(form.control.valid).toBeTruthy();

    fixture.componentInstance.min = new Date(2013, 7, 11);
    fixture.detectChanges();
    tick();
    expect(form.control.valid).toBeFalsy();
  }));

  it('should have validation for `max` input', async(() => {
    const fixture = createTestComponent(`
      <ngl-datepicker-input [(ngModel)]="date" [max]="max" #x="ngModel" [class.slds-has-error]="!x.valid">
        <input nglDatepickerInput>
      </ngl-datepicker-input>
    `, false);
    fixture.componentInstance.date = new Date(2014, 9, 23);
    fixture.componentInstance.max = new Date(2010, 9, 23);
    fixture.detectChanges();

    const host = getHost(fixture);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(host).toHaveCssClass('slds-has-error');

      fixture.componentInstance.date = new Date(2005, 9, 23);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(host).not.toHaveCssClass('slds-has-error');
      });
    });
  }));

  it('should update validity if `max` changes', fakeAsync(() => {
    const fixture = createTestComponent(`
      <form>
        <ngl-datepicker-input [(ngModel)]="date" [max]="max" name="dp">
          <input nglDatepickerInput>
        </ngl-datepicker-input>
      </form>`);
    const form = fixture.debugElement.query(By.directive(NgForm)).injector.get(NgForm);

    fixture.detectChanges();
    tick();
    expect(form.control.valid).toBeTruthy();

    fixture.componentInstance.max = new Date(2003, 7, 11);
    fixture.detectChanges();
    tick();
    expect(form.control.valid).toBeFalsy();
  }));

  it('should handle appropriately disable state', async(() => {
    const fixture = createTestComponent(`<ngl-datepicker-input [(ngModel)]="date" disabled><input nglDatepickerInput></ngl-datepicker-input>`);

    fixture.whenStable().then(() => {
      expect(getInput(fixture).disabled).toBe(true);
      expect(getTrigger(fixture).disabled).toBe(true);
    });
  }));

  describe('custom configuration', () => {
    const format = 'middle-endian';
    const delimiter = '.';
    const relativeYearFrom = -50;
    const relativeYearTo = 20;
    const firstDayOfWeek = 2;

    beforeEach(() => TestBed.configureTestingModule({
      providers: [
        {
          provide: NGL_DATEPICKER_CONFIG,
          useValue: <NglDatepickerConfig>{ format, delimiter, relativeYearFrom, relativeYearTo, firstDayOfWeek }
        },
      ],
    }));

    it('should have configurable format and delimiter', () => {
      const fixture = createTestComponent();
      const inputEl = getInput(fixture);
      expect(inputEl.value).toEqual('09.30.2010');
    });

    it('should have configurable year options', () => {
      const currentDate = new Date(2005, 0, 1);
      jasmine.clock().mockDate(currentDate);

      const fixture = createTestComponent();
      openCalendar(fixture);
      expectYearOptions(getDatepickerEl(), 1955, 2025);
    });

    it('should have configurable first day of week', () => {
      const fixture = createTestComponent();
      openCalendar(fixture);
      expect(getDayHeaders(getDatepickerEl())).toEqual(['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']);
    });
  });

  it('should close calendar if input is scrolled outside of view', () => {
    const fixture = createTestComponent(`
      <div cdkScrollable style="padding: 100px; margin: 300px;
                                height: 200px; width: 200px; overflow: auto;">
        <ngl-datepicker-input [value]="date" style="margin-bottom: 600px;"><input nglDatepickerInput></ngl-datepicker-input>
      </div>`);
    openCalendar(fixture);

    const scrollingContainerEl = fixture.nativeElement.firstElementChild;

    expectOpen(fixture, true);
    scrollingContainerEl.scrollTop = 250;
    dispatchEvent(scrollingContainerEl, 'scroll');
    fixture.detectChanges();
    expectOpen(fixture, false);
  });

  it('should add required indication to label on input required', () => {
    const fixture = createTestComponent(`<ngl-datepicker-input label="'Test'" [(ngModel)]="date" required><input nglDatepickerInput></ngl-datepicker-input>`);
    expect(getRequiredElement(fixture.nativeElement)).not.toBeNull();
    fixture.detectChanges();
    const abbrEl = getRequiredElement(fixture.nativeElement);
    expect(abbrEl).toHaveCssClass('slds-required');
  });

  it('should not have required indication on label when input not required', () => {
    const fixture = createTestComponent();
    expect(getRequiredElement(fixture.nativeElement)).toBeFalsy();
  });
});


@Component({
  template: `
    <ngl-datepicker-input [value]="date" (valueChange)="dateChange($event)" label="Select date">
      <input nglDatepickerInput placeholder="Custom placeholder">
    </ngl-datepicker-input>
  `,
})
export class TestComponent {
  date: Date | string = new Date(2010, 8, 30); // 30 September 2010
  dateChange = jasmine.createSpy('dateChange');

  format: string;
  delimiter: string;
  min: Date;
  max: Date;
}
