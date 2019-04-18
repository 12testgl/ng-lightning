A flexible and efficient datepicker that allows users to enter a date either through text input, or by choosing a date from the calendar.  It can be used either inline with `<ngl-datepicker>` component or as a popup on an input element with `<ngl-datepicker-input>` component.

User can utilize the `format` and `delimiter` options, in order to match it's formatting requirements for the input field. There are 3 options for pre-defined formats: `big-endian` (YYYY/MM/DD), `middle-endian` (MM/DD/YYY) and `little-endian` (DD/MM/YYYY).

**Keyboard interactions**:

  * `Left Arrow`: Move focus to the previous date.
  * `Right Arrow`: Move focus to the next date.
  * `Up Arrow`: Move focus to the same day of the previous week.
  * `Down Arrow`: Move focus to the same day of the following week.
  * `PageUp`: Move focus to the same date of the previous month. If that date does not exist, focus is placed on the last date of the month.
  * `PageDown`: Move focus to the same date of the following month. If that date does not exist, focus is placed on the last date of the month.
  * `Home`: Move to the first date of the month.
  * `End`: Move to the last date of the month.
  * `Enter`: Select current date.

**Keyboard interactions for `<ngl-datepicker-input>`**:
 
  * `Up Arrow/Down Arrow`: Open the datepicker and focus on active day.
  * `Esc`: Close datepicker without choosing a date.
 