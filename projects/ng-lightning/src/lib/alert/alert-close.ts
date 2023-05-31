import { Directive } from '@angular/core';
import { NglAlert } from './alert';
import { NglCommonNotifyClose } from '../common/notify/close';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ngl-alert[close]',
})
export class NglAlertClose extends NglCommonNotifyClose {

  constructor(alert: NglAlert) {
    super(alert);
  }

}
