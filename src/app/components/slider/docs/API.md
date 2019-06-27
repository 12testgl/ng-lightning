### <ngl-slider>
#### NglSlider

Also supports `[(ngModel)]` and `[formControl]`, instead of `[(value)]`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[value]` | Value of the slider. | number | |
| `[min]` | The minimum value that the slider can have. | number | 0 |
| `[max]` | The maximum value that the slider can have. | number | 100 |
| `[step]` | The granularity the slider can step through values. | number | 1 |
| `[vertical]` | Whether the slider will be displayed vertically. | boolean | false |
| `[disabled]` | Whether the slider is disabled. | boolean | false |
| `[size]` | Determines the size of the slider. | 'xx-small' \| 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| 'xx-large' | |
| `[label]` | Label that appears above the slider. | string \| TemplateRef | |
| `[error]` | Message to display when there is in an error state. | string \| TemplateRef | |
| `(valueChange)` | Emits when the value of the slider changes. | EventEmitter<number> | |
