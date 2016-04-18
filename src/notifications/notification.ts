import {Component, Input, Output, EventEmitter, OnChanges, ElementRef, Renderer, Optional, ChangeDetectionStrategy} from 'angular2/core';
import {NglNotificationClose} from './notification-close';
import {NglButtonIcon} from '../buttons/button-icon';
import {NglIcon} from '../icons/icon';
import {replaceClass} from '../util/util';

@Component({
  selector: 'ngl-notification',
  templateUrl: './notification.jade',
  directives: [NglButtonIcon, NglIcon],
  host: {
    '[class.slds-notify]': 'true',
    'role': 'alert',
  },
  styles: [`
    :host.slds-notify--alert {
      display: block;
    }
  `, ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'nglNotification',
})
export class NglNotification implements OnChanges {
  @Input() type: 'toast' | 'alert' = 'toast';
  @Input('severity') set setSeverity(severity: string) {
    this.severity = severity === 'info' ? null : severity;
  }
  @Input() assistiveText: string;
  @Input() closeAssistiveText: string;

  @Output('nglNotificationClose') closeEventEmitter = new EventEmitter<string>(false);

  private severity: string;
  private showClose = false;

  constructor(public element: ElementRef, public renderer: Renderer, @Optional() notificationClose: NglNotificationClose) {
    this.showClose = !!notificationClose;
  }

  ngOnChanges(changes: any) {
    const {type: changedType, setSeverity: changedSeverity} = changes;
    if (changedType) {
      const previousValue = typeof(changedType.previousValue) === 'string' ? changedType.previousValue : '';
      replaceClass(this, `slds-notify--${previousValue}`, `slds-notify--${changedType.currentValue}`);
    }
    if (changedSeverity) {
      const previousValue = typeof(changedSeverity.previousValue) === 'string' ? changedSeverity.previousValue : '';
      replaceClass(this, `slds-theme--${previousValue}`, changedSeverity.currentValue ? `slds-theme--${changedSeverity.currentValue}` : null);
    }
  }

  close(reason?: string, $event?: Event) {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    this.closeEventEmitter.emit(reason);
  }
}
