# [nglPopover]

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[nglPopover]` | The body as string or the connected template reference to show. | string \| TemplateRef | |
| `[nglPopoverHeader]` | The header as string or the connected template reference to show. | string \| TemplateRef | |
| `[nglPopoverFooter]` | The footer as string or the connected template reference to show. | string \| TemplateRef | |
| `[nglPopoverOpen]` | Whether the floating popover is visible. Be sure to use two-way binding, for example: `[(nglPopoverOpen)]="open"` | boolean | |
| `[nglPopoverPlacement]` | Position relative to host element  | `top` \| `right` \| `bottom` \| `left` | `top` |
| `[nglPopoverVariant]` | Determines the variant of the popover. |  `walkthrough` \| `feature` \| `warning` \| `error` \| `panel` | |
| `[nglPopoverSize]` | Determines the size of the popover. | `small` \| `medium` \| `large` \| `full-width` | |
| `(nglPopoverOpenChange)` | Emit an event when the popover should show or hide. | boolean \| 'x' \| 'backdrop' \| 'escape' |
