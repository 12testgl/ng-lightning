### <ngl-combobox>
#### NglCombobox

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[variant]` | Changes purpose/styles of the input. | 'base' \| 'lookup' | 'base' |
| `[selection]` | Accepts a string or array of values that are currently selected. | any | |
| `[open]` | Whether menu with options is visible. | boolean | false |
| `[multiple]` | Allows multiple selections. | boolean | false |
| `[label]` | Input label. | string \| TemplateRef | |
| `[visibleLength]` | Determines the height of the menu based on SLDS classes. If set to 0 it will display all available options. | 0 \| 5 \| 7 \| 10 | 5 |
| `[loading]` | Whether options are loading. | boolean | false |
| `[loadingMore]` | Whether you are dynamically loading in more items to the menu. | boolean | false |
| `[closeOnSelection]` | Whether a mouse/keyboard selection should close menu. | boolean | true |
| `[options]` | Array of *unique* items in the menu. | string[] \| NglComboboxOptionItem[] | |
| `[selectionValueFn]` | Function that calculates diplayed value on the input element. | (string[]): string | Function |
| `[loadingLabel]` | Text added to loading spinner. | string | 'Loading' |
| `[noOptionsFound]` | Text message that renders when no matches found. | string | 'No matches found.' |
| `[removeSelectedLabel]` | Text for removing single selected option. | string | 'Remove selected option' |
| `(openChange)` | Emits event when the menu should show or hide. | EventEmitter<boolean> | |
| `(selectionChange)` | Emits with the newly selected items based on user's actions. | EventEmitter | |

### <input nglCombobox>
#### NglComboboxInput

Used inside `ngl-combobox`.

### NGL_COMBOBOX_CONFIG<NglComboboxConfig>

Injection token that can be used to specify default options.

Available properties: `loadingLabel`, `noOptionsFound`, `removeSelectedLabel`