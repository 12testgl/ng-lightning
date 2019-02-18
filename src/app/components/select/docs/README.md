Select element presents a menu of options.

We don't intend to re-create all the native HTML input elements, but we intend to take all the tedious work away from you and at the same time making sure that your native elements have all the appropriate styles and are fully accessible. So yo are responsible to for writing the with the `ngl` attribute like this `<select ngl>` and hook it to `ngModel`, `formControl`, `disabled` etc based on your needs. 

**Accessibility**:

  * `<label>` has a `for` attribute whose value is that input field’s `id`.
  * Input element(s) with error, receives an `aria-describedby` attribute that references the `id` attribute of the error message.
