# <ngl-pill>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[icon]` | NglIcon component or iconName to show on the left of the pill. | string \| TemplateRef | |
| `[avatar]` | NglAvatar component or src to show on the left of the pill. | string \| TemplateRef | |
| `[hasError]` | Applies the error style to the component. | boolean | |
| `[removable]` | Whether or not to override the remove button's visibility, if `(remove)` is bound. | boolean | true |
| `[removeTitle]` | Remove button title (and assistive text). | string | 'Remove' |
| `(remove)` | The event emitted when the remove button is clicked. | MouseEvent | |
