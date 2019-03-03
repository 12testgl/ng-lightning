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

export function ngClassCombine(ngClasses: string | string[] | Set<string> | { [klass: string]: any }, customClasses: { [klass: string]: any }) {
  if (!ngClasses) {
    return customClasses;
  }

  // Convert string and Set to array
  if (typeof ngClasses === 'string') {
    ngClasses = ngClasses.split(/\s+/);
  } else  if (ngClasses instanceof Set) {
    const a = [];
    ngClasses.forEach(v => a.push(v));
    ngClasses = a;
  }

  // Convert array to object
  if (Array.isArray(ngClasses)) {
    ngClasses = ngClasses.reduce((o: Object, klass: string) => {
      o[klass] = true;
      return o;
    }, {});
  }

  return {...ngClasses, ...customClasses};
}


/**
   * Check whether value is currently selected.
   *
   * @param selection The value(s) currently selected
   * @param value The value in test, whether is (part of) selection or not
   * @param multiple Whether selections can be have multiple values
   */
export function isOptionSelected(value: string | number | any, selection: any | any[], multiple: boolean): boolean {
  // Multiple
  if (multiple) {
    if (!selection) { return false; }
    return Array.isArray(selection) ? selection.indexOf(value) > -1 : !!selection[value];
  }

  // Single
  return value === selection;
}

export function addOptionToSelection(value: string | number | any, selection: any | any[], multiple: boolean) {
  let next: any;
  if (multiple) {
    if (!selection) {
      selection = [];
    }
    if (Array.isArray(selection)) {
      // Remove if already there or add to selection
      const index = selection.indexOf(value);
      next = index > -1
        ? [...selection.slice(0, index), ...selection.slice(index + 1)]
        : [...selection, value];
    } else {
      next = Object.assign({}, selection, { [value]: !selection[value] });
    }
  } else {
    next = selection === value ? null : value;
  }

  return next;
}

export function menuItemScroll (container, domItem, scrollPadding = 4) {
  if (
    domItem.offsetHeight - container.scrollTop + domItem.offsetTop >=
    container.offsetHeight
  ) {
    container.scrollTop =
      domItem.offsetHeight +
      domItem.offsetTop -
      container.offsetHeight +
      scrollPadding;
  } else if (domItem.offsetTop <= container.scrollTop) {
    container.scrollTop = domItem.offsetTop - scrollPadding;
  }
}

export function trapEvent(event: Event) {
  if (!event) { return; }
  event.preventDefault();
  event.stopPropagation();
}
