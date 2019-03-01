# [nglButton]

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[variant]` | appearance of the button |  `base`, `neutral`, `brand`, `outline-brand`, `destructive`, `text-destructive`, `inverse`, `success` | `neutral` |
| `[iconName]` | LDS name of the icon in `utility:info` format | string | |
| `[iconPosition]` | LDS name of the icon in `utility:info` format | string | `left` |


# [nglButtonStateful]

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[state]` | whether button is in selected state or not | boolean | |
| `[variant]` | appearance of the button |  `brand`, `destructive`, `inverse`, `neutral`, `success`, `text` | `neutral` |
| `(stateChange)` | emits the inverted state when clicked |  boolean | |


# <ngl-state-on>, <ngl-state-of>, <ngl-state-hover>

Content children of `nglButtonStateful`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[iconName]` | LDS name of the icon in `utility:info` format | string | |
