# <ngl-rating>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[rate]` | Current rate value. | number | 0 |
| `[max]` | Maximum rate number. | number | 5 |
| `[isReadonly]` | Prevent user's interaction. | boolean | false |
| `[icon]` | LDS icon used to display the available rates. | string | 'favorite' |
| `[size]` | Icon sizes. | string | |
| `[colorOn]` | Color when active. | string | '#FFB75D' |
| `[colorOff]` | Color when not active. | string | '#54698D' |
| `(rateChange)` | The clicked rate. | EventEmitter<number> | |
| `(hover)` | The currently hovered rate. | EventEmitter<number> | |

# <ng-template nglRatingIcon>

| Variable | Description | Type |
| -------- | ----------- | ---- |
| `$implicit` | Whether icon should be active or not. | boolean |
| `index` | Icon index. | number |
| `fill` | Fill percentage. An integer value between 0 and 100. | number |
