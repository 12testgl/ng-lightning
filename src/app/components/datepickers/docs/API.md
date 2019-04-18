# <ngl-datepicker>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[date]` | Currently selected date. | Date | |
| `[showToday]` | Whether to show `Today` option. | boolean | true |
| `[monthNames]` | Month names. | string[] | ['January', 'February', ...] |
| `[dayNamesShort]` | Short form of weekdays. | string[] | ['Sun', 'Mon', ...] |
| `[dayNamesLong]` | Long form of weekdays. | string[] | ['Sunday', 'Monday', ...] |
| `[firstDayOfWeek]` | First day of the week. Sunday = 0, Monday = 1, ... | number | 0 |
| `(dateChange)` | Emits date upon selection. | EventEmitter<Date> | |


# <ngl-datepicker-input>

Also supports `[(ngModel)]` and `[formControl]`, instead of `[(value)]`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[value]` | The date value. | Date | |
| `[dropdownAlign]` | Aligns the right or left side of the dropdown menu with the respective side of the input. | 'left' \| 'right' | 'left' |
| `[label]` | Label that appears above the input. | string \| TemplateRef<any> | |
| `[placeholder]` | Placeholder of input. | string | |
| `[format]` | Pre-defined format to use. | 'big-endian' \| 'little-endian' \| 'middle-endian' | 'big-endian' |
| `[delimiter]` | Delimiter to use on pre-defined formats. | string | '/' |
| `[disabled]` | Disable input and calendar. | boolean | false |
| `[readonlyInput]` | Whether input is readonly and calendar is available for date selection. | boolean | false |
| `(valueChange)` | Emits the selected date. | EventEmitter<Date> | |

You can also use all the `<ngl-datepicker>` inputs, that will be proxied to to popup calendar.

# NGL_DATEPICKER_CONFIG<NglDatepickerConfig>

Injection token that can be used to specify default options.

Available properties: `format`, `delimiter`, `dropdownAlign`, `showToday`, `monthNames`, `dayNamesShort`, `dayNamesLong`