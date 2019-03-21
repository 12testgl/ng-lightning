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
