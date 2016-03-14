import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglButtonGroup} from './button-group';
import {NglButtonRadio} from './button-radio';

function getOptionElements(element: HTMLElement): HTMLButtonElement[] {
  return [].slice.call(element.querySelectorAll('button'));
}

function getGroupElement(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.querySelector('div');
}

describe('`ButtonGroup`', () => {
  describe('should have the proper number of options', () => {
    it('', testAsync(({fixture, done}) => {
      fixture.detectChanges();

      var elements = getOptionElements(fixture.nativeElement);
      var group = getGroupElement(fixture.nativeElement);

      expect(group).toHaveCssClass('slds-button-group');
      expect(group.getAttribute('role')).toBe('group');
      expect(elements.length).toEqual(fixture.componentInstance.options.length + 1);
      done();
    }));

    it('when adding a new option', testAsync(({fixture, done}) => {
      fixture.componentInstance.options.push('op5');
      fixture.detectChanges();

      var elements = getOptionElements(fixture.nativeElement);
      expect(elements.length).toEqual(fixture.componentInstance.options.length + 1);
      done();
    }));

    it('when removing an option', testAsync(({fixture, done}) => {
      fixture.componentInstance.options.slice(0, 1);
      fixture.detectChanges();

      var elements = getOptionElements(fixture.nativeElement);
      expect(elements.length).toEqual(fixture.componentInstance.options.length + 1);
      done();
    }));

  });

  describe('should have proper option selected', () => {
    const defaultActiveClass = 'slds-button--brand';

    it('with default active class', testAsync(({fixture, done}) => {
      fixture.componentInstance.selected = 'op2';
      fixture.detectChanges();

      var elements = getOptionElements(fixture.nativeElement);
      expect(elements[0]).not.toHaveCssClass(defaultActiveClass);
      expect(elements[1]).toHaveCssClass(defaultActiveClass);
      expect(elements[2]).not.toHaveCssClass(defaultActiveClass);
      expect(elements[3]).not.toHaveCssClass(defaultActiveClass);

      done();
    }));

    it('when selected value is an object', testAsync(({fixture, done}) => {
      fixture.componentInstance.options.push({});
      fixture.componentInstance.selected = fixture.componentInstance.options[fixture.componentInstance.options.length - 1];
      fixture.detectChanges();

      var elements = getOptionElements(fixture.nativeElement);
      expect(elements[elements.length - 1]).toHaveCssClass(defaultActiveClass);
      done();
    }));

    it('when switching selected option', testAsync(({fixture, done}) => {
      fixture.componentInstance.selected = 'op1';
      fixture.detectChanges();

      fixture.componentInstance.selected = 'op3';
      fixture.detectChanges();

      var elements = getOptionElements(fixture.nativeElement);
      expect(elements[2]).toHaveCssClass(defaultActiveClass);
      done();
    }));

    it('with different active class if provided', testAsync(({fixture, done}) => {
      fixture.componentInstance.selected = 'op1';
      fixture.detectChanges();

      var elements = getOptionElements(fixture.nativeElement);
      expect(elements[0]).toHaveCssClass(fixture.componentInstance.activeClass);
      done();
    }));
  });

  describe('should have proper selected value', () => {

    it('when a button is clicked', testAsync(({fixture, done}) => {
      fixture.detectChanges();

      var elements = getOptionElements(fixture.nativeElement);
      elements[2].click();

      expect(fixture.componentInstance.selected).toBe('op3');
      done();
    }));

    it('when a new option is added', testAsync(({fixture, done}) => {
      fixture.componentInstance.selected = 'op1';
      fixture.detectChanges();

      fixture.componentInstance.options.push('op5');
      fixture.detectChanges();

      expect(fixture.componentInstance.selected).toBe('op1');
      done();
    }));

    it('when a different option from selected is removed', testAsync(({fixture, done}) => {
      fixture.componentInstance.selected = 'op1';
      fixture.detectChanges();

      fixture.componentInstance.options.splice(0, 1);
      fixture.detectChanges();

      expect(fixture.componentInstance.selected).toBe('op1');
      done();
    }));

    it('when a selected option is removed', testAsync(({fixture, done}) => {
      fixture.componentInstance.selected = 'op2';
      fixture.detectChanges();

      fixture.componentInstance.options.splice(0, 1);
      fixture.detectChanges();

      spyOn(fixture.componentInstance, 'selectedChange').and.callFake((event: any) => {
        expect(event).toBe(undefined);
        done();
      });
    }));
  });
});

// Shortcut function to use instead of `injectAsync` for less boilerplate on each `it`
function testAsync(fn: Function, html: string = null) {
  return injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return new Promise((done: Function) => {
      if (html) {
        tcb = tcb.overrideTemplate(TestComponent, html);
      }
      tcb.createAsync(TestComponent).then((fixture) => fn({ fixture, done}));
    });
  });
}

@Component({
  directives: [NglButtonGroup, NglButtonRadio],
  template: `
    <div nglButtonGroup [selected]="selected" (selectedChange)="selectedChange($event)">
      <button type="button" nglButton="neutral" nglButtonRadio="op1" [activeClass]="activeClass">Op 1</button>
      <button *ngFor="#option of options" nglButton="neutral" [nglButtonRadio]="option">{{option}}</button>
    </div>
  `,
})
export class TestComponent {
  selected = 'op1';
  options = ['op2', 'op3', { }];
  activeClass = 'slds-button--destructive';

  selectedChange(event: any) {
    this.selected = event;
  }
}
