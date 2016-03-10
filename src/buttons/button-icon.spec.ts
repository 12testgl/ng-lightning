import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglButtonIcon} from './button-icon';

function getButtonElement(element: Element): HTMLButtonElement {
  return <HTMLButtonElement>element.querySelector('button');
}

describe('`nglButtonIcon`', () => {

  it('should render the default button icon when the type is empty', testAsync(
    `<button [nglButtonIcon]="style"></button>`, ({fixture, done}) => {
      fixture.detectChanges();

      const button = getButtonElement(fixture.nativeElement);
      expect(button).toHaveCssClass('slds-button');
      expect(button).toHaveCssClass('slds-button--icon');
      done();
    }));

    it('should render the default button icon when the type is empty and not bind', testAsync(
    `<button nglButtonIcon=""></button>`, ({fixture, done}) => {
      fixture.detectChanges();

      const button = getButtonElement(fixture.nativeElement);
      expect(button).toHaveCssClass('slds-button--icon');
      done();
    }));

  it('should render bordered button icon', testAsync(
    `<button [nglButtonIcon]="style"></button>`, ({fixture, done}) => {
      fixture.detectChanges();

      const {componentInstance} = fixture;
      const button = getButtonElement(fixture.nativeElement);

      componentInstance.style = undefined;
      fixture.detectChanges();
      expect(button).toHaveCssClass('slds-button--icon-border');

      componentInstance.style = null;
      fixture.detectChanges();
      expect(button).toHaveCssClass('slds-button--icon-border');

      done();
    }));

  it('should render the bordered button icon when the is not set but bind', testAsync(
    `<button [nglButtonIcon]></button>`, ({fixture, done}) => {
        fixture.detectChanges();

        const button = getButtonElement(fixture.nativeElement);
        expect(button).toHaveCssClass('slds-button--icon-border');
        done();
    }));

  it('should render the bordered button icon when the is not set at all', testAsync(
    `<button nglButtonIcon></button>`, ({fixture, done}) => {
        fixture.detectChanges();

        const button = getButtonElement(fixture.nativeElement);
        expect(button).toHaveCssClass('slds-button--icon-border');
        done();
    }));
});

// Shortcut function to use instead of `injectAsync` for less boilerplate on each `it`
function testAsync(html: string, fn: Function) {
  return injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return new Promise((done: Function) => {
      tcb.overrideTemplate(TestComponent, html).createAsync(TestComponent).then((fixture) => fn({fixture, done}));
    });
  });
}

@Component({
  directives: [NglButtonIcon],
  template: '',
})
export class TestComponent {
  style: string = '';
}
