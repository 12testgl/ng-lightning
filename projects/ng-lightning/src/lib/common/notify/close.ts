import { Directive, Inject, Input } from '@angular/core';
@Directive()
export abstract class NglCommonNotifyClose {

  @Input() set dismissible(dismissible: boolean) {
    this.host.dismissible = dismissible;
  }

  constructor(@Inject('host') private host: any) {
    this.host.dismissible = true;
  }

}
