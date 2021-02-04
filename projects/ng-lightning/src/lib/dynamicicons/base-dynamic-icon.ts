import { Input, Directive } from '@angular/core';

@Directive()
export class BaseDynamicIconComponent {

  @Input() alternativeText: string;

}
