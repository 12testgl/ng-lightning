import { ComponentFixture } from '@angular/core/testing';

export function dispatchFixtureKeyEvent(fixture: ComponentFixture<any>, predicate: any, key: string, indexOf: number = -1) {
  const { debugElement } = fixture;
  const _debugElement = indexOf > -1 ? debugElement.queryAll(predicate)[indexOf] : debugElement.query(predicate);
  const event = document.createEvent('KeyboardEvent');
  event.initEvent('', true, true);
  _debugElement.triggerEventHandler(key, event);
}

/** Utility to dispatch any event on a Node. */
export function dispatchEvent(node: Node | Window, event: string | Event): Event {
  if (typeof event === 'string') {
    event = createHTMLEvent(event);
  }
  node.dispatchEvent(event);
  return event;
}

/** Shorthand to dispatch a keyboard event with a specified key code. */
export function dispatchKeyboardEvent(node: Node, type: string, keyCode: number, target?: Element):
    KeyboardEvent {
  return dispatchEvent(node, createKeyboardEvent(type, keyCode, target)) as KeyboardEvent;
}

function createHTMLEvent(type: string) {
  const evt = document.createEvent('HTMLEvents');
  evt.initEvent(type, true, true);
  return evt;
}

/** Dispatches a keydown event from an element. */
function createKeyboardEvent(type: string, keyCode: number, target?: Element, key?: string) {
  const event = document.createEvent('KeyboardEvent') as any;
  const originalPreventDefault = event.preventDefault;

  // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
  if (event.initKeyEvent) {
    event.initKeyEvent(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
  } else {
    event.initKeyboardEvent(type, true, true, window, 0, key, 0, '', false);
  }

  // Webkit Browsers don't set the keyCode when calling the init function.
  // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
  Object.defineProperties(event, {
    keyCode: { get: () => keyCode },
    key: { get: () => key },
    target: { get: () => target }
  });

  // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
  event.preventDefault = function () {
    Object.defineProperty(event, 'defaultPrevented', { get: () => true });
    return originalPreventDefault.apply(this, arguments);
  };

  return event;
}
