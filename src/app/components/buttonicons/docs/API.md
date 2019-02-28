# [nglButtonIcon]

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[iconName]` | LDS name of the icon in `utility:info` format | string | |
| `[alternativeText]` | text to describe what happens when clicked, not what the icon looks like | string | |
| `[variant]` | appearance of the button |  `bare`, `container`, `brand`, `border`, `border-filled`, `inverse`, `border-inverse` | `border` |
| `[size]` | bare variant can be displayed in three other sizes— `large`, `small`, `x-small`. variants can be displayed in three smaller sizes—`small`, `x-small`, `xx-small` | string | |


# [nglButtonIconStateful]

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[selected]` | whether button is in selected state or not | boolean | |
| `[iconName]` | LDS name of the icon in `utility:info` format | string | |
| `[alternativeText]` | text to describe what happens when clicked, not what the icon looks like | string | |
| `[variant]` | appearance of the button |  `border`, `border-filled`, `border-inverse` | `border` |
| `[size]` | can be displayed in three smaller sizes | `small`, `x-small`, `xx-small` | |
| `(selectedChange)` | emits the inverted state of selected when clicked | boolean | |
