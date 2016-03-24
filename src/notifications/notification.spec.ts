import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglNotification} from './notification';
import {NglNotificationService} from './notification.service';
import {provideNglConfig} from '../config/config';

describe('`NglNotification`', () => {

  it('should show one page level notification and a container-local notification', testAsync(({fixture, done}) => {
    fixture.detectChanges();

    fixture.componentInstance.notificationService['toast']['info']({content: 'Hello! (page level)'});

    fixture.detectChanges();

    const pageLevelNotificationWrapper = fixture.nativeElement.childNodes[0].childNodes[2];
    const pageLevelNotification = pageLevelNotificationWrapper.childNodes[1];
    const pageLevelNotificationContent = pageLevelNotification.childNodes[3]; // message.content

    expect(pageLevelNotificationWrapper).toHaveCssClass('slds-notify_container');
    expect(pageLevelNotification).toHaveCssClass('slds-notify--toast');
    expect(pageLevelNotification).not.toHaveCssClass('slds-theme--alert-texture');
    expect(pageLevelNotificationContent).toHaveText('Hello! (page level)');

    const containerLocalNotificationWrapper = fixture.nativeElement.childNodes[1];
    const containerLocalNotification = containerLocalNotificationWrapper.childNodes[3];
    const containerLocalNotificationContent = containerLocalNotification.childNodes[1];

    expect(containerLocalNotificationWrapper.hasAttribute('inline')).toBe(true);
    expect(containerLocalNotificationWrapper.getAttribute('type')).toBe('alert');
    expect(containerLocalNotificationWrapper.getAttribute('severity')).toBe('success');
    expect(containerLocalNotification).toHaveCssClass('slds-notify--alert');
    expect(containerLocalNotification).toHaveCssClass('slds-theme--alert-texture');
    expect(containerLocalNotificationContent).toHaveText('Hello! (container-local)');

    done();
  }));

});

// Shortcut function to use instead of `injectAsync` for less boilerplate on each `it`
function testAsync(fn: Function, html: string = null) {
  return injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return new Promise((done: Function) => {
      if (html) {
        tcb = tcb.overrideTemplate(TestComponent, html);
      }
      tcb.createAsync(TestComponent).then(fixture => fn({ fixture, done})).catch(err => console.error(err.stack));
    });
  });
}

@Component({
  template: [
    '<ngl-notification></ngl-notification>',
    '<ngl-notification inline type="alert" severity="success">',
    '<h2>Hello! (container-local)</h2>',
    '</ngl-notification>',
  ].join(''),
  directives: [NglNotification],
  providers: [provideNglConfig(), NglNotificationService],
})
export class TestComponent {
  constructor(public notificationService: NglNotificationService) {}
}
