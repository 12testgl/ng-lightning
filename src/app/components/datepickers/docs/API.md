### <ngl-datepicker>
#### NglDatepicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[date]` | Currently selected date. | Date | |
| `[showToday]` | Whether to show `Today` option. | boolean | true |
| `[dateDisabled]` | Function that can be used to disable dates. | (date: Date) => boolean | |
| `[monthNames]` | Month names based on application locale. | string[] | e.g. ['January', 'February', ...] for `en-US` |
| `[dayNamesShort]` | Short form of weekdays based on application locale. | string[] | e.g. ['Sun', 'Mon', ...] for `en-US` |
| `[dayNamesLong]` | Long form of weekdays based on application locale. | string[] | e.g. ['Sunday', 'Monday', ...] for `en-US` |
| `[firstDayOfWeek]` | First day of the week based on application locale. Sunday = 0, Monday = 1, ... | number | e.g. 0 for `en-US` |
| `[min]` | Minimum selectable date. It will override `relativeYearFrom` if defined. | Date | |
| `[max]` | Maximum selectable date. It will override `relativeYearTo` if defined. | Date | |
| `[relativeYearFrom]` | Offset of year from current year, that can be the minimum option in the year selection dropdown. For example, 2019 - 100 = 1/1/1019 is minimum selectable date. | number | -100 |
| `[relativeYearTo]` | Offset of year from current year, that can be the maximum option in the year selection dropdown. For example, 2019 + 10 = 31/12/2029 is maximum selectable date. | number | 10 |
| `[todayLabel]` | Label of shortcut to select current date. | string | 'Today' |
| `[previousMonthLabel]` | Label for button to go to the previous month. | string | 'Previous Month' |
| `[nextMonthLabel]` | Label for button to go to the next month. | string | 'Next Month' |
| `(dateChange)` | Emits date upon selection. | EventEmitter<Date> | |


### <ngl-datepicker-input>
#### NglDatepickerInput

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
| `[openOnInputClick]` | Whether to open the datepicker when a mouse user clicks on the input. | boolean | true |
| `[selectDateLabel]` | Text for button to open calendar. | string | 'Select a date' |
| `(valueChange)` | Emits the selected date. | EventEmitter<Date> | |

You can also use all the `<ngl-datepicker>` inputs, that will be proxied to to popup calendar.

### NGL_DATEPICKER_CONFIG<NglDatepickerConfig>

Injection token that can be used to specify default options.

Available properties: `format`, `delimiter`, `dropdownAlign`, `showToday`, `monthNames`, `dayNamesShort`, `dayNamesLong`, `firstDayOfWeek`, `relativeYearFrom`, `relativeYearTo`, `openOnInputClick`, `todayLabel`, `previousMonthLabel`, `nextMonthLabel`