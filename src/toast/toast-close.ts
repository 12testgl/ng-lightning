import { Directive } from '@angular/core';
import { NglToast } from './toast';
import { NglCommonNotifyClose } from '../common/notify/close';

@Directive({
  selector: 'ngl-toast[close]',
})
export class NglToastClose extends NglCommonNotifyClose {

  constructor(toast: NglToast) {
    super(toast);
  }

}
