# <ngl-accordion>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[activeName]` | Defines the expanded section(s). | string \| string[] | |
| `[multiple]` | Whether we allow multiple sections open at a time. | boolean | false |
| `(activeNameChange)` | Emits when the open sections are going to change, it contains all open sections. | EventEmitter<string \| string[]> | |


# <ng-template nglAccordionSection>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[name]` | The unique name to use with the `activeName` of the accordion component. If not provided, it will be auto-generated. | string | |
| `[label]` | Displayed as the title of the section. | string \| TemplateRef | |
| `[labelContext]` | Context data available as local variable in `label`, if TemplateRef. | any | |
