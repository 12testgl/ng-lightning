# `<ngl-toast>`

### Input

  * `variant?: string`: The severity of the displayed message for theming.
  * `assistiveText?: string`:  The component's assistive text element.
  * `closeButtonAssistiveText?: string = 'Close'`: This is a visually hidden label for the close button.
  * `duration?: number`: The number of milliseconds after which, the close event will be triggered with an emitted reason of `'timeout'`.
  If anything other than a positive integer is provided, any active timeout will be canceled.
  * `iconName?: string`: Helper icons in 'utility:info' format.
  * `dismissible?: boolean`: It can suppress the appearence of close button, even if `(close)` is bound.

### Output

  * `close: EventEmitter<string>`: Emits the close event, whenever the close button is clicked,
  with the `$event` set to `'button'`. If not bound or if `dismissible` is false, the close button will not be shown.

### API <em style="font-size: .75rem;">(`<ngl-toast>` is exported to the containing scope as `nglToast`)</em>

  * `close(reason?: string)`: Emits the close event and passes the provided `reason` string.
