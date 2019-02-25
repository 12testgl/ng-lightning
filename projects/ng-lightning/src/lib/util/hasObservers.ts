import { isDevMode, EventEmitter } from '@angular/core';

export function hasObservers(output: string) {

  function propDecorator(target: any, propName: string): void {
    const privatePropName = `$$__${propName}`;

    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(`[ng-lightning]: The prop "${privatePropName}" already exists, it will be overridden by ${propName} decorator.`);
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    });

    Object.defineProperty(target, propName, {
      get(): boolean {
        if (isDevMode() && !(this[output] instanceof EventEmitter)) {
          throw Error(`[ng-lightning] ${target.constructor.name}: "${output}" is not an EventEmitter`);
        }
        return (<EventEmitter<any>>this[output]).observers.length > 0;
      },
      set(): void {
        console.warn(`[ng-lightning] ${target.constructor.name}: "${propName}" is readonly and cannot be assigned a value`);
      }
    });
  }

  return propDecorator;
}
