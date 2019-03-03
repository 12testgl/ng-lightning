A component that provides a user with an input field that is either an autocomplete or readonly, accompanied with a listbox of static or dynamic options.

A Base Combobox is a readonly text input that allows a user to select an option from a pre-defined list of options. It does not allow free form user input, nor does it allow the user to modify the selected value. When more than one option has been selected, the value of the input is updated with the total number of selected items, such as "3 options selected". You can ovverride the default behavior using `selectionValueFn` input.

A Lookup Combobox allows user to select an option from a list, but that list can be affected by what the user types into the input of the Combobox. This can be useful when the list of options is very large or is asynchronously fetched from a service, as user input can start to display options that only match the text they have entered.

For more **examples** take a look at <a routerLink="/components/picklist">Picklist</a> and <a routerLink="/components/lookups">Lookups</a> sections.