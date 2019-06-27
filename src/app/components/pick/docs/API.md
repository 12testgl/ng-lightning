### [nglPick]
#### NglPick

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[nglPick]` | Currently selected option value. | any | |
| `[nglPickMultiple]` | Whether multiple options can be selected. In this case `nglPick` value should be an array or object. | boolean | false |
| `[nglPickActiveClass]` | Define a custom class to be used when any of the options is selected. | string | |
| `(nglPickChange)` | The value that is going to be selected when a `nglPickOption` is selected. | EventEmitter | |
| `(nglOptionDestroyed)` | Emits the value of any *selected* option that is destroyed (ie `*ngIf`). | EventEmitter | |

### [nglPickOption]
#### NglPickOption

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[nglPickOption]` | Option's value. | any | |
| `[nglPickActiveClass]` | Define a custom class to be used when the option is selected. Overrides parent's `nglPick` active class if defined. | string | |
