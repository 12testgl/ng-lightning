import { Component, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[nglInternalOutlet]',
  template: `
    <ng-template [ngIf]="isTemplate()" [ngIfElse]="str">
      <ng-template [ngTemplateOutlet]="nglInternalOutlet" [ngTemplateOutletContext]="nglInternalOutletContext"></ng-template>
    </ng-template>
    <ng-template #str>{{nglInternalOutlet}}</ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglInternalOutlet {
  @Input() nglInternalOutlet: string | TemplateRef<any>;

  @Input() nglInternalOutletContext: any ;

  isTemplate() {
    return this.nglInternalOutlet instanceof TemplateRef;
  }
}
