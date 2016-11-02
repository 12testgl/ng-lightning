# `<ngl-datepicker>`

### Input

  * `date: Date`: Currently selected date.
  * `showToday: boolean = true`: Whether to show `Today` option.
  * `monthNames = ['January', 'February', ...]`: Month names.
  * `dayNamesShort = ['Sun', 'Mon', ...]`: Short form of weekdays.
  * `dayNamesLong = ['Sunday', 'Monday', ...]`: Long form of weekdays.
  * `firstDayOfWeek: number = 0`: First day of the week. Sunday = 0, Monday = 1, ...

### Output

  * `dateChange: EventEmitter<Date>`: Selected date.
