// https://netbasal.com/how-to-add-angular-component-input-validation

const noop = () => {};

export function isRequired(target: any, prop: string) {

  const NG_ON_ONIT_NAME = 'ngOnInit';

  /** ngOnInit might not be implemented by this component */
  const ngOnInitClone: Function | null = target[NG_ON_ONIT_NAME];

  Object.defineProperty(target, NG_ON_ONIT_NAME, {
    value: function() {

      if (!(prop in this)) {
        throw Error(`[ng-lightning] ${target.constructor.name}: ${prop} is required, but was not provided`);
      }

      // Calling the original ngOnInit with its original context
      (ngOnInitClone || noop).call(this);
    }
  });
}
