`nglButtonIcon` is used to represent an icon-only button element that executes an action.

You can use a combination of the `iconName`, `variant` and `size` to customize the button and icon. For the bare variant, the size applies to the icon itself. For non-bare variants, the size applies to the button.

`nglButtonIconStateful` component represents an icon-only button element that toggles between two states. For example, you can use this component for capturing a customer's feedback on a blog post (like or dislike). 

The button's state is stored in the `selected` input.

**Accessibility**:

Use the `alternativeText` to describe the icon. The description should indicate what happens when you click the button, for example 'Upload File', not what the icon looks like, 'Paperclip'.

For `nglButtonIconStateful` the `aria-pressed` attribute is set to true or false, depending on its state.