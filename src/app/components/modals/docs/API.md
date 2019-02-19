# `<ngl-modal>`

### Content

  * `ng-template[nglModalTagline]`: Content underneath the title in the modal header.
  * `ng-template[nglModalFooter]`: Contains buttons displayed on modal's footer.

### Input

  * `header?: string`: Heading text.
  * `open?: boolean`: Whether modal is visible or not.
  * `size?: 'string'`: Modal size. Possible values are empty, `medium` and `large`.
  * `directional?: boolean = false`: Whether buttons inside footer spread to both left and right.
  * `closeButtonAssistiveText? = 'Close'`: Text read aloud by screen readers when the user focuses on the Close Button.
  * `dismissOnClickOutside?: boolean = true`: Modal can be dismissed by clicking outside of it.

### Output

  * `openChange: EventEmitter<boolean>`: emitted when modal's visibility is going to change to `false`

# `ng-template[nglModalHeader]`

### Variables

  * `id: string`: Auto generated unique ID to be used for accessibility.
