### <ngl-toast>
#### NglToast

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[variant]` | Severity of the displayed message for theming. | 'error' \| 'info' \| 'success' \| 'warning' | 'info' |
| `[iconName]` | Helper icon in `'utility:info'` format. | string | |
| `[duration]` | Number of milliseconds after which, the close event will be triggered with an emitted reason of `'timeout'`. | number | |
| `[assistiveText]` | Assistive text for accessibility. | string | |
| `[closeButtonAssistiveText]` | Visually hidden label for the close button. | string | 'Close' |
| `[dismissible]` | It can suppress the appearance of close button, even if `(close)` is bound. | boolean | |
| `(close)` | Emits the close event reason, like `'button'` and `'timeout'`. If not bound or if `dismissible` is false, the close button will not be shown. | EventEmitter<string> | |

### Export API

`<ngl-toast>` is exported to the containing scope as `nglToast`.

| Name | Description | Type |
| -------- | ----------- | ---- |
| `close` | Emits the close event and passes the provided `reason` string. | (reason?: string) => void |
