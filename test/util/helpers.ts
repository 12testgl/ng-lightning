/**
 * Testing helpers
 */
import {addProviders, ComponentFixture} from '@angular/core/testing';
import {provideNglConfig} from '../../src/config/config';

// Default configuration for every TestComponent
beforeEach(() => {
  addProviders([provideNglConfig()]);
});

export function dispatchKeyEvent(fixture: ComponentFixture<any>, predicate: any, key: string, indexOf: number = -1) {
  const { debugElement} = fixture;
  const _debugElement = indexOf > -1 ? debugElement.queryAll(predicate)[indexOf] : debugElement.query(predicate);
  const event = document.createEvent('KeyboardEvent');
  event.initEvent('', true, true);
  _debugElement.triggerEventHandler(key, event);
}

export function selectElements(element: HTMLElement, selector: string): HTMLElement[] {
  return [].slice.call(element.querySelectorAll(selector));
}

/** 
 * IE11 doesn't support dispatching new Event directly -- must utilize document.createEvent method.
 */
export function dispatchMouseEvent(el: HTMLElement, type: string): void {
   const event = document.createEvent('MouseEvent');
    event.initMouseEvent(
        type,
        true, true,
        window, null,
        0, 0, 0, 0,
        false, false, false, false,
        0, null
    );
    el.dispatchEvent(event);
}

export function dispatchFocusEvent(el: HTMLElement, type: 'focus' | 'blur'): void {
  const event = document.createEvent('Event');
  event.initEvent(type, true, true);
  el.dispatchEvent(event);
}
