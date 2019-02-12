# <ngl-checkbox>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[label]` | input label | string - TemplateRef | |
| `[error]` | error message | string | |

Highlights label as a required (does not perform any validation) based onto `<input>`'s `required` property.


# <ngl-checkbox-toggle>

Same API as `<ngl-checkbox>` plus the below:

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[enabledText]` | label for the *enabled* state | string | 'Enabled' |
| `[disabledText]` | label for the *disabled* state | string | 'Disabled' |


# <ngl-checkbox-button>

Same API as `<ngl-checkbox>` but SLDS doesn't support `[error]`.


# `<fieldset ngl-checkbox-group>`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[label]` | input label | string - TemplateRef | |
| `[error]` | error message | string | |
| `[required]` | highlights as a required field (does not perform any validation) | boolean | false |
| `[type]` | UX pattern to display | 'list' / 'button' | 'list' |
