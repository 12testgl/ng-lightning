import { TemplateRef } from '@angular/core';

export function isNonEmptyString(value: any): boolean {
  return typeof value === 'string' && value !== '';
}

export function isTemplateRef(value: any): boolean {
  return value instanceof TemplateRef;
}
