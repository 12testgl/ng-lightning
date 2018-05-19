import { Directive } from '@angular/core';
import { NglAlert } from './alert';
import { NglCommonNotifyClose } from '../common/notify/close';

@Directive({
  selector: 'ngl-alert[close]',
})
export class NglAlertClose extends NglCommonNotifyClose {

  constructor(alert: NglAlert) {
    super(alert);
  }

}
