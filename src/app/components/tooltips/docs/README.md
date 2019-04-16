A Tooltip is a small piece of contextual information about an element on the screen, which is displayed when a user hovers or focuses on the element it is describing. It is not focusable and cannot contain focusable content.

The tooltip directives support multiple placements.

Use a `string` or a `<ng-template #ref>` to host your tooltip's content. `#` reference will be later used to "connect" with the desired `nglTooltip` directive.

If you want to delay the opening and closing of the popover/tooltip, you can use the `nglTooltipDelay` to specify the amount of time in milliseconds.

In case you don't care to handle open/close state of tooltips using `[(nglTooltipOpen)]`, you can opt-in to use `nglTooltipOpenAuto`, and if you want to make it the default behavior you can take advantage of `NGL_TOOLTIP_CONFIG`.
