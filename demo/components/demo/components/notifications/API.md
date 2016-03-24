# `<ngl-notification>`

### Input

  * `inline?: boolean`: Whether this notification is a container-level notification (_can be specified without a value_).
  * `type?: 'toast' | 'alert'`: Whether this notification is a **Toast** or an **Alert** (_only used when `inline === true`_).
  * `severity?: 'info' | 'success' | 'warning' | 'error' | 'offline'`:  The severity of this notification (_only used when `inline === true`_).

# `NglNotificationService`

### API

  * `NglNotificationService.{'toast'|'alert'}{'info'|'success'|'warning'|'error'|'offline'}(message: IBareMessage);`
  * `IBareMessage`:
    `{`
      `enableManualClose?: boolean; // Whether we can close this notification by clicking on an X icon`
      `closeDelay?: number; // Optional close time-out in milliseconds`
      `content: string; // Any html template as a string`
    `}`
