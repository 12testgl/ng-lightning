### <ngl-avatar>
#### NglAvatar

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[src]` | Image source attribute. | string | |
| `[size]` | Size of the icon in fallback case. | 'x-small' \| 'small' \| 'medium' \| 'large' | 'medium' |
| `[variant]` | Avatar variants to apply. | 'square' \| 'circle' | 'square' |
| `[alternativeText]` | Assistive text for accessibility. | string | |
| `[initials]` | If image is unavailable, this text will be shown instead. | string | |
| `[fallbackIconName]` | `initials` fallback relies on this for its background color. Names are written in the format `standard:account` where `standard` is the category, and `account` is the specific icon to be displayed. | string | |
| `(error)` | Emits when image fails to load. In this case initials will be displayed, if set. | EventEmitter | |
