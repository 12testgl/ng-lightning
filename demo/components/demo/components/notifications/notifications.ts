import {Component} from 'angular2/core';
import {NGL_DIRECTIVES, NglNotificationService} from '../../../../../dist/ng-lightning';

@Component({
    selector: 'demo-notifications',
    directives: [NGL_DIRECTIVES],
    template: require('./notifications.html'),
    providers: [NglNotificationService],
})
export class DemoNotifications {
  private inlineNotificationsState = <any>{
    toast: {
      info: false,
      success: false,
      warning: false,
      error: false,
      offline: false,
    },
    alert: {
      info: false,
      success: false,
      warning: false,
      error: false,
      offline: false,
    },
  };
  private type: string = 'toast';
  private severity: string = 'info';
  private appLevel = true;

  constructor(private notificationService: NglNotificationService) {
    this.notificationService.setGlobalCloseDelay(5000);
  }

  getInlineNotification(type: string, severity: string) {
    return `Inline ${severity[0].toUpperCase()}${severity.substr(1)} ${type === 'toast' ? 'Toast' : 'Alert'}`;
  }

  addOrToggle() {
    if (!this.appLevel) {
      this.inlineNotificationsState[this.type][this.severity] = !this.inlineNotificationsState[this.type][this.severity];
      return;
    }
    this.notificationService[this.type][this.severity]({
      content: this.severity[0].toUpperCase() + this.severity.substr(1) + ` ${this.type === 'toast' ? 'Toast' : 'Alert'}`,
    });
  }

  clear() {
    this.notificationService.clearMessages();
    Object.keys(this.inlineNotificationsState).forEach(type => {
      Object.keys(this.inlineNotificationsState[type]).forEach(severity => {
        this.inlineNotificationsState[type][severity] = false;
      });
    });
  }
}
