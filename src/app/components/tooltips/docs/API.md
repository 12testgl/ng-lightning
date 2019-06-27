### [nglTooltip]
#### NglTooltipTrigger

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[nglTooltip]` | The content as string or the connected template reference to show. | string \| TemplateRef | |
| `[nglTooltipOpen]` | Whether the floating tooltip is visible. Be sure to use two-way binding, for example: `[(nglTooltipOpen)]="open"` | boolean | |
| `[nglTooltipOpenAuto]` | Gives the possibility to open/close without binding to `[nglTooltipOpen]`. | boolean | false |
| `[nglTooltipPlacement]` | Position relative to host element. | 'top' \| 'top-left' \| 'top-left-corner' \| 'top-right' \| 'top-right-corner' \| 'right' \| 'right-top' \| 'right-top-corner' \| 'right-bottom' \| 'right-bottom-corner' \| 'bottom' \| 'bottom-left' \| 'bottom-left-corner' \| 'bottom-right' \| 'bottom-right-corner' \| 'left' \| 'left-top' \| 'left-top-corner' \| 'left-bottom' \| 'left-bottom-corner' | 'top' |
| `[nglTooltipDelay]` | Delay in milliseconds until it opens/closes. If you wish to specify different delays for opening and closing, you may provide an array of two different values. | number \| number[] | |
| `[nglTooltipInteractive]` | Give the possibility to interact with the content of the tooltip. User has to move the cursor to the tooltip before it starts closing (this lapse of time has its duration set by the nglTooltipDelay option). | boolean | false |
| `[nglTooltipClass]` | Extra class(es) you want to apply to tooltip host element. | ngClass | |
| `(nglTooltipOpenChange)` | Emit an event when the tooltip should show or hide. | boolean | |

### Export (nglTooltip)
| Name | Description | Type |
| -------- | ----------- | ---- |
| `open` | "Manually" trigger open. Optionally specify a `delay` different than `nglTooltipDelay`. | (delay: number) => void |
| `close` | "Manually" trigger close. Optionally specify a `delay` different than `nglTooltipDelay`. | (delay: number) => void |
| `toggle` | Toggles the tooltip. | () => void |


### NGL_TOOLTIP_CONFIG<NglTooltipConfig>

Injection token that can be used to specify default rating options.

Available properties: `placement`, `interactive`, `openAuto`