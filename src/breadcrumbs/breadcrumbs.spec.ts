import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglBreadcrumbs} from './breadcrumbs';
import {NglBreadcrumb} from './breadcrumb';

function getBreadcrumbsLinks(element: HTMLElement): HTMLLinkElement[] {
 return [].slice.call(element.querySelectorAll('ol > li > a'));
}

function getAssistiveText(element: HTMLElement): HTMLElement[] {
  return [].slice.call(element.querySelectorAll('nav > p'));
}

describe('Breadcrumbs Component', () => {

  it('should always have an assistive text', testAsync(({fixture, done}) => {
    fixture.detectChanges();

    const assistiveText = getAssistiveText(fixture.nativeElement);

    expect(assistiveText).toHaveText('You are here:');
    done();
  }));

  it('should have an overridable assistive text', testAsync(({fixture, done}) => {
    fixture.detectChanges();

    const assistiveText = getAssistiveText(fixture.nativeElement);

    expect(assistiveText).toHaveText('Here you are:');
    done();
  }, `<ngl-breadcrumbs [assistive-text]="text"></ngl-breadcrumbs>`));

  it('should have anchor across the path', testAsync(({fixture, done}) => {
    fixture.detectChanges();

    const anchors: HTMLLinkElement[] = getBreadcrumbsLinks(fixture.nativeElement);

    expect(anchors.length).toBe(2);

    expect(anchors[0].getAttribute('href')).toBe('/there');
    expect(anchors[1].getAttribute('href')).toBe('/here');

    expect(anchors[0].textContent).toBe('There I was!');
    expect(anchors[1].textContent).toBe('Here I am!');
    done();
  }, `<ngl-breadcrumbs [assistive-text]="text">
        <ngl-breadcrumb link-to="/there">There I was!</ngl-breadcrumb>
        <ngl-breadcrumb link-to="/here">Here I am!</ngl-breadcrumb>
      </ngl-breadcrumbs>`));

});

// Shortcut function to use instead of `injectAsync` for less boilerplate on each `it`
function testAsync(fn: Function, html: string = null) {
  return injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return new Promise((done: Function) => {
      tcb.overrideTemplate(TestComponent, html).createAsync(TestComponent).then((fixture) => fn({ fixture, done}));
    });
  });
}

@Component({
  directives: [NglBreadcrumbs, NglBreadcrumb],
  template: `<ngl-breadcrumbs></ngl-breadcrumbs>`,
})
export class TestComponent {
  text: string = 'Here you are:';
}
