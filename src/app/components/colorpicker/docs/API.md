### <ngl-colorpicker>
#### NglColorpicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[variant]` | Configures which tabs are present for the colorpicker. `base` means both `swatches` and `custom` tabs are present. | 'base' \| 'swatches' \| 'custom' | 'base' |
| `[required]` | Highlights the input as a required field (does not perform any validation). | boolean | false |
| `[label]` | An input label as for a form. | string | 'Choose Color' |
| `[placeholder]` | Placeholder of input box. | string | '' |
| `[fieldLevelHelpTooltip]` | A tooltip that is displayed next to the label. | string \| TemplateRef | |
| `[readonlyInput]` | Whether to make the hex color input readonly. | boolean | false |
| `[defaultSelectedTab]` | Determines which tab is initially visible when popover opens. | 'swatches' \| 'custom' | 'swatches' |
| `[swatchColors]` | Hex color values which are used to set the options of the swatch tab of the colorpicker popover. | string[] | |
| `[submitButtonLabel]` | Text for submit button of popover. | string | 'Done' |
| `[cancelButtonLabel]` | Text for cancel button on popover. | string | 'Cancel' |
| `[swatchTabLabel]` | Text for swatch tab of popover. | string | 'Default' |
| `[customTabLabel]` | Text for custom tab of popover. | string | 'Custom' |
| `[invalidColorLabel]` | Error message when hex color input is invalid. | string \| TemplateRef | 'Please ensure value is correct' |


### NGL_COLORPICKER_CONFIG<NglColorpickerConfig>

Injection token that can be used to specify default options.

Available properties: `swatchColors`, `variant`