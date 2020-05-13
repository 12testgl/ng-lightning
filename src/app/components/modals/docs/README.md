Modals are used to display content in a layer above the application.

Their size and visibility can be toggled by the user and their position inside DOM is irrelevant, making its usage in a component architecture a breeze.

If you want to display a totally custom header, just use a `<ng-template nglModalHeader>` inside the `<ngl-modal>`.

**Accessibility and Keyboard interactions**:

  * `Esc` key closes the modal
  * `Tab` key at bottom of modal cycles focus back to first focusable element at top of modal
  * `Shift+Tab` keys at top of modal cycle focus back to last focusable element at bottom of modal
