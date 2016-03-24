import {Component, Input} from 'angular2/core';
import {NglNotificationService, INglNotificationMessage, NglNotificationType} from './notification.service';
import {toBoolean} from '../util/util';
import {NglButtonIcon} from '../buttons/button-icon';
import {NglIconButton} from '../buttons/icon';

export {NglNotificationService} from './notification.service';

@Component({
  selector: 'ngl-notification',
  templateUrl: './notification.jade',
  directives: [NglButtonIcon, NglIconButton],
})
export class NglNotification {
  @Input('inline') set _inline(value: string) {
    this.inline = toBoolean(value);
  }
  @Input() type: NglNotificationType = 'toast';
  @Input() severity = <string>null;

  private inline = false;

  // injected from above to give service override control to the user
  constructor(private service: NglNotificationService) {}

  getMessages(): INglNotificationMessage[] {
    return this.service.getMessages();
  }

  /* *ngFor does not work with [ngClass] + classKeyedObjectReturningFunction() yet
  getClasses(message: INglNotificationMessage) {
    const classes: string[] = [`slds-notify--${message.type}`];
    if (message.type === 'alert') {
      classes.push('slds-theme--alert-texture');
    }
    if (message.severity) {
      classes.push(`slds-theme--${message.severity}`);
    }
    return Object.assign.apply(Object, [{}].concat(classes.map(klass => ({[klass]: true}))));
  }
  */

  getAssistiveDescription(messageOrSeverity: INglNotificationMessage | string) {
    if (!messageOrSeverity || !(<INglNotificationMessage>messageOrSeverity).severity) {
      return 'Info';
    }
    let messageOrSeverityProxy: any;
    if (typeof(messageOrSeverity) === 'string') {
      messageOrSeverityProxy = <string>messageOrSeverity;
      return messageOrSeverityProxy[0].toUpperCase() + messageOrSeverityProxy.substr(1);
    }
    messageOrSeverityProxy = <INglNotificationMessage>messageOrSeverity;
    return messageOrSeverityProxy.severity[0].toUpperCase() + messageOrSeverityProxy.severity.substr(1);
  }

  removeMessage(id: string) {
    this.service.removeMessage(id);
  }
}
