import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DOWN_ARROW, UP_ARROW, ESCAPE } from '@angular/cdk/keycodes';
import { createGenericTestComponent, dispatchEvent, dispatchKeyboardEvent } from '../../../../test/util';
import { getDayElements, expectYearOptions } from '../datepicker.spec';
import { NglDatepickersModule } from '../module';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from '../config';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getHost({ nativeElement }: ComponentFixture<any>): HTMLInputElement {
  return nativeElement.firstElementChild;
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
    imports: [NglDatepickersModule, FormsModule, ReactiveFormsModule],
  }));

  it('should render correctly', () => {
    const fixture = createTestComponent();

    const inputEl = getInput(fixture);
    expect(inputEl.value).toEqual('2010/09/30');

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
    const fixture = createTestComponent(`<ngl-datepicker-input [value]="date" [format]="format"></ngl-datepicker-input>`);
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
    const fixture = createTestComponent(`<ngl-datepicker-input [value]="date" [delimiter]="delimiter"></ngl-datepicker-input>`);
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

  it('should be able to set input as readonly', () => {
    const fixture = createTestComponent(`<ngl-datepicker-input [value]="date" readonlyInput></ngl-datepicker-input>`);
    const inputEl = getInput(fixture);
    expect(inputEl.readOnly).toBe(true);
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

    dispatchEvent(datepickerEl, 'mousedown');
    fixture.detectChanges();
    expectOpen(fixture, true);

    dispatchEvent(input, 'mousedown');
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

  it('should emit new date when interacting with input', () => {
    const fixture = createTestComponent();
    const input = getInput(fixture);

    input.value = '2013/08/11';
    dispatchEvent(input, 'input');
    expect(fixture.componentInstance.dateChange).toHaveBeenCalledWith(new Date(2013, 7, 11));
  });

  it('should format input value on blur', () => {
    const fixture = createTestComponent(`<ngl-datepicker-input [(value)]="date"></ngl-datepicker-input>`);
    const input = getInput(fixture);

    input.value = '2013/8/11';
    dispatchEvent(input, 'input');
    expect(fixture.componentInstance.date).toEqual(new Date(2013, 7, 11));
    expect(input.value).toEqual('2013/8/11');

    dispatchEvent(input, 'blur');
    fixture.detectChanges();
    expect(input.value).toEqual('2013/08/11');
  });

  it('should emit input value if invalid', () => {
    const fixture = createTestComponent(`<ngl-datepicker-input [(value)]="date"></ngl-datepicker-input>`);
    const input = getInput(fixture);

    input.value = 'abcd';
    dispatchEvent(input, 'input');
    expect(fixture.componentInstance.date).toEqual('abcd');
    expect(input.value).toEqual('abcd');

    dispatchEvent(input, 'blur');
    fixture.detectChanges();
    expect(input.value).toEqual('abcd');
  });

  it('should work correctly with `ngModel`', async(() => {
    const fixture = createTestComponent(`<ngl-datepicker-input [(ngModel)]="date"></ngl-datepicker-input>`);
    const input = getInput(fixture);

    fixture.whenStable().then(() => {
      expect(input.value).toEqual('2010/09/30');

      input.value = '2013/8/11';
      dispatchEvent(input, 'input');
      expect(fixture.componentInstance.date).toEqual(new Date(2013, 7, 11));
      expect(input.value).toEqual('2013/8/11');

      fixture.componentInstance.date = new Date(2014, 9, 23);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toEqual('2014/10/23');

        fixture.componentInstance.date = null;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(input.value).toEqual('');
        });
      });
    });
  }));

  it('should have validation for invalid input', async(() => {
    const fixture = createTestComponent(`<ngl-datepicker-input [(ngModel)]="date" #x="ngModel" [class.slds-has-error]="!x.valid"></ngl-datepicker-input>`);
    const host = getHost(fixture);
    const input = getInput(fixture);

    fixture.whenStable().then(() => {
      expect(host).not.toHaveCssClass('slds-has-error');

      input.value = 'abc';
      dispatchEvent(input, 'input');
      fixture.detectChanges();
      expect(host).toHaveCssClass('slds-has-error');

      input.value = '';
      dispatchEvent(input, 'input');
      fixture.detectChanges();
      expect(host).not.toHaveCssClass('slds-has-error');
    });
  }));

  it('should have validation for `min` input', async(() => {
    const fixture = createTestComponent(`
      <ngl-datepicker-input [(ngModel)]="date" [min]="min" #x="ngModel" [class.slds-has-error]="!x.valid"></ngl-datepicker-input>
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

  it('should have validation for `max` input', async(() => {
    const fixture = createTestComponent(`
      <ngl-datepicker-input [(ngModel)]="date" [max]="max" #x="ngModel" [class.slds-has-error]="!x.valid"></ngl-datepicker-input>
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

  it('should handle appropriately disable state', async(() => {
    const fixture = createTestComponent(`<ngl-datepicker-input [(ngModel)]="date" disabled></ngl-datepicker-input>`);

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

    beforeEach(() => TestBed.configureTestingModule({
      providers: [
        { provide: NGL_DATEPICKER_CONFIG, useValue: <NglDatepickerConfig>{ format, delimiter, relativeYearFrom, relativeYearTo } },
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
  });
});


@Component({
  template: `<ngl-datepicker-input [value]="date" (valueChange)="dateChange($event)" label="Select date"></ngl-datepicker-input>`,
})
export class TestComponent {
  date: Date | string = new Date(2010, 8, 30); // 30 September 2010
  dateChange = jasmine.createSpy('dateChange');

  format: string;
  delimiter: string;
  min: Date;
  max: Date;
}
