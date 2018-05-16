# `<ngl-icon>`

### Input

  * `iconName: string`: The Lightning Design System name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
  * `variant?: 'default' | 'warning' | 'error'`: The variant changes the appearance of a utility icon. Accepted variants include inverse, warning and error. Use the inverse variant to implement a white fill in utility icons on dark backgrounds.
  * `size: 'x-small' | 'small' | 'large'`: The size of the icon. Options include xx-small, x-small, small, medium, or large. This value defaults to medium.
  * `svgClass: string | string[] = ''`: Extra class(es) you want to apply to SVG element.
  * `alternativeText: string`: The alternative text used to describe the icon. This text should describe what happens when you click the button, for example 'Upload File', not what the icon looks like, 'Paperclip'.

### Attribute

  * `button? boolean`: Whether it lives inside a button, in order to apply the appropriate styles. If not explicitly set, it will try to determine it based on the parent directives, `nglButton` or `nglButtonIcon`.


# `<svg nglIconName>`

### Input

  * `nglIconName`: The Lightning Design System name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.


# `<ngl-icon-waffle> | [ngl-icon-waffle]`
