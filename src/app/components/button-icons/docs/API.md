# [nglButtonIcon]

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[iconName]` | LDS name of the icon in `utility:info` format. | string | |
| `[alternativeText]` | Text to describe what happens when clicked, not what the icon looks like. | string | |
| `[variant]` | Appearance of the button. |  'bare' \| 'container' \| 'brand' \| 'border' \| 'border-filled' \| 'inverse' \| 'border-inverse' | 'border' |
| `[size]` | Bare variant can be displayed in three other sizes— `large`, `small`, `x-small`. Variants can be displayed in three smaller sizes—`small` \| `x-small` \| `xx-small`. | string | |
| `[svgClass]` | Extra class(es) you want to apply to SVG element. | ngClass | |


# [nglButtonIconStateful]

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[selected]` | Whether button is in selected state or not. | boolean | |
| `[iconName]` | LDS name of the icon in `utility:info` format. | string | |
| `[alternativeText]` | Text to describe what happens when clicked, not what the icon looks like. | string | |
| `[variant]` | Appearance of the button. |  'border' \| 'border-filled' \| 'border-inverse' | 'border' |
| `[size]` | Can be displayed in three smaller sizes. | 'small' \| 'x-small' \| 'xx-small' | |
| `(selectedChange)` | Emits the inverted state of selected when clicked. | boolean | |
