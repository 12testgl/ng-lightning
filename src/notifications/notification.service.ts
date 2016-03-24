import {Injectable} from 'angular2/core';
import {uniqueId} from '../util/util';

export interface IBareMessage {
  enableManualClose?: boolean;
  closeDelay?: number;
  content: string;
}

export interface ITaggedMessage {
  id: string;
}

export interface IMessageDecoration {
  type: NglNotificationType;
  severity: NglNotificationSeverity;
  closeTimeout?: any;
}

export type INglNotificationMessage = IBareMessage & IMessageDecoration & ITaggedMessage;
export type NglNotificationType = 'toast' | 'alert';
export type NglNotificationSeverity = 'info' | 'success' | 'warning' | 'error' | 'offline';

const _toastNotificationType = <NglNotificationType>'toast';
const _alertNotificationType = <NglNotificationType>'alert';

@Injectable()
export class NglNotificationService {
  toast = <any>{
    info: (message: IBareMessage) => this.appendMessage(message, {type: _toastNotificationType, severity: null}),
    success: (message: IBareMessage) => this.appendMessage(message, {type: _toastNotificationType, severity: 'success'}),
    warning: (message: IBareMessage) => this.appendMessage(message, {type: _toastNotificationType, severity: 'warning'}),
    error: (message: IBareMessage) => this.appendMessage(message, {type: _toastNotificationType, severity: 'error'}),
    offline: (message: IBareMessage) => this.appendMessage(message, {type: _toastNotificationType, severity: 'offline'}),
  };
  alert = <any>{
    info: (message: IBareMessage) => this.appendMessage(message, {type: _alertNotificationType, severity: null}),
    success: (message: IBareMessage) => this.appendMessage(message, {type: _alertNotificationType, severity: 'success'}),
    warning: (message: IBareMessage) => this.appendMessage(message, {type: _alertNotificationType, severity: 'warning'}),
    error: (message: IBareMessage) => this.appendMessage(message, {type: _alertNotificationType, severity: 'error'}),
    offline: (message: IBareMessage) => this.appendMessage(message, {type: _alertNotificationType, severity: 'offline'}),
  };

  private messages: INglNotificationMessage[] = [];
  private globalCloseDelay: number;

  setGlobalCloseDelay(delay: number) {
    this.globalCloseDelay = delay;
  }

  clearGlobalCloseDelay() {
    this.globalCloseDelay = null;
  }

  getMessages() {
    return this.messages.slice();
  }

  clearMessages() {
    this.messages = this.messages.filter(message => (clearTimeout(message.closeTimeout), false));
  }

  removeMessage(id: string) {
    this.messages = this.messages.filter(m => {
      if (m.id === id) {
        clearTimeout(m.closeTimeout);
      }
      return m.id !== id;
    });
  }

  private appendMessage(message: IBareMessage, decoration: IMessageDecoration) {
    const decoratedMessage = this.decorateMessage(message, decoration);
    this._doAppendMessage(decoratedMessage);
  }

  private _doAppendMessage(message: INglNotificationMessage) {
    // set defaults
    if (typeof(message.enableManualClose) === 'undefined') {
      message.enableManualClose = true;
    }
    // sanitize the message
    message.content = message.content.replace(/(?:<|&lt;)script.+?(?:>|&gt;)/ig, '');
    // check if it needs to be merged to the last message
    let messageForDelayedRemoval = message;
    let isMerged = false;
    if (this.messages.length) {
      const lastMessage = this.messages[this.messages.length - 1];
      if (lastMessage.type === message.type && lastMessage.severity === message.severity) {
        clearTimeout(lastMessage.closeTimeout);
        lastMessage.content += '<br>' + message.content;
        messageForDelayedRemoval = lastMessage;
        isMerged = true;
      }
    }
    // check if we need to close the message after the specified delay
    const closeDelay = +message.closeDelay || +this.globalCloseDelay;
    if (!isNaN(closeDelay) && closeDelay > 0) {
      messageForDelayedRemoval.closeTimeout = setTimeout(() => this.removeMessage(messageForDelayedRemoval.id), closeDelay);
    }
    if (isMerged) {
      return;
    }
    // add the message if it has not been merged with the previous one
    message.id = uniqueId();
    this.messages.push(message);
  }

  private decorateMessage(message: IBareMessage, decoration: IMessageDecoration): INglNotificationMessage {
    return Object.assign(<INglNotificationMessage>message, decoration);
  }
}
