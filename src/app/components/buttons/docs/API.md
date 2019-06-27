### [nglButton]
#### NglButton

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[variant]` | Appearance of the button. |  'base' \| 'neutral' \| 'brand' \| 'outline-brand' \| 'destructive' \| 'text-destructive' \| 'inverse' \| 'success' | 'neutral' |
| `[iconName]` | LDS name of the icon in `utility:info` format. | string | |
| `[iconPosition]` | Position of the icon with respect to `ng-content`. | 'left' \| 'right' | 'left' |


### [nglButtonStateful]
#### NglButtonStateful

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[state]` | Whether button is in selected state or not. | boolean | |
| `[variant]` | Appearance of the button. |  'brand' \| 'destructive' \| 'inverse' \| 'neutral' \| 'success' \| 'text' | 'neutral' |
| `(stateChange)` | Emits the inverted state when clicked. |  boolean | |


### <ngl-state-on>
#### NglButtonStateOn

### <ngl-state-off>
#### NglButtonStateOff

### <ngl-state-hover>
#### NglButtonStateHover

Content children of `nglButtonStateful`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[iconName]` | LDS name of the icon in `utility:info` format. | string | |
