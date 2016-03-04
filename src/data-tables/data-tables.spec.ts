import {it, describe, expect, injectAsync, TestComponentBuilder, FunctionWithParamTokens} from 'angular2/testing';
import {Component, provide} from 'angular2/core';
import {NglDataTable, IHead} from './data-table';
import {NGL_CONFIG} from '../config/config';

function getTableElement(element: Element): HTMLTableElement {
  return <HTMLTableElement>element.querySelector('table');
}

function getHeaderElements(element: HTMLTableElement): NodeListOf<Element> {
  return <NodeListOf<Element>>element.querySelectorAll('thead tr th');
}

function getBodyElements(element: HTMLTableElement): NodeListOf<Element> {
  return <NodeListOf<Element>>element.querySelectorAll('tbody tr');
}

function getCellText(element: Element, cellIndex: number): string {
  return <string>element.querySelectorAll('td')[cellIndex].querySelector('span').textContent;
}

describe('Data Tables Component', () => {

  it('should render an empty table', testAsync((tcb: TestComponentBuilder) => {
    return createFixture(tcb, `<ngl-data-table></ngl-data-table>`).then((fixture) => {
      fixture.detectChanges();

      const table: HTMLTableElement = getTableElement(fixture.nativeElement);
      expect(table).toBeDefined();
      expect(table.classList.toString()).toEqual('slds-table slds-table--bordered');

      expect(getHeaderElements(table).length).toEqual(0);
      expect(getBodyElements(table).length).toEqual(0);
    });
  }));

  it('should render one record', testAsync((tcb: TestComponentBuilder) => {
    return createFixture(tcb, `<ngl-data-table [thead]="[{name: 'name'}]" [tbody]="[{name:'Peter'}]"></ngl-data-table>`).then((fixture) => {
      fixture.detectChanges();

      const table: HTMLTableElement = getTableElement(fixture.nativeElement);
      expect(table).toBeDefined();

      const headers = getHeaderElements(table);
      expect(headers.length).toEqual(1);
      expect(headers[0].textContent.trim()).toEqual('name');

      const records = getBodyElements(table);
      expect(records.length).toEqual(1);
      expect(getCellText(records[0], 0)).toEqual('Peter');
    });
  }));

  it('should render 10 record', testAsync((tcb: TestComponentBuilder) => {
    return createFixture(tcb, `<ngl-data-table [thead]="thead" [tbody]="tbody"></ngl-data-table>`).then((fixture) => {
      fixture.detectChanges();

      const table: HTMLTableElement = getTableElement(fixture.nativeElement);
      expect(table).toBeDefined();

      expect(getHeaderElements(table).length).toEqual(2);
      expect(getBodyElements(table).length).toEqual(10);
    });
  }));

  it('should depict changes to the data list', testAsync((tcb: TestComponentBuilder) => {
    return createFixture(tcb, `<ngl-data-table [thead]="thead" [tbody]="tbody"></ngl-data-table>`).then((fixture) => {
      fixture.detectChanges();

      const table: HTMLTableElement = getTableElement(fixture.nativeElement);
      expect(table).toBeDefined();

      expect(getBodyElements(table).length).toEqual(10);

      const {componentInstance} = fixture;

      componentInstance.tbody.push({name: 'Peter', surname: 'Pan'});
      fixture.detectChanges();

      expect(getBodyElements(table).length).toEqual(11);

      componentInstance.tbody.splice(10);
      fixture.detectChanges();

      expect(getBodyElements(table).length).toEqual(10);
    });
  }));

  it('should render the appropriate table type', testAsync((tcb: TestComponentBuilder) => {
    return createFixture(tcb, `<ngl-data-table [type]="type"></ngl-data-table>`).then((fixture) => {
      fixture.detectChanges();

      const table: HTMLTableElement = getTableElement(fixture.nativeElement);
      expect(table.classList.toString()).toEqual('slds-table slds-table--bordered');

      const {componentInstance} = fixture;

      componentInstance.type = 'scrollable';
      fixture.detectChanges();
      expect(table.classList.toString()).toEqual('slds-table slds-scrollable--x');

      componentInstance.type = 'stacked';
      fixture.detectChanges();
      expect(table.classList.toString()).toEqual('slds-table slds-table--bordered slds-max-medium-table--stacked');


      componentInstance.type = 'stacked-horizontal';
      fixture.detectChanges();
      expect(table.classList.toString()).toEqual('slds-table slds-table--bordered slds-max-medium-table--stacked-horizontal');

    });
  }));

  it('should decorate a sortable column with appropriate classes', testAsync((tcb: TestComponentBuilder) => {
    return createFixture(tcb, `<ngl-data-table [thead]="thead" [tbody]="tbody"></ngl-data-table>`).then((fixture) => {
      fixture.detectChanges();

      const table: HTMLTableElement = getTableElement(fixture.nativeElement);

      const surnameHead = getHeaderElements(table).item(1);
      expect(surnameHead.classList.toString()).toEqual('slds-is-sortable');

      const sortButton: HTMLButtonElement = <HTMLButtonElement>surnameHead.querySelector('button');
      expect(sortButton).toBeDefined();

      const use: SVGUseElement = <SVGUseElement>sortButton.querySelector('use');
      expect(use.attributes.getNamedItem('xlink:href').value).toEqual('assets/icons/utility-sprite/svg/symbols.svg#dash');
    });
  }));

  it('should decorate a sortable column with appropriate classes', testAsync((tcb: TestComponentBuilder) => {
    return createFixture(tcb,
      `<ngl-data-table (onSort)="sort($event)" [thead]="thead" [tbody]="tbody"></ngl-data-table>`)
      .then((fixture) => {
        return new Promise((done: Function) => {
          fixture.detectChanges();

          const {componentInstance} = fixture;
          const table: HTMLTableElement = getTableElement(fixture.nativeElement);

          const sortButton: HTMLButtonElement = <HTMLButtonElement>getHeaderElements(table).item(1).querySelector('button');

          spyOn(componentInstance, 'sort').and.callFake((header: IHead) => {
            expect(header.sorting.direction).toBe('none');
            expect(header.name).toBe('surname');
            done();
          });

          sortButton.click();
        });
      });
  }));
});

// Shortcut function to use instead of `injectAsync` for less boilerplate on each `it`
function testAsync(fn: Function): FunctionWithParamTokens {
  return injectAsync([TestComponentBuilder], fn);
}

function createFixture(tcb: TestComponentBuilder, html: string) {
  return tcb.overrideTemplate(TestComponent, html).createAsync(TestComponent);
}

@Component({
  directives: [NglDataTable],
  template: ``,
  providers: [provide(NGL_CONFIG, {useValue: {}})],
})
export class TestComponent {

  type: string;
  thead: IHead[] = [{name: 'name'}, {name: 'surname', sorting: {direction: 'none'}}];
  tbody: any[] = [
    {name: 'Peter', surname: 'Pan'},
    {name: 'Bilbo', surname: 'Baggins'},
    {name: 'Harry', surname: 'Potter'},
    {name: 'Froddo', surname: 'Baggins'},
    {name: 'Han', surname: 'Solo'},
    {name: 'Luke', surname: 'Skywalker'},
    {name: 'Peter', surname: 'Parker'},
    {name: 'Tony', surname: 'Stark'},
    {name: 'Marty', surname: 'Macfly'},
    {name: 'Indiana', surname: 'Jones'},
  ];

  sort(header: IHead) {
  }
}
