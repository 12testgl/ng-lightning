import {Component, Input, Output, EventEmitter, OnChanges, ElementRef, Renderer2, Optional, ChangeDetectionStrategy, HostBinding} from '@angular/core';
import {trigger, state, animate, transition, style} from '@angular/animations';
import {NglNotificationClose} from './notification-close';
import {replaceClass, isInt} from '../util/util';

@Component({
  selector: 'ngl-notification',
  templateUrl: './notification.pug',
  host: {
    '[class.slds-notify]': 'true',
    'role': 'alert',
  },
  styles: [
    `:host.slds-notify--alert {
      display: block;
    }`,
  ],
  animations: [
    trigger('visibilityChanged', [
    state('void' , style({ opacity: 0, transform: 'translateY(-100%)' })),
    state('1' , style({ opacity: 1, transform: 'translateY(0)' })),
    transition('void <=> 1', animate('.5s')),
    ]),
  ],
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
  @Input() set timeout(timeout: number) {
    this.clearTimeout();
    if (isInt(timeout) && timeout >= 0) {
      this.currentTimeout = setTimeout(() => this.close('timeout'), +timeout);
    }
  }

  @HostBinding('@visibilityChanged') get visibility(){
    return this.visible;
  }

  @Output('nglNotificationClose') closeEventEmitter = new EventEmitter<string>();

  severity: string;
  showClose = false;
  private currentTimeout: any = null;
  private visible = false;

  constructor(public element: ElementRef, public renderer: Renderer2, @Optional() notificationClose: NglNotificationClose) {
    this.showClose = !!notificationClose;
    this.visible = true;
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
    this.clearTimeout();
    this.visible = false;
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    this.closeEventEmitter.emit(reason);
  }

  ngOnDestroy() {
    this.clearTimeout();
  }

  private clearTimeout() {
    if (this.currentTimeout !== null) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }
  }
}
