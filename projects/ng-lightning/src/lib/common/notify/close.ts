import { Input, Directive } from '@angular/core';

@Directive()
export class NglCommonNotifyClose {

  @Input() set dismissible(dismissible: boolean) {
    this.host.dismissible = dismissible;
  }

  constructor(private host: any) {
    this.host.dismissible = true;
  }

}
