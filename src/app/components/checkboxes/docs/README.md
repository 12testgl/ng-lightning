Checkboxes let you select one or more options. `<ngl-checkbox>` is useful for creating single checkboxes. heckbox buttons let you select one or more options with an alternative visual design.
A alternative visual design as toggle can be used swithcing to `<ngl-checkbox-toggle>`. Use the `enabledText` and `disabledText` inputs to specify labels displayed under the toggle for each state. To display no labels, set these attributes to empty strings.

For a styled checkable input that communicates if an option is being added to a group, use `<ngl-checkbox-button>`. 

If you are working with a group of checkboxes, use `<fieldset ngl-checkbox-group>` with `<ngl-checkbox-option>`s instead. A button styled alternative can be achieved using `type="button"` input property.

We don't intend to re-create all the native HTML input elements, but we intend to take all the tedious work away from you and at the same time making sure that your native elements have all the appropriate styles and are fully accessible. So yo are responsible to for writing the with the `ngl` attribute like this `<input ngl type="checkbox">` and hook it to `ngModel`, `formControl`, `disabled` etc based on your needs. 

**Accessibility**:

  * `<label>` has a `for` attribute whose value is that input field’s `id`.
  * Input element(s) with error, receives an `aria-describedby` attribute that references the `id` attribute of the error message.
