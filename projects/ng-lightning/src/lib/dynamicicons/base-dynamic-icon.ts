import { Directive, Input } from '@angular/core';
@Directive()
export abstract class BaseDynamicIconComponent {

  @Input() alternativeText: string;

}
