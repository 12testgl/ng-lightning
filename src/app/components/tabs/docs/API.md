# <ngl-tabset>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[selected]` | Desired tab to activate. This can be either the `index` number, the tab's id *(id="myid")* or the actual `NglTab` instance. | string \| number \| NglTab | |
| `[variant]` | Whether the tabset is [scoped](https://www.lightningdesignsystem.com/components/tabs#scoped) or not. | 'default' \| 'scoped' | 'default' |
| `(selectedChange)` | Emits when a tab is selected. | EventEmitter<NglTab> | |


# <ng-template ngl-tab> | <ngl-tab>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[label]` | Header text. | string | |
| `[id]` | Tab's ID in case you want to preselect or programmatically manipulate it. | string | |
| `(activate)` | Emits when a tab is becomes active. | EventEmitter<NglTab> | |
| `(deactivate)` | Emits when a tab is becomes inactive. | EventEmitter<NglTab> | |


### Only when using `<ngl-tab>`

  * `<ng-template ngl-tab-label>`: contains header's content
  * `<ng-template ngl-tab-content>`: contains tabs's content
