# `<ngl-tabs>`

### Input

  * `selected: string | number | NglTab`: The tab to activate. This can be either the `index` number, the tab's id *(nglTabId="myid")* or the actual `NglTab` instance.
  * `type?: 'default' | 'scoped' = 'default'`: Whether the tabset is [scoped](https://www.lightningdesignsystem.com/components/tabs#scoped) or not.
  * `titleCaps: boolean = true`: Whether tab headers are capitalized.

### Output

  * `selectedChange: EventEmitter<NglTab>`: the tab clicked in order to activate


# `<ng-template ngl-tab>` | `<ngl-tab>`

### Input

  * `heading: string = ''`: Header text.
  * `nglTabId?: string`: Tab's ID in case you want to preselect or programmatically manipulate it.

### Output

  * `onActivate: EventEmitter<NglTab>`: called when tab becomes active.
  * `onDeactivate: EventEmitter<NglTab>`: called when tab becomes inactive.

### Only when using `<ngl-tab>`

  * `<ng-template ngl-tab-heading>`: contains heading's content
  * `<ng-template ngl-tab-content>`: contains tabs's content
