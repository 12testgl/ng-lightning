import { ElementRef, Renderer2, SimpleChange } from '@angular/core';

// Check if given value is integer. Cast strings as potential integers as well.
// See: http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
export function isInt(value: any): boolean {
  if (isNaN(value)) {
    return false;
  }
  const x = parseFloat(value);
  // tslint:disable-next-line:no-bitwise
  return (x | 0) === x;
}

// Similar to `lodash.isobject`
export function isObject(value: any): boolean {
  const type = typeof value;
  return !!value && (type === 'object' || type === 'function');
}

// Generate a unique id (unique within the entire client session).
// Useful for temporary DOM ids.
let idCounter = 0;
export function uniqueId(prefix = 'uid') {
  return `ngl_${prefix}_${++idCounter}`;
}

export interface IReplaceClass {
  renderer: Renderer2;
  element: ElementRef;
}
export function replaceClass(instance: IReplaceClass, oldClass: string | string[], newClass?: string | string[]) {
  if (oldClass && oldClass !== newClass) {
    setClass(instance, oldClass, false);
  }
  if (newClass) {
    setClass(instance, newClass, true);
  }
}

function setClass(instance: IReplaceClass, klasses: string | string[], isAdd: boolean) {
  if (klasses) {
    (Array.isArray(klasses) ? klasses : [klasses]).forEach(k => {
      instance.renderer[isAdd ? 'addClass' : 'removeClass'](instance.element.nativeElement, k);
    });
  }
}

export function changeClass(prefix: string, change: SimpleChange, elRef: ElementRef, renderer: Renderer2, defaultValue?: string) {
  if (!change) {
    return;
  }

  const el = elRef.nativeElement;

  const previousValue = change.previousValue || defaultValue;
  if (!change.firstChange && previousValue) {
    renderer.removeClass(el, `${prefix}${previousValue}`);
  }

  const currentValue = change.currentValue || defaultValue;
  if (change.currentValue || defaultValue) {
    renderer.addClass(el, `${prefix}${currentValue}`);
  }
}
