export function getInputElement(element: Element): HTMLInputElement {
  return <HTMLInputElement>element.querySelector('input');
}

export function getLabelElement(element: Element): HTMLLabelElement {
  return <HTMLLabelElement>element.querySelector('label');
}

export function getErrorElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('.slds-form-element__help');
}

export function getRequiredElement(element: Element): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('abbr');
}
