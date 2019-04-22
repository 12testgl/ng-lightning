# <ngl-modal>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[header]` | Heading text. | string | |
| `[open]` | Whether modal is visible or not. | boolean | true |
| `[size]` | Specifies the modal's width. | 'small' \| 'medium' \| 'large' | |
| `[prompt]` | Styles the modal as a prompt. | 'success' \| 'warning' \| 'error' \| 'wrench' \| 'offline' \| 'info' | |
| `[directional]` | Whether buttons inside footer spread to both left and right. | boolean | |
| `[dismissOnClickOutside]` | Whether modal can be dismissed by clicking outside of it. | boolean | true |
| `[closeButtonAssistiveText]` | Text read aloud by screen readers when the user focuses on the Close Button. | string | 'Close' |
| `(openChange)` | Emitted when modal's visibility is going to change to `false`. | EventEmitter<boolean> | |

# <ng-template nglModalTagline>
  
Content underneath the title in the modal header.

# <ng-template nglModalFooter>

Contains buttons displayed on modal's footer.

# <ng-template nglModalHeader>

Custom header content template

| Variable | Description | Type |
| -------- | ----------- | ---- |
| `id` | Auto generated unique ID to be used for accessibility. | string |
