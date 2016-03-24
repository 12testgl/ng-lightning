import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglNotificationService} from './notification.service';

describe('`NglNotificationService`', () => {

  it('should pile up messages, of all supported types, in the correct order and be able to clear them', testAsync(({fixture, done}) => {
    fixture.detectChanges();

    const types = ['toast', 'alert'];
    const severities = ['info', 'success', 'warning', 'error', 'offline'];

    types.forEach(type => {
      severities.forEach(severity => {
        fixture.componentInstance.notificationService[type][severity]({content: 'test'});
      });
    });

    const messages = fixture.componentInstance.notificationService.getMessages();

    // message count

    expect(messages.length).toBe(types.length * severities.length);

    // message order

    let index = 0;
    types.forEach(type => {
      severities.forEach(severity => {
        expect(messages[index].type).toBe(type);
        expect(messages[index].severity).toBe(severity === 'info' ? null : severity);
        index++;
      });
    });

    // remove specific message

    const firstMessageId = messages[0].id;
    fixture.componentInstance.notificationService.removeMessage(firstMessageId);

    expect(fixture.componentInstance.notificationService.getMessages().map((message: any) => message.id)).not.toContain(firstMessageId);

    // clear messages

    fixture.componentInstance.notificationService.clearMessages();

    expect(fixture.componentInstance.notificationService.getMessages().length).toBe(0);

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
  template: '',
  providers: [NglNotificationService],
})
export class TestComponent {
  constructor(public notificationService: NglNotificationService) {}
}
