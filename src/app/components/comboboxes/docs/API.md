# <ngl-combobox>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[variant]` | changes purpose/styles of the input | 'base' \| 'lookup' | `base` |
| `[selection]` | accepts a string or array of values that are currently selected | `any` | |
| `[open]` | whether menu with options is visible | `boolean` | `false` |
| `[multiple]` | allows multiple selections | `boolean` | `false` |
| `[label]` | input label | `string` \| `TemplateRef` | |
| `[visibleLength]` | determines the height of the menu based on SLDS classes | `5` \| `7` \| `10` \| `null` | `5` |
| `[loading]` | whether options are loading | `boolean` | `false` |
| `[loadingMore]` | whether you are dynamically loading in more items to the menu | `boolean` | `false` |
| `[closeOnSelection]` | whether a mouse/keyboard selection should close menu | `boolean` | `true` |
| `[options]` | array of *unique* items in the menu | `string[]` \| `NglComboboxOptionItem[]` | |
| `[selectionValueFn]` | function that calculates diplayed value on the input element  | `(string[]): string` | `Function` |
| `(openChange)` | emits event when the menu should show or hide. | `EventEmitter<boolean>` | |
| `(selectionChange)` | emits with the newly selected items based on user's actions | `EventEmitter` | |

# <input nglCombobox>

Used inside `ngl-combobox`.