Lookup is an autocomplete `<ngl-combobox>`, with variation `lookup`.

You should hook into input value changes, in order to provide suggestions based on what the user is typing.

**Keyboard interactions**:

  * Character keys filter the list
  * `Up` and `Down` arrow keys cycle through the available options in the list and update the input field’s `aria-activedescendant` value
  * `Enter` key selects highlighted option and collapses the results list
  * `Escape` key collapses the results list
