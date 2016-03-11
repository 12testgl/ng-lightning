Picklists offer a list of items that the user can choose from.

Add the `nglDropdown` directive to the `<div>` that wraps the dropdown list.

Use the `nglDropdownTrigger` directive to any child element,
usually a `<button>` or a `<a>`, to open or close the dropdown.

Add the `nglDropdownItem` directive on any child element that constitutes
a dropdown item, providing a unique value for that item.

This value is sent to the parent, so as to decide what actions to take.
E.g., the parent can decide to allow only a single item to be selected at any
one time or allow multiple items to be selected at the same time.
