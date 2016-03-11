# `[nglDropdown]`

### Input

  * `nglDropdown?: any[]`: The array of values corresponding to selected dropdown items.
  * `open?: boolean`: Whether the dropdown should be open or not.

### Output

  * `openChange: EventEmitter<boolean>`: Whether the dropdown is open.
  * `select: EventEmitter<{value: any, isSelected: boolean}>`: Emitted when an item is (de)selected.

# `[nglDropdownTrigger]`

### Input

  * *None*

### Output

  * *None*

# `[nglDropdownItem]`

### Input

  * `nglDropdownItem?: any`: The value associated with this item.
