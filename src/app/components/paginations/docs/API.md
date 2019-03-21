# <ngl-pagination>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[page]` | Current page number. | number | |
| `[total]` | Total number of **items** in all pages. | number | |
| `[limit]` | Limit number of visible pages. A value less than 1 indicates that there is no limitation. | number |  0 |
| `[boundaryLinks]` | Whether to display First and Last buttons. | boolean | false |
| `[boundaryNumbers]` | Define how many of the first and last page numbers to always show. | boolean | 0 |
| `[perPage]` | Maximum number of items per page. | boolean | 10 |
| `[firstText]` | Displayed string for First button. | string | 'First' |
| `[previousText]` | Displayed string for Previous button. | string | 'Previous' |
| `[previousText]` | Displayed string for Previous button. | string | 'Previous' |
| `[nextText]` | Displayed string for Next button. | string | 'Next' |
| `[lastText]` | Displayed string for Last button. | string | 'Last' |
| `(pageChange)` | The page clicked in order to select. | EventEmitter<number> | |

# Export API

| Name | Description | Type |
| -------- | ----------- | ---- |
| `start` | Starting row index of current page. | number |
| `end` | Last row index of current page. | number |
