### <ngl-alert>
#### NglAlert

`<ngl-alert>` is exported to the containing scope as `nglAlert`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[variant]` | Severity of the displayed message for theming. | string | |
| `[assistiveText]` | Component's assistive text element. | string | |
| `[closeButtonAssistiveText]` | Visually hidden label for the close button. | string | 'Close' |
| `[duration]` | Number of milliseconds after which, the close event will be triggered with an emitted reason of `'timeout'`. | number | |
| `[iconName]` | Helper icon in 'utility:info' format. | string | |
| `[dismissible]` | It can suppress the appearence of close button, even if `(close)` is bound. | boolean | |
| `(close)` | Whenever the close button is clicked, with the `$event` set to `'button'`. If not bound or if `dismissible` is false, the close button will not be shown. | string | |
