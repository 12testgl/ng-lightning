import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DOWN_ARROW, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, HOME, END, ENTER } from '@angular/cdk/keycodes';
import { createGenericTestComponent, selectElements, dispatchEvent, dispatchKeyboardEvent } from '../../../test/util';
import { NglDatepickersModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

// Microsoft Edge hack
function removeNonPrintable(str: string) {
  return str.replace(/[^\x20-\x7E]+/g, '');
}

export function getDayElements(element: HTMLElement): HTMLElement[] {
  return selectElements(element, '.slds-day');
}

export function getDayHeaders(element: HTMLElement) {
  return selectElements(element, 'th').map(e => e.textContent.trim()).map(removeNonPrintable);
}

function getYearOptions(element: HTMLElement) {
  return selectElements(element, 'option');
}

function buildArray(start: number, end: number) {
  const arr: string[] = [];
  while (start <= end) {
    arr.push(start++ + '');
  }
  return arr;
}

function chooseYear(element: HTMLElement, year: number) {
  const select = <HTMLSelectElement>element.querySelector('select');
  select.value = '' + year;

  dispatchEvent(select, 'change');
}

function getMonthNavigationButtons(element: HTMLElement): HTMLButtonElement[] {
  return selectElements(element.querySelector('.slds-datepicker__filter_month'), 'button') as HTMLButtonElement[];
}

function getPreviousButton(element: HTMLElement): HTMLButtonElement {
  const buttons = getMonthNavigationButtons(element);
  return buttons[0];
}

function getNextButton(element: HTMLElement): HTMLButtonElement {
  const buttons = getMonthNavigationButtons(element);
  return buttons[1];
}

function clickButton(element: HTMLElement, isNext = false) {
  const button = isNext ? getNextButton(element) : getPreviousButton(element);
  button.click();
}

function dispatchKey(fixture: ComponentFixture<any>, key: number) {
  const table = fixture.nativeElement.querySelector('table.datepicker__month');
  dispatchKeyboardEvent(table, 'keydown', key);
  fixture.detectChanges();
}

function getTableRows(element: HTMLElement) {
  return selectElements(element, 'tbody > tr');
}

function getTodayButton(fixture: ComponentFixture<any>): HTMLButtonElement {
  return fixture.nativeElement.querySelector('button.slds-text-link');
}

function expectCalendar(fixture: ComponentFixture<TestComponent>, expectedDates: any[], expectedMonth: string, expectedYear: string) {
  const element = fixture.nativeElement;

  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    const dates = getTableRows(element).map((trElement: HTMLElement, row: number) => {
      return selectElements(trElement, 'td').map((td: HTMLElement, column: number) => {
        let text = td.textContent.trim();
        if (td.classList.contains('slds-is-selected')) {
          text = '*' + text;
        }
        if (td.getAttribute('tabindex') === '0') {
          text += '+';
        }
        if (td.classList.contains('slds-disabled-text')) {
          text += '-';
        }
        if (td.classList.contains('slds-is-today')) {
          text += '^';
        }
        return text;
      });
    });
    expect(dates).toEqual(expectedDates);

    const month = removeNonPrintable(element.querySelector('h2.slds-align-middle').textContent.trim());
    expect(expectedMonth).toEqual(month);

    const year = (<HTMLSelectElement>element.querySelector('select.slds-select')).value;
    expect(expectedYear).toEqual(year);
  });
}

export function expectYearOptions(element: HTMLElement, expectedYearFrom: number, expectedYearTo: number) {
  const expectedYears = buildArray(expectedYearFrom, expectedYearTo);
  expect(getYearOptions(element).map((e: HTMLOptionElement) => e.value)).toEqual(expectedYears);
}

describe('`Datepicker` Component', () => {

  beforeEach(() => TestBed.configureTestingModule({declarations: [TestComponent], imports: [NglDatepickersModule]}));

  let currentDate: Date;

  beforeEach(() => {
    currentDate = new Date(2005, 10, 9); // 9 November 2005
    jasmine.clock().mockDate(currentDate);
  });

  it('should render correctly', async(() => {
    const fixture = createTestComponent();

    expectCalendar(fixture, [
      ['29-', '30-', '31-', '1', '2', '3', '4'],
      ['5', '6', '7', '8', '9', '10', '11'],
      ['12', '13', '14', '15', '16', '17', '18'],
      ['19', '20', '21', '22', '23', '24', '25'],
      ['26', '27', '28', '29', '*30+', '1-', '2-'],
    ], 'September', '2010').then(() => {
      expect(getDayHeaders(fixture.nativeElement)).toEqual([ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]);
      expectYearOptions(fixture.nativeElement, 1905, 2015);
    });
  }));

  it('render accessibility label for year select', async(() => {
    const fixture = createTestComponent();

    const yearEl = (<HTMLSelectElement>fixture.nativeElement.querySelector('select.slds-select'));
    const labelEl = yearEl.parentElement.previousElementSibling;
    expect(yearEl.id).toEqual(labelEl.getAttribute('for'));
  }));

  it('should change view when input date is changing', async(() => {
    const fixture = createTestComponent();

    fixture.componentInstance.date = new Date(2013, 7, 11); // 11 August 2013
    expectCalendar(fixture, [
      [ '28-', '29-', '30-', '31-', '1', '2', '3' ],
      [ '4', '5', '6', '7', '8', '9', '10' ],
      [ '*11+', '12', '13', '14', '15', '16', '17' ],
      [ '18', '19', '20', '21', '22', '23', '24' ],
      [ '25', '26', '27', '28', '29', '30', '31' ],
    ], 'August', '2013').then(() => {

      fixture.componentInstance.date = new Date(2014, 9, 23); // 23 October 2014
      expectCalendar(fixture, [
        [ '28-', '29-', '30-', '1', '2', '3', '4' ],
        [ '5', '6', '7', '8', '9', '10', '11' ],
        [ '12', '13', '14', '15', '16', '17', '18' ],
        [ '19', '20', '21', '22', '*23+', '24', '25' ],
        [ '26', '27', '28', '29', '30', '31', '1-' ],
      ], 'October', '2014');
    });
  }));

  it('does not change current view when model is cleared', async(() => {
    const fixture = createTestComponent();

    fixture.componentInstance.date = null;
    expectCalendar(fixture, [
      ['29-', '30-', '31-', '1', '2', '3', '4'],
      ['5', '6', '7', '8', '9', '10', '11'],
      ['12', '13', '14', '15', '16', '17', '18'],
      ['19', '20', '21', '22', '23', '24', '25'],
      ['26', '27', '28', '29', '30+', '1-', '2-'],
    ], 'September', '2010');
  }));

  it('should show current date if none is set', async(() => {
    jasmine.clock().mockDate(new Date(2013, 7, 11)); // 11 August 2013

    const fixture = createTestComponent(null, false);
    fixture.componentInstance.date = null;
    expectCalendar(fixture, [
      ['28-', '29-', '30-', '31-', '1', '2', '3'],
      ['4', '5', '6', '7', '8', '9', '10'],
      ['11+^', '12', '13', '14', '15', '16', '17'],
      ['18', '19', '20', '21', '22', '23', '24'],
      ['25', '26', '27', '28', '29', '30', '31'],
    ], 'August', '2013');
  }));

  it('updates the model when a day is clicked', () => {
    const fixture = createTestComponent();
    const days = getDayElements(fixture.nativeElement);
    days[25].click();
    expect(fixture.componentInstance.dateChange).toHaveBeenCalledWith(new Date(2010, 8, 23));
  });

  it('do nothing when a disabled day is clicked', () => {
    const fixture = createTestComponent();
    const days = getDayElements(fixture.nativeElement);
    days[1].click();
    expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
  });

  it('moves to previous month correctly when button is clicked', async(() => {
    const fixture = createTestComponent();
    clickButton(fixture.nativeElement, false);

    expectCalendar(fixture, [
      ['1', '2', '3', '4', '5', '6', '7'],
      ['8', '9', '10', '11', '12', '13', '14'],
      ['15', '16', '17', '18', '19', '20', '21'],
      ['22', '23', '24', '25', '26', '27', '28'],
      ['29', '30+', '31', '1-', '2-', '3-', '4-'],
    ], 'August', '2010').then(() => {
      expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
    });
  }));

  it('moves to next month correctly when button is clicked', async(() => {
    const fixture = createTestComponent();
    clickButton(fixture.nativeElement, true);

    expectCalendar(fixture, [
      ['26-', '27-', '28-', '29-', '*30-', '1', '2'],
      ['3', '4', '5', '6', '7', '8', '9'],
      ['10', '11', '12', '13', '14', '15', '16'],
      ['17', '18', '19', '20', '21', '22', '23'],
      ['24', '25', '26', '27', '28', '29', '30+'],
      ['31', '1-', '2-', '3-', '4-', '5-', '6-'],
    ], 'October', '2010').then(() => {
      expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
    });
  }));

  it('should not "jump" months and keep current day in limits', async(() => {
    const fixture = createTestComponent();
    fixture.componentInstance.date = new Date(2012, 0, 30); // 30 January 2012
    fixture.detectChanges();
    clickButton(fixture.nativeElement, true);

    expectCalendar(fixture, [
      ['29-', '*30-', '31-', '1', '2', '3', '4'],
      ['5', '6', '7', '8', '9', '10', '11'],
      ['12', '13', '14', '15', '16', '17', '18'],
      ['19', '20', '21', '22', '23', '24', '25'],
      ['26', '27', '28', '29+', '1-', '2-', '3-'],
    ], 'February', '2012');
  }));

  it('moves to selected year from dropdown', async(() => {
    const fixture = createTestComponent();

    fixture.whenStable().then(() => {
      chooseYear(fixture.nativeElement, 2014);
      expectCalendar(fixture, [
        [ '31-', '1', '2', '3', '4', '5', '6' ],
        [ '7', '8', '9', '10', '11', '12', '13' ],
        [ '14', '15', '16', '17', '18', '19', '20' ],
        [ '21', '22', '23', '24', '25', '26', '27' ],
        [ '28', '29', '30+', '1-', '2-', '3-', '4-' ],
      ], 'September', '2014');
    });
  }));

  it('should change year range based on selection', () => {
    jasmine.clock().mockDate(new Date(1983, 10, 7)); // 7 November 1983
    const fixture = createTestComponent();
    expectYearOptions(fixture.nativeElement, 1883, 1993);
  });

  it('should change year range based on inputs', () => {
    jasmine.clock().mockDate(new Date(2005, 0, 1));

    const fixture = createTestComponent(`<ngl-datepicker [date]="date" [relativeYearFrom]="-5" [relativeYearTo]="5"></ngl-datepicker>`);
    expectYearOptions(fixture.nativeElement, 2000, 2010);
  });

  describe('keyboard navigation', () => {

    it('will be able to activate appropriate day', async(() => {
      const fixture = createTestComponent();

      dispatchKey(fixture, DOWN_ARROW);
      expectCalendar(fixture, [
        ['26-', '27-', '28-', '29-', '*30-', '1', '2'],
        ['3', '4', '5', '6', '7+', '8', '9'],
        ['10', '11', '12', '13', '14', '15', '16'],
        ['17', '18', '19', '20', '21', '22', '23'],
        ['24', '25', '26', '27', '28', '29', '30'],
        ['31', '1-', '2-', '3-', '4-', '5-', '6-'],
      ], 'October', '2010').then(() => {

        dispatchKey(fixture, LEFT_ARROW);
        dispatchKey(fixture, LEFT_ARROW);
        return expectCalendar(fixture, [
          ['26-', '27-', '28-', '29-', '*30-', '1', '2'],
          ['3', '4', '5+', '6', '7', '8', '9'],
          ['10', '11', '12', '13', '14', '15', '16'],
          ['17', '18', '19', '20', '21', '22', '23'],
          ['24', '25', '26', '27', '28', '29', '30'],
          ['31', '1-', '2-', '3-', '4-', '5-', '6-'],
        ], 'October', '2010');
      }).then(() => {

        dispatchKey(fixture, UP_ARROW);
        return expectCalendar(fixture, [
          ['29-', '30-', '31-', '1', '2', '3', '4'],
          ['5', '6', '7', '8', '9', '10', '11'],
          ['12', '13', '14', '15', '16', '17', '18'],
          ['19', '20', '21', '22', '23', '24', '25'],
          ['26', '27', '28+', '29', '*30', '1-', '2-'],
        ], 'September', '2010');
      }).then(() => {

        dispatchKey(fixture, RIGHT_ARROW);
        return expectCalendar(fixture, [
          ['29-', '30-', '31-', '1', '2', '3', '4'],
          ['5', '6', '7', '8', '9', '10', '11'],
          ['12', '13', '14', '15', '16', '17', '18'],
          ['19', '20', '21', '22', '23', '24', '25'],
          ['26', '27', '28', '29+', '*30', '1-', '2-'],
        ], 'September', '2010');
      });
    }));

    it('will be able to activate appropriate edge day', async(() => {
      const fixture = createTestComponent();

      dispatchKey(fixture, HOME);
      expectCalendar(fixture, [
        ['29-', '30-', '31-', '1+', '2', '3', '4'],
        ['5', '6', '7', '8', '9', '10', '11'],
        ['12', '13', '14', '15', '16', '17', '18'],
        ['19', '20', '21', '22', '23', '24', '25'],
        ['26', '27', '28', '29', '*30', '1-', '2-'],
      ], 'September', '2010').then(() => {

        dispatchKey(fixture, END);
        return expectCalendar(fixture, [
          ['29-', '30-', '31-', '1', '2', '3', '4'],
          ['5', '6', '7', '8', '9', '10', '11'],
          ['12', '13', '14', '15', '16', '17', '18'],
          ['19', '20', '21', '22', '23', '24', '25'],
          ['26', '27', '28', '29', '*30+', '1-', '2-'],
        ], 'September', '2010');
      });
    }));

    it('will be able to select active day', () => {
      const fixture = createTestComponent();

      dispatchKey(fixture, DOWN_ARROW);
      dispatchKey(fixture, LEFT_ARROW);
      dispatchKey(fixture, LEFT_ARROW);
      expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
      dispatchKey(fixture, ENTER);
      expect(fixture.componentInstance.dateChange).toHaveBeenCalledWith(new Date(2010, 9, 5));
    });
  });

  it('should render `Today` based on input', () => {
    currentDate = new Date(2014, 9, 23); // 23 October 2014
    jasmine.clock().mockDate(currentDate);

    const fixture = createTestComponent(`
      <ngl-datepicker [date]="date" (dateChange)="dateChange($event)" [showToday]="showToday"></ngl-datepicker>
    `);
    fixture.componentInstance.showToday = true;
    fixture.detectChanges();

    const todayEl = getTodayButton(fixture);
    expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
    todayEl.click();
    expect(fixture.componentInstance.dateChange).toHaveBeenCalledWith(currentDate);

    fixture.componentInstance.showToday = false;
    fixture.detectChanges();
    expect(getTodayButton(fixture)).toBeFalsy();
  });

  it('should support custom month and day names', async(() => {
    jasmine.clock().mockDate(new Date(2005, 10, 9)); // 9 November 2005

    const fixture = createTestComponent(`
      <ngl-datepicker [date]="date" [monthNames]="customMonths" [dayNamesShort]="customDays" showToday="false"></ngl-datepicker>
    `);
    expectCalendar(fixture, [
      ['29-', '30-', '31-', '1', '2', '3', '4'],
      ['5', '6', '7', '8', '9', '10', '11'],
      ['12', '13', '14', '15', '16', '17', '18'],
      ['19', '20', '21', '22', '23', '24', '25'],
      ['26', '27', '28', '29', '*30+', '1-', '2-'],
    ], 'Sep', '2010').then(() => {
      expect(getDayHeaders(fixture.nativeElement)).toEqual([ 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7' ]);
    });
  }));

  it('should support custom week start', async(() => {
    const fixture = createTestComponent(`
      <ngl-datepicker [date]="date" [firstDayOfWeek]="firstDayOfWeek" showToday="false"></ngl-datepicker>
    `);

    expectCalendar(fixture, [
      ['30-', '31-', '1', '2', '3', '4', '5'],
      ['6', '7', '8', '9', '10', '11', '12'],
      ['13', '14', '15', '16', '17', '18', '19'],
      ['20', '21', '22', '23', '24', '25', '26'],
      ['27', '28', '29', '*30+', '1-', '2-', '3-'],
    ], 'September', '2010').then(() => {
      expect(getDayHeaders(fixture.nativeElement)).toEqual([ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]);

      fixture.componentInstance.firstDayOfWeek = 2;
      expectCalendar(fixture, [
        ['31-', '1', '2', '3', '4', '5', '6'],
        ['7', '8', '9', '10', '11', '12', '13'],
        ['14', '15', '16', '17', '18', '19', '20'],
        ['21', '22', '23', '24', '25', '26', '27'],
        ['28', '29', '*30+', '1-', '2-', '3-', '4-'],
      ], 'September', '2010').then(() => {
        expect(getDayHeaders(fixture.nativeElement)).toEqual([ 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon' ]);
      });
    });
  }));

  it('should handle `firstDayOfWeek` as string attribute', async(() => {
    const fixture = createTestComponent(`<ngl-datepicker [date]="date" firstDayOfWeek="1" showToday="false"></ngl-datepicker>`);

    expectCalendar(fixture, [
      ['30-', '31-', '1', '2', '3', '4', '5'],
      ['6', '7', '8', '9', '10', '11', '12'],
      ['13', '14', '15', '16', '17', '18', '19'],
      ['20', '21', '22', '23', '24', '25', '26'],
      ['27', '28', '29', '*30+', '1-', '2-', '3-'],
    ], 'September', '2010').then(() => {
      expect(getDayHeaders(fixture.nativeElement)).toEqual([ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]);
    });
  }));

  it('should handle when first day of week is after first day of month', async(() => {
    const fixture = createTestComponent(`
      <ngl-datepicker [date]="date" [firstDayOfWeek]="firstDayOfWeek" showToday="false"></ngl-datepicker>
    `, false);

    fixture.componentInstance.firstDayOfWeek = 3;
    expectCalendar(fixture, [
      ['1', '2', '3', '4', '5', '6', '7'],
      ['8', '9', '10', '11', '12', '13', '14'],
      ['15', '16', '17', '18', '19', '20', '21'],
      ['22', '23', '24', '25', '26', '27', '28'],
      ['29', '*30+', '1-', '2-', '3-', '4-', '5-'],
    ], 'September', '2010').then(() => {
      expect(getDayHeaders(fixture.nativeElement)).toEqual([ 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue' ]);

      fixture.componentInstance.firstDayOfWeek = 4;
      expectCalendar(fixture, [
        ['26-', '27-', '28-', '29-', '30-', '31-', '1'],
        ['2', '3', '4', '5', '6', '7', '8'],
        ['9', '10', '11', '12', '13', '14', '15'],
        ['16', '17', '18', '19', '20', '21', '22'],
        ['23', '24', '25', '26', '27', '28', '29'],
        ['*30+', '1-', '2-', '3-', '4-', '5-', '6-'],
      ], 'September', '2010').then(() => {
        expect(getDayHeaders(fixture.nativeElement)).toEqual([ 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed' ]);
      });
    });
  }));

  describe('disabled dates', () => {

    let fixture;

    beforeEach(() => {
      fixture = createTestComponent(`<ngl-datepicker [date]="date" (dateChange)="dateChange($event)" [dateDisabled]="dateDisabled"></ngl-datepicker>`, false);

      fixture.componentInstance.dateDisabled = (d: Date) => {
        const day = d.getDay();
        // Disable Saturday and Sunday
        return day === 0 || day === 6;
      };
      fixture.detectChanges();
    });

    it('should be defined via input callback', () => {
      expectCalendar(fixture, [
        ['29-', '30-', '31-', '1', '2', '3', '4-'],
        ['5-', '6', '7', '8', '9', '10', '11-'],
        ['12-', '13', '14', '15', '16', '17', '18-'],
        ['19-', '20', '21', '22', '23', '24', '25-'],
        ['26-', '27', '28', '29', '*30+', '1-', '2-'],
      ], 'September', '2010').then(() => {
        fixture.componentInstance.dateDisabled = null;
        fixture.detectChanges();

        expectCalendar(fixture, [
          ['29-', '30-', '31-', '1', '2', '3', '4'],
          ['5', '6', '7', '8', '9', '10', '11'],
          ['12', '13', '14', '15', '16', '17', '18'],
          ['19', '20', '21', '22', '23', '24', '25'],
          ['26', '27', '28', '29', '*30+', '1-', '2-'],
        ], 'September', '2010');
      });
    });

    it('should not be selected via click', () => {
      const days = getDayElements(fixture.nativeElement);
      days[6].click(); // 4th
      expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
    });

    it('should not be selected via today button', () => {
      jasmine.clock().mockDate(new Date(2013, 7, 11)); // Sunday

      const todayEl = getTodayButton(fixture);
      todayEl.click();
      fixture.detectChanges();
      expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();

      // Move current view to today though
      expectCalendar(fixture, [
        ['28-', '29-', '30-', '31-', '1', '2', '3-'],
        ['4-', '5', '6', '7', '8', '9', '10-'],
        ['11+-^', '12', '13', '14', '15', '16', '17-'],
        ['18-', '19', '20', '21', '22', '23', '24-'],
        ['25-', '26', '27', '28', '29', '30', '31-'],
      ], 'August', '2013');
    });
  });

  describe('`min`', () => {
    it('should disable appropriate dates', () => {
      const fixture = createTestComponent(`<ngl-datepicker [date]="date" [min]="min"></ngl-datepicker>`);
      expectCalendar(fixture, [
        ['29-', '30-', '31-', '1-', '2-', '3-', '4-'],
        ['5-', '6-', '7-', '8-', '9-', '10-', '11-'],
        ['12', '13', '14', '15', '16', '17', '18'],
        ['19', '20', '21', '22', '23', '24', '25'],
        ['26', '27', '28', '29', '*30+', '1-', '2-'],
      ], 'September', '2010');
    });

    it('should not allow move to earlier view ', () => {
      const fixture = createTestComponent(`<ngl-datepicker [date]="date" [min]="min"></ngl-datepicker>`);
      fixture.componentInstance.date = new Date(2009, 0, 1);
      expectCalendar(fixture, [
        ['29-', '30-', '31-', '1-', '2-', '3-', '4-'],
        ['5-', '6-', '7-', '8-', '9-', '10-', '11-'],
        ['12+', '13', '14', '15', '16', '17', '18'],
        ['19', '20', '21', '22', '23', '24', '25'],
        ['26', '27', '28', '29', '30', '1-', '2-'],
      ], 'September', '2010');
    });

    it('should disable previous month button', () => {
      const fixture = createTestComponent(`<ngl-datepicker [date]="date" [min]="min"></ngl-datepicker>`);
      expect(getPreviousButton(fixture.nativeElement).disabled).toBe(true);

      fixture.componentInstance.min = null;
      fixture.detectChanges();
      expect(getPreviousButton(fixture.nativeElement).disabled).toBe(false);
    });

    it('should define minimum year on select menu', () => {
      const fixture = createTestComponent(`<ngl-datepicker [date]="date" [min]="min"></ngl-datepicker>`);
      expectYearOptions(fixture.nativeElement, 2010, 2015);

      fixture.componentInstance.min = new Date(1800, 10, 9);
      fixture.detectChanges();
      expectYearOptions(fixture.nativeElement, 1800, 2015);
    });
  });

  describe('`max`', () => {
    it('should disable appropriate dates', () => {
      const fixture = createTestComponent(`<ngl-datepicker [date]="date" [max]="max"></ngl-datepicker>`);
      fixture.componentInstance.date = new Date(2010, 9, 15); // 15 October 2010
      expectCalendar(fixture, [
        ['26-', '27-', '28-', '29-', '30-', '1', '2'],
        ['3', '4', '5', '6', '7', '8', '9'],
        ['10', '11', '12', '13', '14', '*15+', '16'],
        ['17', '18', '19', '20', '21', '22', '23'],
        ['24', '25', '26-', '27-', '28-', '29-', '30-'],
        ['31-', '1-', '2-', '3-', '4-', '5-', '6-'],
      ], 'October', '2010');
    });

    it('should not allow move to later view ', () => {
      const fixture = createTestComponent(`<ngl-datepicker [date]="date" [max]="max"></ngl-datepicker>`);
      fixture.componentInstance.date = new Date(2019, 0, 1);
      expectCalendar(fixture, [
        ['26-', '27-', '28-', '29-', '30-', '1', '2'],
        ['3', '4', '5', '6', '7', '8', '9'],
        ['10', '11', '12', '13', '14', '15', '16'],
        ['17', '18', '19', '20', '21', '22', '23'],
        ['24', '25+', '26-', '27-', '28-', '29-', '30-'],
        ['31-', '1-', '2-', '3-', '4-', '5-', '6-'],
      ], 'October', '2010');
    });

    it('should disable next month button', () => {
      const fixture = createTestComponent(`<ngl-datepicker [date]="date" [max]="max"></ngl-datepicker>`);
      expect(getNextButton(fixture.nativeElement).disabled).toBe(false);

      fixture.componentInstance.date = new Date(2010, 9, 15); // 15 October 2010
      fixture.detectChanges();
      expect(getNextButton(fixture.nativeElement).disabled).toBe(true);

      fixture.componentInstance.max = null;
      fixture.detectChanges();
      expect(getNextButton(fixture.nativeElement).disabled).toBe(false);
    });

    it('should define maximum year on select menu', () => {
      const fixture = createTestComponent(`<ngl-datepicker [date]="date" [max]="max"></ngl-datepicker>`);
      expectYearOptions(fixture.nativeElement, 1905, 2010);

      fixture.componentInstance.max = new Date(2100, 10, 9);
      fixture.detectChanges();
      expectYearOptions(fixture.nativeElement, 1905, 2100);
    });
  });

  describe('i18n', () => {
    registerLocaleData(localeFr);

    beforeEach(() => TestBed.configureTestingModule({
      providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
    }));

    it('should change day names, month names and first day of week', () => {
      const fixture = createTestComponent();
      expectCalendar(fixture, [
        ['30-', '31-', '1', '2', '3', '4', '5'],
        ['6', '7', '8', '9', '10', '11', '12'],
        ['13', '14', '15', '16', '17', '18', '19'],
        ['20', '21', '22', '23', '24', '25', '26'],
        ['27', '28', '29', '*30+', '1-', '2-', '3-'],
      ], 'septembre', '2010');
      expect(getDayHeaders(fixture.nativeElement)).toEqual(['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.']);
    });
  });
});


@Component({
  template: `<ngl-datepicker [date]="date" (dateChange)="dateChange($event)" showToday="false"></ngl-datepicker>`,
})
export class TestComponent {
  date = new Date(2010, 8, 30); // 30 September 2010
  showToday: boolean;
  dateChange = jasmine.createSpy('dateChange');
  firstDayOfWeek = 1;

  customMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  customDays = [ 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7' ];

  dateDisabled: (date: Date) => boolean;
  min = new Date(2010, 8, 12); // 12 September 2010;
  max = new Date(2010, 9, 25); // 25 October 2010
}
