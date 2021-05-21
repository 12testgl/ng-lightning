## Next version

### Features

* **app:** support Angular v12

## [7.0.2](https://github.com/ng-lightning/ng-lightning/compare/v7.0.1...v7.0.2) (2021-03-16)


### Bug Fixes

* **paginations:** show correct `start` and `end` values when `current` is undefined ([655ba96](https://github.com/ng-lightning/ng-lightning/commit/655ba96a15312de1f5de1cd3f3344edd22f1951c))



## [7.0.1](https://github.com/ng-lightning/ng-lightning/compare/v7.0.0...v7.0.1) (2021-01-11)


### Bug Fixes

* **tooltip:** fix interactive mode ([382a159](https://github.com/ng-lightning/ng-lightning/commit/382a1590315159cb99fd7b6ba59d972bf1d0956a)), closes [#528](https://github.com/ng-lightning/ng-lightning/issues/528)



# [7.0.0](https://github.com/ng-lightning/ng-lightning/compare/v6.1.1...v7.0.0) (2020-06-16)


### Bug Fixes

* **combobox:** single selections shouldn't be cleared upon re-selection ([b5655d3](https://github.com/ng-lightning/ng-lightning/commit/b5655d319fffb1b698a13f3057690eb9e9340c23)), closes [#507](https://github.com/ng-lightning/ng-lightning/issues/507) [#509](https://github.com/ng-lightning/ng-lightning/issues/509)


### Features

* **datepicker:** expose <input> to allow extra functionality ([2ca43e0](https://github.com/ng-lightning/ng-lightning/commit/2ca43e0bd1861edeab024a3b8713647e0ae444f7))
* **datepicker:** option to display the date pattern as placeholder of input ([9b71b8f](https://github.com/ng-lightning/ng-lightning/commit/9b71b8faa09187b7c74e1ace916c94eea3af12fd))


### BREAKING CHANGES

* **datepicker:** `ngl-datepicker-input` should contain the `<input
nglDatepickerInput>

  Before:

  ```html
  <ngl-datepicker-input readonlyInput placeholder="..."></ngl-datepicker-input>
  ```

  After:

  ```html
  <ngl-datepicker-input><input nglDatepickerInput readonly placeholder="..." /></ngl-datepicker-input>
  ```
* **combobox:** Single selection comboboxes (picklists) will not be
cleared upon re-selection the already selected value. If you want to
keep the old behaviour (although it is not recommended) you should
either provide an external clear button or an extra "empty" option.



## [6.1.1](https://github.com/ng-lightning/ng-lightning/compare/v6.1.0...v6.1.1) (2020-05-27)


### Bug Fixes

* **tabs:** change class calculation for content element ([756c607](https://github.com/ng-lightning/ng-lightning/commit/756c6076992f9a4c9d861b3c8fe1e1b1e5cf1781))



# [6.1.0](https://github.com/ng-lightning/ng-lightning/compare/v6.0.0...v6.1.0) (2020-05-17)


### Bug Fixes

* **accordion:** correct button type tp prevent form submission ([9306d61](https://github.com/ng-lightning/ng-lightning/commit/9306d613c6b2c802f4d522a687438cd3294ac0e9)), closes [#505](https://github.com/ng-lightning/ng-lightning/issues/505)
* **package.json:** strict v9 Angular peer dependencies ([95025f7](https://github.com/ng-lightning/ng-lightning/commit/95025f7cb9e6a116cbc91d4cb3cb08da753ba461)), closes [#508](https://github.com/ng-lightning/ng-lightning/issues/508)


### Features

* **combobox:** support custom labels & global configuration ([e11cc72](https://github.com/ng-lightning/ng-lightning/commit/e11cc72e1ab6c9ee71d14f2e471497bb6cea0b59)), closes [#511](https://github.com/ng-lightning/ng-lightning/issues/511)



# [6.0.0](https://github.com/ng-lightning/ng-lightning/compare/v5.0.0...v6.0.0) (2020-02-11)


### Bug Fixes

* **app:** remove `isRequired` decorator ([9053123](https://github.com/ng-lightning/ng-lightning/commit/9053123df68ecb11ce73ad64476922a2c2da3db8))


### Features

* **app:** support Angular v9 ([1ecd81f](https://github.com/ng-lightning/ng-lightning/commit/1ecd81f3617aa83d223965423a002d336d5832ad))


### BREAKING CHANGES

* **app:** drop runtime errors for missing required input properties
* **app:** ng-lightning requires a minimal version of Angular 9



# [5.0.0](https://github.com/ng-lightning/ng-lightning/compare/v4.8.2...v5.0.0) (2020-01-06)


### Bug Fixes

* **tabs:** correct `tabindex` value for non selected header ([f87539b](https://github.com/ng-lightning/ng-lightning/commit/f87539b3d4e38c420a25a64d820820c030fa62fd))


### Features

* **app:** support Angular v8 ([752eb14](https://github.com/ng-lightning/ng-lightning/commit/752eb144ed60d39b71f9faba41cc2c54f020a77e))
* **app:** support LDS v2.9 ([2bd5082](https://github.com/ng-lightning/ng-lightning/commit/2bd5082758d428f6cfd02789f5af9383a86dc8d9))


### BREAKING CHANGES

* **app:** ng-lightning requires a minimal version of SLDS 2.9
* **app:** ng-lightning requires a minimal version of Angular 8



## [4.8.2](https://github.com/ng-lightning/ng-lightning/compare/v4.8.1...v4.8.2) (2019-08-20)


### Bug Fixes

* **checkboxes:** support dynamic options ([6c11877](https://github.com/ng-lightning/ng-lightning/commit/6c11877))



## [4.8.1](https://github.com/ng-lightning/ng-lightning/compare/v4.8.0...v4.8.1) (2019-07-17)


### Bug Fixes

* correctly export individual modules to avoid aot issues ([4986423](https://github.com/ng-lightning/ng-lightning/commit/4986423))
* **checkboxes:** support template as `error` ([3e63b41](https://github.com/ng-lightning/ng-lightning/commit/3e63b41))
* **input:** correctly handle error as "false" string ([7f03235](https://github.com/ng-lightning/ng-lightning/commit/7f03235))
* **select:** support template as `error` ([967cdbf](https://github.com/ng-lightning/ng-lightning/commit/967cdbf))



# [4.8.0](https://github.com/ng-lightning/ng-lightning/compare/v4.7.1...v4.8.0) (2019-07-15)


### Features

* **input:** support template as `error` ([264ff66](https://github.com/ng-lightning/ng-lightning/commit/264ff66))
* **tooltips:** support delay option in global configuration ([a56a1a4](https://github.com/ng-lightning/ng-lightning/commit/a56a1a4))
* support importing individual modules ([4c84883](https://github.com/ng-lightning/ng-lightning/commit/4c84883))



## [4.7.1](https://github.com/ng-lightning/ng-lightning/compare/v4.7.0...v4.7.1) (2019-06-28)

This relase will just fix a problem we had with the previous one.

# [4.7.0](https://github.com/ng-lightning/ng-lightning/compare/v4.6.0...v4.7.0) (2019-06-28)


### Bug Fixes

* **file-upolad:** correcty validate file extensions on `accept` input ([170737e](https://github.com/ng-lightning/ng-lightning/commit/170737e))


### Features

* **datepickers:** add "Today", "Previous Month" and "Next Month" labels on configuration ([2bcedc1](https://github.com/ng-lightning/ng-lightning/commit/2bcedc1))
* **tooltips:** support custom classes ([19c07a2](https://github.com/ng-lightning/ng-lightning/commit/19c07a2))
* export components to public API ([0dd6361](https://github.com/ng-lightning/ng-lightning/commit/0dd6361))



# [4.6.0](https://github.com/ng-lightning/ng-lightning/compare/v4.5.2...v4.6.0) (2019-06-23)


### Features

* **datepickers:** add inputs for static text in templates ([d7d9bf8](https://github.com/ng-lightning/ng-lightning/commit/d7d9bf8))
* **file-upload:** add `<ngl-file-upload>` component ([6832101](https://github.com/ng-lightning/ng-lightning/commit/6832101))



## [4.5.2](https://github.com/ng-lightning/ng-lightning/compare/v4.5.1...v4.5.2) (2019-05-20)


### Bug Fixes

* **comboboxes:** hide menu if element is scrolled outside of view ([cbdbb72](https://github.com/ng-lightning/ng-lightning/commit/cbdbb72))
* **datepickers:** hide calendar if input is scrolled outside of view ([1c5e10f](https://github.com/ng-lightning/ng-lightning/commit/1c5e10f))
* **modals:** mark body as a scrollable container ([b780ec5](https://github.com/ng-lightning/ng-lightning/commit/b780ec5)), closes [#478](https://github.com/ng-lightning/ng-lightning/issues/478)



## [4.5.1](https://github.com/ng-lightning/ng-lightning/compare/v4.5.0...v4.5.1) (2019-05-16)


### Bug Fixes

* **comboboxes:** add accessibility attribute for disabled options ([eed7bcd](https://github.com/ng-lightning/ng-lightning/commit/eed7bcd))
* **datepickers:** prevent multiple input datepickers open at the same time ([38f363b](https://github.com/ng-lightning/ng-lightning/commit/38f363b))
* **datepickers:** update input validity if `min`/`max` changes ([c4df4ff](https://github.com/ng-lightning/ng-lightning/commit/c4df4ff))
* **popovers:** remove comments from template output ([dee6ba2](https://github.com/ng-lightning/ng-lightning/commit/dee6ba2))



# [4.5.0](https://github.com/ng-lightning/ng-lightning/compare/v4.4.0...v4.5.0) (2019-05-13)


### Bug Fixes

* **comboboxes:** prevent close if clicking a non-option inside the dropdown menu ([7e1717c](https://github.com/ng-lightning/ng-lightning/commit/7e1717c)), closes [#472](https://github.com/ng-lightning/ng-lightning/issues/472)
* **datepickers:** open the datepicker when a mouse user clicks on the input ([9a659d8](https://github.com/ng-lightning/ng-lightning/commit/9a659d8))


### Features

* **comoboboxes:** render menu as overlay ([f4aa1b2](https://github.com/ng-lightning/ng-lightning/commit/f4aa1b2))
* **datepickers:** localized month/day names and first day of week & configurable `firstDayOfWeek ` ([a1487fc](https://github.com/ng-lightning/ng-lightning/commit/a1487fc))



# [4.4.0](https://github.com/ng-lightning/ng-lightning/compare/v4.3.1...v4.4.0) (2019-05-04)


### Bug Fixes

* **checkboxes:** toggle should set `aria-describedby` on input element ([9ed081b](https://github.com/ng-lightning/ng-lightning/commit/9ed081b)), closes [#465](https://github.com/ng-lightning/ng-lightning/issues/465)
* **colorpicker:** display empty intial values as empty string in input ([7f183f7](https://github.com/ng-lightning/ng-lightning/commit/7f183f7))
* **radio-group:** correctly render dynamic options ([2357b5a](https://github.com/ng-lightning/ng-lightning/commit/2357b5a))


### Features

* **colorpicker:** support configuration ([aad87d8](https://github.com/ng-lightning/ng-lightning/commit/aad87d8))
* **colorpicker:** support input placeholder ([0a7b766](https://github.com/ng-lightning/ng-lightning/commit/0a7b766))
* **datecpickers:** support `min` and `max` dates ([a50719c](https://github.com/ng-lightning/ng-lightning/commit/a50719c))
* **datepickers:** add datepicker input ([1137b99](https://github.com/ng-lightning/ng-lightning/commit/1137b99))
* **datepickers:** add inputs and configuration options for years range ([7251f2d](https://github.com/ng-lightning/ng-lightning/commit/7251f2d))
* **datepickers:** support custom disabled dates via input callback ([bf06068](https://github.com/ng-lightning/ng-lightning/commit/bf06068))


### Performance Improvements

* **datepickers:** reduce renedring operations ([b38dc47](https://github.com/ng-lightning/ng-lightning/commit/b38dc47))



## [4.3.1](https://github.com/ng-lightning/ng-lightning/compare/v4.3.0...v4.3.1) (2019-04-22)


### Bug Fixes

* **datepickers:** move focus on keyboard navigation & mark only once as today ([c4dc7a6](https://github.com/ng-lightning/ng-lightning/commit/c4dc7a6))
* **modals:** render as CDK overlay to prevent stacking porblems ([7ab80b1](https://github.com/ng-lightning/ng-lightning/commit/7ab80b1))



# [4.3.0](https://github.com/ng-lightning/ng-lightning/compare/v4.2.0...v4.3.0) (2019-04-16)


### Features

* **buttonicons:** support extra classes for SVG element ([6fdaa1e](https://github.com/ng-lightning/ng-lightning/commit/6fdaa1e))
* **tooltips:** initial configuration support ([febe6df](https://github.com/ng-lightning/ng-lightning/commit/febe6df))
* **tooltips:** open/close without two-way binding to input ([01883ff](https://github.com/ng-lightning/ng-lightning/commit/01883ff))



# [4.2.0](https://github.com/ng-lightning/ng-lightning/compare/v4.1.0...v4.2.0) (2019-04-14)


### Bug Fixes

* **datepickers:** correctly spell Thursday in `dayNamesLong` ([0171be4](https://github.com/ng-lightning/ng-lightning/commit/0171be4))


### Features

* **accordion:** add accordion component ([214f9a4](https://github.com/ng-lightning/ng-lightning/commit/214f9a4))
* **modals:** support `prompt` variation ([ad652e8](https://github.com/ng-lightning/ng-lightning/commit/ad652e8))
* **popovers, tooltips:** support corner placements ([3b309fb](https://github.com/ng-lightning/ng-lightning/commit/3b309fb))
* **slider:** add `<ngl-slider>` component ([6419506](https://github.com/ng-lightning/ng-lightning/commit/6419506))


### Performance Improvements

* **tooltip:** mark for change detection only when it is really needed ([d55890e](https://github.com/ng-lightning/ng-lightning/commit/d55890e))



# [4.1.0](https://github.com/ng-lightning/ng-lightning/compare/v4.0.0...v4.1.0) (2019-04-06)


### Bug Fixes

* **tabs:** add `aria-controls` &`aria-labelledby` for accesibility ([d8d3d8a](https://github.com/ng-lightning/ng-lightning/commit/d8d3d8a))


### Features

* **carousel:** add carousel component ([4d49ee6](https://github.com/ng-lightning/ng-lightning/commit/4d49ee6))
* **colorpicker:** add `<ngl-colorpicker>` component ([a5bdf27](https://github.com/ng-lightning/ng-lightning/commit/a5bdf27))
* **popovers:** add custom classes on host element with `nglPopoverClass` ([712e4a1](https://github.com/ng-lightning/ng-lightning/commit/712e4a1))
* **popovers:** control close button visibility from input ([7746137](https://github.com/ng-lightning/ng-lightning/commit/7746137))
* **popovers/tooltips:** support more complex placements ([678a955](https://github.com/ng-lightning/ng-lightning/commit/678a955))
* **tabs:** support non-lazy mode for every tab's contents ([93df6ca](https://github.com/ng-lightning/ng-lightning/commit/93df6ca)), closes [#356](https://github.com/ng-lightning/ng-lightning/issues/356)


### Performance Improvements

* **popovers, tooltips:** improve performance on scroll ([372fb33](https://github.com/ng-lightning/ng-lightning/commit/372fb33))



# [4.0.0](https://github.com/ng-lightning/ng-lightning/compare/v2.0.1...v4.0.0) (2019-03-24)


### Bug Fixes

* **alert/toast:** don't add `default` variant color on icon ([37815fc](https://github.com/ng-lightning/ng-lightning/commit/37815fc))
* **datatables:** safe unsubscription for column updates ([6e2a67b](https://github.com/ng-lightning/ng-lightning/commit/6e2a67b))
* **datepicker:** add missing label on year to improve accessibility ([f703bff](https://github.com/ng-lightning/ng-lightning/commit/f703bff)), closes [#388](https://github.com/ng-lightning/ng-lightning/issues/388)
* **icons:** `slds-icon_container` shouldn't apply for `utility` icons and set `default` as default `variant` ([8cc0764](https://github.com/ng-lightning/ng-lightning/commit/8cc0764))
* **lookups:** prevent form submission on polymprhic selection ([78181d7](https://github.com/ng-lightning/ng-lightning/commit/78181d7)), closes [#350](https://github.com/ng-lightning/ng-lightning/issues/350)
* **lookups:** turn autocomplete off for input ([7ce34b2](https://github.com/ng-lightning/ng-lightning/commit/7ce34b2)), closes [#348](https://github.com/ng-lightning/ng-lightning/issues/348)
* **modal:** use `cdkTrapFocus` to prevent user from tabbing away ([1c24ba8](https://github.com/ng-lightning/ng-lightning/commit/1c24ba8))
* **modals:** add ARIA `describedby` for content ([392177d](https://github.com/ng-lightning/ng-lightning/commit/392177d))
* **pills:** remove unnecessary host classes ([649813f](https://github.com/ng-lightning/ng-lightning/commit/649813f))
* **spinner:** do not add default size class when initialized with different one ([a81c75a](https://github.com/ng-lightning/ng-lightning/commit/a81c75a))


### Features

* **app:** add Combobox component ([9f424fd](https://github.com/ng-lightning/ng-lightning/commit/9f424fd))
* **app:** add dynamic icons module ([1c4987c](https://github.com/ng-lightning/ng-lightning/commit/1c4987c))
* **app:** add progress bar component ([5e40587](https://github.com/ng-lightning/ng-lightning/commit/5e40587))
* **app:** migrate button icons to LDS v2.8 ([1d191e1](https://github.com/ng-lightning/ng-lightning/commit/1d191e1))
* **app:** migrate buttons to LDS v2.8 ([3da487b](https://github.com/ng-lightning/ng-lightning/commit/3da487b))
* **app:** migrate checkboxes to LDS v2.8 ([4a9a368](https://github.com/ng-lightning/ng-lightning/commit/4a9a368))
* **app:** migrate input to LDS v2.8 ([fc4613e](https://github.com/ng-lightning/ng-lightning/commit/fc4613e))
* **app:** migrate menus to LDS v2.8 ([2a4f3c0](https://github.com/ng-lightning/ng-lightning/commit/2a4f3c0))
* **app:** migrate popovers to LDS v2.8 ([d5f12f9](https://github.com/ng-lightning/ng-lightning/commit/d5f12f9))
* **app:** migrate radio groups to LDS v2.8 ([6439dc9](https://github.com/ng-lightning/ng-lightning/commit/6439dc9))
* **app:** migrate select to LDS v2.8 ([09c2aa0](https://github.com/ng-lightning/ng-lightning/commit/09c2aa0))
* **app:** migrate stateful buttons to LDS v2.8 ([fec0947](https://github.com/ng-lightning/ng-lightning/commit/fec0947))
* **app:** migrate textarea to LDS v2.8 ([d701792](https://github.com/ng-lightning/ng-lightning/commit/d701792))
* **app:** provide injection configuration tokens per component ([45fb789](https://github.com/ng-lightning/ng-lightning/commit/45fb789))
* **app:** support `isRequired` decorator ([8276160](https://github.com/ng-lightning/ng-lightning/commit/8276160))
* **app:** support Angular v5 ([3008ded](https://github.com/ng-lightning/ng-lightning/commit/3008ded))
* **app:** support LDS v2.5 ([4399e1d](https://github.com/ng-lightning/ng-lightning/commit/4399e1d))
* **avatar:** migrate to LDS v2.5 ([bd400e2](https://github.com/ng-lightning/ng-lightning/commit/bd400e2))
* **avatar:** support initials & fallback to initials if image fails to load ([c131c82](https://github.com/ng-lightning/ng-lightning/commit/c131c82))
* **badges:** migrate to LDS v2.5 ([5d74394](https://github.com/ng-lightning/ng-lightning/commit/5d74394)), closes [#366](https://github.com/ng-lightning/ng-lightning/issues/366)
* **breadcrumbs:** migrate to LDS v2.5 ([0a1aa20](https://github.com/ng-lightning/ng-lightning/commit/0a1aa20))
* **build:** switch to Angular CLI library format ([d39d324](https://github.com/ng-lightning/ng-lightning/commit/d39d324))
* **datatables:** migrate to LDS v2.8 ([d3b1d48](https://github.com/ng-lightning/ng-lightning/commit/d3b1d48))
* **files:** upgrade files ([220f870](https://github.com/ng-lightning/ng-lightning/commit/220f870))
* **forms:** add `fieldLevelHelpTooltip` input ([351ee63](https://github.com/ng-lightning/ng-lightning/commit/351ee63)), closes [#374](https://github.com/ng-lightning/ng-lightning/issues/374)
* **icons:** migrate to slds v2.5.0 ([42ce810](https://github.com/ng-lightning/ng-lightning/commit/42ce810))
* **icons:** migrate waffle to NglDynamicIcon ([902d429](https://github.com/ng-lightning/ng-lightning/commit/902d429))
* **modal:** focus the previously focused element on close ([4777ee6](https://github.com/ng-lightning/ng-lightning/commit/4777ee6))
* **modal:** hide close button if `openChange` output is not binded ([ed76e79](https://github.com/ng-lightning/ng-lightning/commit/ed76e79))
* **modals:** migrate to LDS v2.5 & add `closeButtonAssistiveText` ([d68f9a7](https://github.com/ng-lightning/ng-lightning/commit/d68f9a7))
* **modals:** prevent body scrolling while open ([2a7e965](https://github.com/ng-lightning/ng-lightning/commit/2a7e965))
* **modals:** support close when clicking outside ([49cbc06](https://github.com/ng-lightning/ng-lightning/commit/49cbc06))
* **notifications:** migrate to LDS v2.5 & add `iconName` and `dismissible` ([7bc6bc6](https://github.com/ng-lightning/ng-lightning/commit/7bc6bc6))
* **paginations:** migrate to LDS v2.5 ([3aa9d55](https://github.com/ng-lightning/ng-lightning/commit/3aa9d55))
* **pills:** migrate to LDS v2.8 ([4603d22](https://github.com/ng-lightning/ng-lightning/commit/4603d22))
* **ratings:** migrate to LDS v2.5 ([be681e0](https://github.com/ng-lightning/ng-lightning/commit/be681e0))
* **sections:** migrate to LDS v2.5 & add `collapsable` attribute ([9e66ab3](https://github.com/ng-lightning/ng-lightning/commit/9e66ab3)), closes [#368](https://github.com/ng-lightning/ng-lightning/issues/368)
* **spinners:** migrate to LDS v2.5 & add `alternativeText` attribute ([d3de48f](https://github.com/ng-lightning/ng-lightning/commit/d3de48f))
* **tabs:** migrate to LDS v2.5 ([a96e707](https://github.com/ng-lightning/ng-lightning/commit/a96e707))


### BREAKING CHANGES

* **app:**  
 * `NglModule.forRoot` is now removed. You should now use the new `NGL_ICON_CONFIG` and `NGL_RATING_CONFIG` to customize  the default behavior.
 * `NglConfig` and `INglConfig` are now removed.
 * Run-time configuration is not provided as an API of the library. You should use the injection tokens on per module/component basis.
* **app:** ng-lightning requires a minimal version of Angular 5
* **app:**   Tooltips and Popovers are now completely separate modules.
  Visit http://ng-lightning.github.io/ng-lightning/#/components/popovers & http://ng-lightning.github.io/ng-lightning/#/tooltips for more.
* **app:**   Before:

  ```html
  <button type="button" nglButton="neutral" [(nglButtonState)]="selected">
    <ngl-icon icon="add" state="not-selected">Follow</ngl-icon>
    <ngl-icon icon="check" state="selected">Following</ngl-icon>
    <ngl-icon icon="close" state="selected-focus">Unfollow</ngl-icon>
  </button>
  ```

  After:

  ```html
  <button type="button" nglButtonStateful  [(state)]="selected>
    <ngl-state-off iconName="add">Follow</ngl-state-off>
    <ngl-state-on iconName="check">Following</ngl-state-on>
    <ngl-state-hover iconName="close">Unfollow</ngl-state-hover>
  </button>
  ```
* **app:**   Before:

  ```html
  <button type="button" [nglButton]="brand">
    <ngl-icon icon="warning"></ngl-icon>
    Text
  </button>
  ```

  After:

  ```html
  <button type="button" nglButton variant="brand" iconName="utility:warning">Text</button>
  ```
* **app:**   
  Before:

  ```html
  <button type="button" [nglButtonIcon]="brand">
    <ngl-icon icon="warning"></ngl-icon>
  </button>
  ```

  After:

  ```html
  <button type="button" nglButtonIcon variant="brand" iconName="utility:warning"></button>
  ```
* **app:**   
  * `<ngl-form-element>` has been renamed to `<ngl-input>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`

  Before:

  ```html
  <ngl-form-element>
    <ng-template nglFormLabel>...</ng-template>
    <input nglFormControl type="text" />
  </ngl-form-element>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-input [label]="tpt">
    <input ngl type="text" />
  </ngl-input >
  ```
* **app:**   
  * `<ngl-form-element>` has been renamed to `<ngl-textarea>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`

  Before:

  ```html
  <ngl-form-element>
    <ng-template nglFormLabel>...</ng-template>
    <textarea nglFormControl></textarea>
  </ngl-form-element>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-textarea [label]="tpt">
    <textarea ngl></textarea>
  </ngl-form-element>
  ```
* **app:**   
  * `<ngl-form-element>` has been renamed to `<ngl-select>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`

  Before:

  ```html
  <ngl-form-element>
    <ng-template nglFormLabel>...</ng-template>
    <select nglFormControl></select>
  </ngl-form-element>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-select [label]="tpt">
    <select ngl></select>
  </ngl-form-element>
  ```
* **app:**   
  * `ngl-form-group` has been renamed to `ngl-radio-group`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `<ngl-form-group-element>` has been renamed to `<ngl-radio-option>`
  * `nglFormControl` has been renamed to `ngl`
  * `ngl-form-group-alt` is now `type="button"`

  Before:

  ```html
  <fieldset ngl-form-group>
    <ng-template nglFormLabel>...</ng-template>
    <ngl-form-group-element label="..."><input nglFormControl type="radio" /></ngl-form-group-element>
  </fieldset>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <fieldset ngl-radio-group [label]="tpt">
    <ngl-radio-option label="..."><input ngl type="radio" /></ngl-radio-option>
  </ngl-form-element>
  ```
* **app:**   
  * `<ngl-form-checkbox>` has been renamed to `<ngl-checkbox>`
  * `<ngl-form-checkbox-toggle>` has been renamed to `<ngl-checkbox-toggle>`
  * `<ngl-form-checkbox-add>` has been renamed to `<ngl-checkbox-button>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`
  * `ngl-form-group` has been renamed to `ngl-checkbox-group`
  * `<ngl-form-group-element>` has been renamed to `<ngl-checkbox-option>`
  * `ngl-form-group-alt` is now `ngl-checkbox-group type="button"`

  Before:

  ```html
  <ngl-form-checkbox>
    <ng-template nglFormLabel>...</ng-template>
    <input nglFormControl type="checkbox" />
  </ngl-form-checkbox>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-checkbox [label]="tpt">
    <input ngl type="checkbox" />
  </ngl-checkbox>
  ```

  Before:

  ```html
  <fieldset ngl-form-group>
    <ng-template nglFormLabel>...</ng-template>
    <ngl-form-group-element label="..."><input nglFormControl type="checkbox" /></ngl-form-group-element>
  </fieldset>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <fieldset ngl-checkbox-group [label]="tpt">
    <ngl-checkbox-option label="..."><input ngl type="checkbox" /></ngl-radio-option>
  </ngl-form-element>
  ```
* **app:**  '0' in boolean inputs is now coerced to true
* **datatables:**   
  * `[bordered]` has been removed in favor of `slds-table_bordered` class on host element
  * `[striped]` has been removed in favor of `slds-table_striped` class on host element

  Before:

  ```html
  <table ngl-datatable bordered="true" striped="true">
  ```

  After:

  ```html
  <table ngl-datatable class="slds-table_bordered slds-table_striped">
  ```
* **app:**  `<ngl-picklist>` and `<ngl-lookup>` components are removed, and you should use `<ngl-combobox>` instead.
* **modals:**   * `[body]` selector is not needed anymore
  * `[tagline]` selector has been renamed to `nglModalFooter`
  * `ngl-modal-footer` has been renamed to `nglModalFooter`

  Before:

  ```html
  <ngl-modal>
    <div body>...</div>
    <div tagline>...</div>
    <ngl-template ngl-modal-footer>...</ngl-template>
  </ngl-modal>
  ```

  After:

  ```html
  <ngl-modal>
    <div class="slds-p-around_medium">...</div>
    <ngl-template nglModalTagline>...</ngl-template>
    <ngl-template nglModalFooter>...</ngl-template>
  </ngl-modal>
  ```
* **notifications:**   
  * `ngl-notifications` has been split to `ngl-toast`/`ngl-alert` and `type` has been removed
  * `severity` has been renamed to `variant`
  * `timeout` has been renamed to `duration`
  * `closeAssistiveText` has been renamed to `closeButtonAssistiveText`
  * `(nglNotificationClose)` has been renamed to `(close)`
* **tabs:**   * `ngl-tabs` has been renamed to `ngl-tabset`
  * tabset's `type` has been renamed to `variant`
  * `titleCaps` has been removed. Use CSS to adjust it.
  * tab's `heading` has been renamed to `label`
  * `ngl-tab-heading` has been renamed to `ngl-tab-label`
  * `nglTabId` has been removed, use `id` instead.
  * `(onActivate)` has been renamed to `(activate)`
  * `(onDeactivate)` has been renamed to `(deactivate)`
* **app:** NglIconWaffle became NglDynamicIcon of type waffle

To migrate the code follow the example below:

Before:

```html
<span ngl-icon-waffle></span>
<ngl-icon-waffle></ngl-icon-waffle>
```

After:

```html
<ngl-dynamic-icon type="waffle"></ngl-dynamic-icon>
```
* **icons:** in NglIcon category and icon inputs have been merged into one iconName field, type input was renamed to variant and alt is now named alternativeText. The custom icons will not be prefixed with `custom` any longer

To migrate the code follow the example below:

Before:

```html
<ngl-icon category="custom" icon="1" type="default" alt="Alternative Text"></ngl-icon>
```

After:

<ngl-icon iconName="custom:custom1" variant="default" alternativeText="Alternative Text"></ngl-icon>
* **icons:** in NglSvg nglIconCategory and nglIcon inputs have been merged into one nglIconName field. The custom icons will not be prefixed with `custom` any longer

To migrate the code follow the example below:

Before:

```html
<svg nglIconCategory="custom" nglIcon="1"></svg>
```

After:

```html
<svg nglIconName="custom:custom1"></svg>
```

* **spinners:** `type` has been renamed to `variant` & `container` has been removed
* **avatar:** `alt` has been renamed to `alternativeText` & `type` has been renamed to `variant`

  Before:

  ```html
  <ngl-avatar type="..." alt="...">...</ngl-avatar>
  ```

  After:

  ```html
  <ngl-avatar variant="..." alternativeText="...">...</ngl-avatar>
  ```
* **sections:** `ngl-section` has been renamed to `ngl-expandable-section`

  Before:

  ```html
  <ngl-section>...</ngl-section>
  ```

  After:

  ```html
  <ngl-expandable-section>...</ngl-expandable-section>
  ```
* **badges:** input `type` has been renamed to `theme`

  Before:

  ```html
  <ngl-badge [type]="...">...</ngl-badge>
  ```

  After:

  ```html
  <ngl-badge [theme]="...">...</ngl-badge>
  ```
* **app:** ng-lightning requires a minimal version of LDS  2.5.0, and is not backward-compatible with previous versions
* **pills:**   * `[NglPillImage]` selector is not needed anymore
  * `(nglPillRemove)` output has been renamed to `remove`
  * `[nglPillRemovable]` input has been renamed to `removable`
  * `<a>` must have `nglPillAction` attribute

  Before:

  ```html
  <ngl-pill (nglPillRemove)="remove()" NglPillRemovable="false">
    <ngl-icon iconName="standard:feedback" nglPillImage></ngl-icon>
    <a>...</a>
  </ngl-pill>
  ```

  After:

  ```html
  <ngl-pill icon="standard:feedback" (remove)="remove()" removable="false">
    <a nglPillAction>...</a>
  </ngl-pill>
  ```

ADDED
  * `[icon]`: NglIcon component or iconName to show on the left of the pill
  * `[avatar]`: NglAvatar component or src to show on the left of the pill
  * `[hasError]`: Applies the error style to the component
  * `[removeTitle]`: Remove button title (and assistive text)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/ng-lightning/ng-lightning/compare/v2.0.1...v3.0.0) (2018-11-28)


### Bug Fixes

* **app:** lock Tether version to prevent production build errors ([ed15887](https://github.com/ng-lightning/ng-lightning/commit/ed15887))
* **datepicker:** add missing label on year to improve accessibility ([bfc364b](https://github.com/ng-lightning/ng-lightning/commit/bfc364b)), closes [#388](https://github.com/ng-lightning/ng-lightning/issues/388)
* **lookups:** prevent form submission on polymprhic selection ([78181d7](https://github.com/ng-lightning/ng-lightning/commit/78181d7)), closes [#350](https://github.com/ng-lightning/ng-lightning/issues/350)
* **lookups:** turn autocomplete off for input ([7ce34b2](https://github.com/ng-lightning/ng-lightning/commit/7ce34b2)), closes [#348](https://github.com/ng-lightning/ng-lightning/issues/348)


### Features

* **app:** support Angular v5 ([3008ded](https://github.com/ng-lightning/ng-lightning/commit/3008ded))
* **forms:** add tooltip help ([b06890f](https://github.com/ng-lightning/ng-lightning/commit/b06890f)), closes [#374](https://github.com/ng-lightning/ng-lightning/issues/374)


### BREAKING CHANGES

* **app:** ng-lightning requires a minimal version of Angular 5



<a name="2.0.1"></a>
## [2.0.1](https://github.com/ng-lightning/ng-lightning/compare/v2.0.0...v2.0.1) (2017-08-17)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/ng-lightning/ng-lightning/compare/v1.3.0...v2.0.0) (2017-08-17)


### Bug Fixes

* **dropdown:** sfae unsubscribe from open event ([330e66b](https://github.com/ng-lightning/ng-lightning/commit/330e66b))
* **paginations:** remove neutral class on current page ([ab5bd47](https://github.com/ng-lightning/ng-lightning/commit/ab5bd47)), closes [#325](https://github.com/ng-lightning/ng-lightning/issues/325)


### Features

* **app:** support Angular v4 ([44b2c2a](https://github.com/ng-lightning/ng-lightning/commit/44b2c2a)), closes [#328](https://github.com/ng-lightning/ng-lightning/issues/328) [#331](https://github.com/ng-lightning/ng-lightning/issues/331)
* **forms:** add checkbox add button component ([f5527bb](https://github.com/ng-lightning/ng-lightning/commit/f5527bb)), closes [#318](https://github.com/ng-lightning/ng-lightning/issues/318)

### BREAKING CHANGES

* ng-lightning requires a minimal version of Angular 4



<a name="1.3.0"></a>
# [1.3.0](https://github.com/ng-lightning/ng-lightning/compare/v1.2.1...v1.3.0) (2017-03-28)


### Bug Fixes

* **picklist:** empty `filter` should filter based on value ([11832d2](https://github.com/ng-lightning/ng-lightning/commit/11832d2)), closes [#309](https://github.com/ng-lightning/ng-lightning/issues/309)


### Features

* **datatables:** support custom header classes per column ([04c24f4](https://github.com/ng-lightning/ng-lightning/commit/04c24f4)), closes [#299](https://github.com/ng-lightning/ng-lightning/issues/299) [#308](https://github.com/ng-lightning/ng-lightning/issues/308)
* **images:** add figure component ([b6f5ab5](https://github.com/ng-lightning/ng-lightning/commit/b6f5ab5)), closes [#284](https://github.com/ng-lightning/ng-lightning/issues/284)
* **popovers:** support header and footer ([3b9c3bd](https://github.com/ng-lightning/ng-lightning/commit/3b9c3bd)), closes [#313](https://github.com/ng-lightning/ng-lightning/issues/313)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/ng-lightning/ng-lightning/compare/v1.2.0...v1.2.1) (2017-03-03)


### Bug Fixes

* **icons:** remove `xmlns:xlink` attribute from SVG ([5706cd5](https://github.com/ng-lightning/ng-lightning/commit/5706cd5))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/ng-lightning/ng-lightning/compare/v1.1.0...v1.2.0) (2016-12-18)


### Bug Fixes

* **picklist:** empty initial and handle falsy values of placeholder ([2ca807f](https://github.com/ng-lightning/ng-lightning/commit/2ca807f))


### Features

* **icons:** add waffle icon ([047f13d](https://github.com/ng-lightning/ng-lightning/commit/047f13d)), closes [#281](https://github.com/ng-lightning/ng-lightning/issues/281)
* **lookups:** support custom header ([edfb316](https://github.com/ng-lightning/ng-lightning/commit/edfb316)), closes [#136](https://github.com/ng-lightning/ng-lightning/issues/136) [#286](https://github.com/ng-lightning/ng-lightning/issues/286)
* **tabs:** configurable tab header capitalisation ([3513dbc](https://github.com/ng-lightning/ng-lightning/commit/3513dbc)), closes [#285](https://github.com/ng-lightning/ng-lightning/issues/285)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ng-lightning/ng-lightning/compare/v1.0.2...v1.1.0) (2016-11-29)


### Bug Fixes

* **popovers:** properly cleanup content passed as `TemplateRef` ([52687c9](https://github.com/ng-lightning/ng-lightning/commit/52687c9)), closes [#274](https://github.com/ng-lightning/ng-lightning/issues/274)


### Features

* **popovers:** expose `position` method ([00b1a74](https://github.com/ng-lightning/ng-lightning/commit/00b1a74)), closes [#273](https://github.com/ng-lightning/ng-lightning/issues/273)



<a name="1.0.2"></a>
## [1.0.2](https://github.com/ng-lightning/ng-lightning/compare/v1.0.1...v1.0.2) (2016-11-17)


### Bug Fixes

* **config:** don’t try to unsubscribe if no subscription ([931496f](https://github.com/ng-lightning/ng-lightning/commit/931496f)), closes [#270](https://github.com/ng-lightning/ng-lightning/issues/270) [#271](https://github.com/ng-lightning/ng-lightning/issues/271)
* **datatables:** correctly use `trackByKey` input ([ab754e7](https://github.com/ng-lightning/ng-lightning/commit/ab754e7)), closes [#268](https://github.com/ng-lightning/ng-lightning/issues/268) [#269](https://github.com/ng-lightning/ng-lightning/issues/269)



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ng-lightning/ng-lightning/compare/v1.0.0...v1.0.1) (2016-11-11)


### Bug Fixes

* **app:** remove `[@types](https://github.com/types)/core-js` ([3c316a9](https://github.com/ng-lightning/ng-lightning/commit/3c316a9)), closes [#265](https://github.com/ng-lightning/ng-lightning/issues/265) [#267](https://github.com/ng-lightning/ng-lightning/issues/267)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/ng-lightning/ng-lightning/compare/v0.27.0...v1.0.0) (2016-11-07)


### Bug Fixes

* **datepicker:** correctly handle `firstDayOfWeek` as string attribute ([eab39df](https://github.com/ng-lightning/ng-lightning/commit/eab39df))
* **datepicker:** handle when first day of week after first day of month ([3850150](https://github.com/ng-lightning/ng-lightning/commit/3850150))


### Features

* **datepicker:** support custom first day of week ([990783b](https://github.com/ng-lightning/ng-lightning/commit/990783b)), closes [#252](https://github.com/ng-lightning/ng-lightning/issues/252) [#255](https://github.com/ng-lightning/ng-lightning/issues/255)
* **demo:** support AoT compilation ([b0f2f71](https://github.com/ng-lightning/ng-lightning/commit/b0f2f71)), closes [#262](https://github.com/ng-lightning/ng-lightning/issues/262)



<a name="0.27.0"></a>
# [0.27.0](https://github.com/ng-lightning/ng-lightning/compare/v0.26.0...v0.27.0) (2016-10-27)


### Bug Fixes

* **popovers:** `nglInteractive` is handled as boolean ([01e4981](https://github.com/ng-lightning/ng-lightning/commit/01e4981))
* **popovers:** `nglPopoverBehavior` makes host focusable by default ([40e1d5b](https://github.com/ng-lightning/ng-lightning/commit/40e1d5b))


### Features

* **popovers:** support interaction with content ([cbef50d](https://github.com/ng-lightning/ng-lightning/commit/cbef50d)), closes [#254](https://github.com/ng-lightning/ng-lightning/issues/254)
* **rating:** support on/off color to be configurable ([f314e06](https://github.com/ng-lightning/ng-lightning/commit/f314e06)), closes [#253](https://github.com/ng-lightning/ng-lightning/issues/253)



<a name="0.26.0"></a>
# [0.26.0](https://github.com/ng-lightning/ng-lightning/compare/v0.25.0...v0.26.0) (2016-10-26)


### Bug Fixes

* **breadcrumbs:** support `routerLink` on each breadcrumb ([e978ed6](https://github.com/ng-lightning/ng-lightning/commit/e978ed6)), closes [#248](https://github.com/ng-lightning/ng-lightning/issues/248)
* **popovers:** position after popover view is initialized ([1259247](https://github.com/ng-lightning/ng-lightning/commit/1259247)), closes [#251](https://github.com/ng-lightning/ng-lightning/issues/251)


### Features

* **rating:** expose `fill` value in custom template icons ([931359c](https://github.com/ng-lightning/ng-lightning/commit/931359c)), closes [#247](https://github.com/ng-lightning/ng-lightning/issues/247)
* **rating:** support fractional values ([6aba289](https://github.com/ng-lightning/ng-lightning/commit/6aba289)), closes [#229](https://github.com/ng-lightning/ng-lightning/issues/229)


### BREAKING CHANGES

* breadcrumbs: breadcrumb is now a structural directive

  Before:

  ```html
  <ngl-breadcrumb href="...">...</ngl-breadcrumb>
  ```

  After:

  ```html
  <a *nglBreadcrumb href="...">...</a>
  ```



<a name="0.25.0"></a>
# [0.25.0](https://github.com/ng-lightning/ng-lightning/compare/v0.24.0...v0.25.0) (2016-10-15)


### Features

* **forms:** add checkbox toggle component ([99d0ddd](https://github.com/ng-lightning/ng-lightning/commit/99d0ddd)), closes [#246](https://github.com/ng-lightning/ng-lightning/issues/246)
* **popovers:** add output event when shows or hides ([4d08456](https://github.com/ng-lightning/ng-lightning/commit/4d08456)), closes [#244](https://github.com/ng-lightning/ng-lightning/issues/244)



<a name="0.24.0"></a>
# [0.24.0](https://github.com/ng-lightning/ng-lightning/compare/v0.23.0...v0.24.0) (2016-10-12)


### Bug Fixes

* **forms:** checkbox/radios have more accessible DOM structure ([22a2464](https://github.com/ng-lightning/ng-lightning/commit/22a2464)), closes [#214](https://github.com/ng-lightning/ng-lightning/issues/214)
* **lookups:** correctly declare `debounce` as input instead of attribute ([170bcd1](https://github.com/ng-lightning/ng-lightning/commit/170bcd1))
* **lookups:** don't render `<label>` element if empty ([c50572e](https://github.com/ng-lightning/ng-lightning/commit/c50572e)), closes [#233](https://github.com/ng-lightning/ng-lightning/issues/233)
* **notifications:** clear timeout when destroyed ([c91a20c](https://github.com/ng-lightning/ng-lightning/commit/c91a20c)), closes [#237](https://github.com/ng-lightning/ng-lightning/issues/237)


### Features

* **build:** distribute ESM with metadata and UMD bundle ([a52702f](https://github.com/ng-lightning/ng-lightning/commit/a52702f)), closes [#239](https://github.com/ng-lightning/ng-lightning/issues/239)
* **app:** upgrade SLDS to to 2.1.2 ([8125ec7](https://github.com/ng-lightning/ng-lightning/commit/8125ec7))
* **modals:** support custom header template ([345bce7](https://github.com/ng-lightning/ng-lightning/commit/345bce7)), closes [#234](https://github.com/ng-lightning/ng-lightning/issues/234)
* **popovers:** support "manual" open and close with custom delay ([adc0fcc](https://github.com/ng-lightning/ng-lightning/commit/adc0fcc)), closes [#235](https://github.com/ng-lightning/ng-lightning/issues/235)
* **popovers:** support delayed closing ([cb0b2c6](https://github.com/ng-lightning/ng-lightning/commit/cb0b2c6)), closes [#231](https://github.com/ng-lightning/ng-lightning/issues/231)


### BREAKING CHANGES

* build: code is now available as ES modules or UMD bundle and no longer as commonjs
* forms: structural changes
  * all input/textarea/select inside `<ngl-form-element>` or `<ngl-form-group-element>` should have `nglFormControl` attribute
  * single checkboxes should be wrapped by `<ngl-form-checkbox>`

  Before:

  ```html
  <ngl-form-element><input type="checkbox" /></ngl-form-element>
  <ngl-form-element><select></select></ngl-form-element>
  ```

  After:

  ```html
  <ngl-form-checkbox><input nglFormControl type="checkbox" /></ngl-form-element>
  <ngl-form-element><select nglFormControl></select></ngl-form-element>
  ```
* lookups: `nglLookupLabel` should be hosted on `<template>`

  Before:

  ```html
  <ngl-lookup>
     <span nglLookupLabel>...</span>
  </ngl-lookup>
  ```

  After:

  ```html
  <ngl-lookup>
     <template nglLookupLabel>...</template>
  </ngl-lookup>

  ```
  or
  ```html
  <ngl-lookup label="..."></ngl-lookup>

  ```



<a name="0.23.0"></a>
# [0.23.0](https://github.com/ng-lightning/ng-lightning/compare/v0.22.0...v0.23.0) (2016-10-03)


### Bug Fixes

* **app:** add `forRoot` to `NglModule` ([6426534](https://github.com/ng-lightning/ng-lightning/commit/6426534)), closes [#228](https://github.com/ng-lightning/ng-lightning/issues/228)
* **config:** remove `provideNglConfig` for injectable `NglConfig` ([47acd3d](https://github.com/ng-lightning/ng-lightning/commit/47acd3d)), closes [#218](https://github.com/ng-lightning/ng-lightning/issues/218)
* **forms:** remove `nglForm` prefix from input attributes ([5e9f16a](https://github.com/ng-lightning/ng-lightning/commit/5e9f16a)), closes [#217](https://github.com/ng-lightning/ng-lightning/issues/217)
* **menus:** don't close when inner element is clicked and removed from DOM ([5361f80](https://github.com/ng-lightning/ng-lightning/commit/5361f80)), closes [#223](https://github.com/ng-lightning/ng-lightning/issues/223) [#224](https://github.com/ng-lightning/ng-lightning/issues/224)


### Features

* **config:** support runtime change of configuration ([3a14b44](https://github.com/ng-lightning/ng-lightning/commit/3a14b44)), closes [#219](https://github.com/ng-lightning/ng-lightning/issues/219)
* **popovers:** support delayed opening ([8878beb](https://github.com/ng-lightning/ng-lightning/commit/8878beb)), closes [#222](https://github.com/ng-lightning/ng-lightning/issues/222)
* **rating:** support custom color for on/off state ([0e771e1](https://github.com/ng-lightning/ng-lightning/commit/0e771e1)), closes [#226](https://github.com/ng-lightning/ng-lightning/issues/226)


### BREAKING CHANGES

* app: `NglModule` must now be imported using the `forRoot()` static method.
* config: In case you didn't override default configuration values, just remove `provideNglConfig()`. If you did then, check the `Configuration` section for more details.
* forms: renamed `nglForm*` attributes to just `*`

  Before:

  ```html
  <... [nglFormLabel]="..."></...>
  <... [nglFormError]="..."></...>
  <... [nglFormRequired]="..."></...>
  ```

  After:

  ```html
  <... [label]="..."></...>
  <... [error]="..."></...>
  <... [required]="..."></...>
  ```



<a name="0.22.0"></a>
# [0.22.0](https://github.com/ng-lightning/ng-lightning/compare/v0.21.0...v0.22.0) (2016-09-15)


### Features

* **app:** upgrade Angular to 2.0.0 ([cab4c08](https://github.com/ng-lightning/ng-lightning/commit/cab4c08)), closes [#213](https://github.com/ng-lightning/ng-lightning/issues/213)
* **datatables:** add loading overlay ([15fd577](https://github.com/ng-lightning/ng-lightning/commit/15fd577)), closes [#201](https://github.com/ng-lightning/ng-lightning/issues/201)
* **datatables:** add row event handler ([446fe68](https://github.com/ng-lightning/ng-lightning/commit/446fe68)), closes [#204](https://github.com/ng-lightning/ng-lightning/issues/204) [#208](https://github.com/ng-lightning/ng-lightning/issues/208)
* **datatables:** custom message when no data available ([052a0a6](https://github.com/ng-lightning/ng-lightning/commit/052a0a6)), closes [#205](https://github.com/ng-lightning/ng-lightning/issues/205)
* **datatables:** support custom header template ([c0ecd8c](https://github.com/ng-lightning/ng-lightning/commit/c0ecd8c)), closes [#206](https://github.com/ng-lightning/ng-lightning/issues/206) [#211](https://github.com/ng-lightning/ng-lightning/issues/211)
* **rating:** support `max` as input ([456ce76](https://github.com/ng-lightning/ng-lightning/commit/456ce76)), closes [#203](https://github.com/ng-lightning/ng-lightning/issues/203)
* **rating:** support custom icon ([95a013f](https://github.com/ng-lightning/ng-lightning/commit/95a013f)), closes [#200](https://github.com/ng-lightning/ng-lightning/issues/200) [#202](https://github.com/ng-lightning/ng-lightning/issues/202)


### Performance Improvements

* **NglInternalOutlet:** reduce number of checks needed ([2b3b1ab](https://github.com/ng-lightning/ng-lightning/commit/2b3b1ab)), closes [#209](https://github.com/ng-lightning/ng-lightning/issues/209)



<a name="0.21.0"></a>
# [0.21.0](https://github.com/ng-lightning/ng-lightning/compare/v0.20.0...v0.21.0) (2016-09-09)


### Bug Fixes

* **icons:** remove `default` as default color ([288e65b](https://github.com/ng-lightning/ng-lightning/commit/288e65b)), closes [#191](https://github.com/ng-lightning/ng-lightning/issues/191)
* **modals:** use default change detection strategy ([3e6fd4b](https://github.com/ng-lightning/ng-lightning/commit/3e6fd4b)), closes [#197](https://github.com/ng-lightning/ng-lightning/issues/197)
* **picklist:** convent filter to lowercase before compare ([17899ab](https://github.com/ng-lightning/ng-lightning/commit/17899ab))


### Features

* **lookups:** support custom message when no results found ([cd1b758](https://github.com/ng-lightning/ng-lightning/commit/cd1b758)), closes [#198](https://github.com/ng-lightning/ng-lightning/issues/198) [#199](https://github.com/ng-lightning/ng-lightning/issues/199)
* **paginations:** support custom text for non-number buttons ([3c38201](https://github.com/ng-lightning/ng-lightning/commit/3c38201)), closes [#193](https://github.com/ng-lightning/ng-lightning/issues/193) [#195](https://github.com/ng-lightning/ng-lightning/issues/195)


### BREAKING CHANGES

* icons: utility icons have no default type `default`

  Before:

  ```html
  <ngl-icon ...></ngl-icon>
  ```

  After:

  ```html
  <ngl-icon ... type="default"></ngl-icon>
  ```



<a name="0.20.0"></a>
# [0.20.0](https://github.com/ng-lightning/ng-lightning/compare/v0.19.0...v0.20.0) (2016-09-02)


### Features

* **app:** upgrade Angular 2 to rc.6 ([ea144aa](https://github.com/ng-lightning/ng-lightning/commit/ea144aa)), closes [#187](https://github.com/ng-lightning/ng-lightning/issues/187)



<a name="0.19.0"></a>
# [0.19.0](https://github.com/ng-lightning/ng-lightning/compare/v0.18.0...v0.19.0) (2016-08-25)


### Bug Fixes

* **app:** declare `@angular/*` as peer dependencies ([722cf23](https://github.com/ng-lightning/ng-lightning/commit/722cf23))


### Features

* **datepickers:** support custom month and day names ([1f7bbb3](https://github.com/ng-lightning/ng-lightning/commit/1f7bbb3)), closes [#184](https://github.com/ng-lightning/ng-lightning/issues/184)


### BREAKING CHANGES

* datepickers: Intl polypill for Safari is no longer needed



<a name="0.18.0"></a>
# [0.18.0](https://github.com/ng-lightning/ng-lightning/compare/v0.17.0...v0.18.0) (2016-08-24)


### Bug Fixes

* **pagination:** bound start page by total elements ([ee08318](https://github.com/ng-lightning/ng-lightning/commit/ee08318)), closes [#178](https://github.com/ng-lightning/ng-lightning/issues/178)


### Features

* **app:** upgrade Angular 2 to rc.5 and [@NgModule](https://github.com/NgModule) ([7b3a902](https://github.com/ng-lightning/ng-lightning/commit/7b3a902)), closes [#182](https://github.com/ng-lightning/ng-lightning/issues/182)


### BREAKING CHANGES

* app: use `@NgModule` to setup your application. Check the `Usage` section for more details.



<a name="0.17.0"></a>
# [0.17.0](https://github.com/ng-lightning/ng-lightning/compare/v0.16.0...v0.17.0) (2016-08-08)


### Bug Fixes

* **build:** support and test IE11 ([b925469](https://github.com/ng-lightning/ng-lightning/commit/b925469)), closes [#121](https://github.com/ng-lightning/ng-lightning/issues/121) [#163](https://github.com/ng-lightning/ng-lightning/issues/163)
* **icons:** use `utility` as default category for `svg[nglIcon]` ([c4b7cfe](https://github.com/ng-lightning/ng-lightning/commit/c4b7cfe))
* **modals:** simplify structure and correctly handle open state ([f87eeec](https://github.com/ng-lightning/ng-lightning/commit/f87eeec)), closes [#168](https://github.com/ng-lightning/ng-lightning/issues/168)
* **pick:** emit on `nglOptionDestroyed` when a selected option is "destroyed" ([65546e9](https://github.com/ng-lightning/ng-lightning/commit/65546e9)), closes [#156](https://github.com/ng-lightning/ng-lightning/issues/156)
* **popovers:** reposition generated popover after it's view initialized ([ae5a825](https://github.com/ng-lightning/ng-lightning/commit/ae5a825)), closes [#151](https://github.com/ng-lightning/ng-lightning/issues/151)


### Features

* **icons:** expose `svg[nglIcon]` component for increased flexibility ([e942ff1](https://github.com/ng-lightning/ng-lightning/commit/e942ff1)), closes [#161](https://github.com/ng-lightning/ng-lightning/issues/161)
* **lookups:** add search icon option ([63867ba](https://github.com/ng-lightning/ng-lightning/commit/63867ba)), closes [#162](https://github.com/ng-lightning/ng-lightning/issues/162)
* **lookups:** support polymorphic variation ([8249715](https://github.com/ng-lightning/ng-lightning/commit/8249715)), closes [#139](https://github.com/ng-lightning/ng-lightning/issues/139) [#165](https://github.com/ng-lightning/ng-lightning/issues/165)
* **menus:** add picklist component ([2482ebe](https://github.com/ng-lightning/ng-lightning/commit/2482ebe)), closes [#158](https://github.com/ng-lightning/ng-lightning/issues/158)
* **menus:** support picklist filter ([9cf07a7](https://github.com/ng-lightning/ng-lightning/commit/9cf07a7)), closes [#175](https://github.com/ng-lightning/ng-lightning/issues/175)
* **modals:** support directional footer ([6bf0d2d](https://github.com/ng-lightning/ng-lightning/commit/6bf0d2d)), closes [#172](https://github.com/ng-lightning/ng-lightning/issues/172)
* **modals:** support empty header ([723b563](https://github.com/ng-lightning/ng-lightning/commit/723b563)), closes [#169](https://github.com/ng-lightning/ng-lightning/issues/169)
* **modals:** support removed footer ([f88cbbd](https://github.com/ng-lightning/ng-lightning/commit/f88cbbd)), closes [#173](https://github.com/ng-lightning/ng-lightning/issues/173) [#174](https://github.com/ng-lightning/ng-lightning/issues/174)


### BREAKING CHANGES

* modals: modal footer is inside <template ngl-modal-footer>

  Before:

  ```html
  <ngl-modal>
    ...
    <button>Cancel</button>
    <button>Submit</button>
  </ngl-modal>
  ```

  After:

  ```html
  <ngl-modal>
    ...
    <template ngl-modal-footer>
      <button>Cancel</button>
      <button>Submit</button>
    </template>
  </ngl-modal>
  ```



<a name="0.16.0"></a>
# [0.16.0](https://github.com/ng-lightning/ng-lightning/compare/v0.15.0...v0.16.0) (2016-07-13)


### Bug Fixes

* **app:** export INglDatatableSort ([d4e26dc](https://github.com/ng-lightning/ng-lightning/commit/d4e26dc)), closes [#147](https://github.com/ng-lightning/ng-lightning/issues/147)
* **app:** use `NGL_PRECOMPILE` for precompiled directives ([6a3ba50](https://github.com/ng-lightning/ng-lightning/commit/6a3ba50)), closes [#148](https://github.com/ng-lightning/ng-lightning/issues/148)
* **datatables:** only render cell templates when needed ([6041743](https://github.com/ng-lightning/ng-lightning/commit/6041743)), closes [#149](https://github.com/ng-lightning/ng-lightning/issues/149)


### BREAKING CHANGES

* app: Add `NGL_PRECOMPILE` on your root component of your application.

  ```js
  import {NGL_DIRECTIVES, NGL_PRECOMPILE} from 'ng-lightning/ng-lightning';

  @Component({
    ...
    precompile: [NGL_PRECOMPILE],
    ...
  })
  export class App {
    ...
  }
  ```



<a name="0.15.0"></a>
# [0.15.0](https://github.com/ng-lightning/ng-lightning/compare/v0.14.0...v0.15.0) (2016-07-12)


### Bug Fixes

* **datatables:** don't force `slds-truncate` on each cell ([3c3bcaa](https://github.com/ng-lightning/ng-lightning/commit/3c3bcaa))


### Features

* **datatables:** support user defined cell classes per column ([071f614](https://github.com/ng-lightning/ng-lightning/commit/071f614)), closes [#144](https://github.com/ng-lightning/ng-lightning/issues/144)



<a name="0.14.0"></a>
# [0.14.0](https://github.com/ng-lightning/ng-lightning/compare/v0.13.1...v0.14.0) (2016-07-11)


### Features

* **app:** add datatable component ([d5e56bc](https://github.com/ng-lightning/ng-lightning/commit/d5e56bc)), closes [#140](https://github.com/ng-lightning/ng-lightning/issues/140)
* **app:** upgrade Angular 2 to rc.4 ([208a755](https://github.com/ng-lightning/ng-lightning/commit/208a755)), closes [#138](https://github.com/ng-lightning/ng-lightning/issues/138)
* **datables:** add sorting ([8bab4af](https://github.com/ng-lightning/ng-lightning/commit/8bab4af)), closes [#142](https://github.com/ng-lightning/ng-lightning/issues/142)
* **paginations:** `exportAs` starting and ending row index ([8ba2107](https://github.com/ng-lightning/ng-lightning/commit/8ba2107)), closes [#141](https://github.com/ng-lightning/ng-lightning/issues/141)
* **popovers:** support string as content ([76c956f](https://github.com/ng-lightning/ng-lightning/commit/76c956f)), closes [#143](https://github.com/ng-lightning/ng-lightning/issues/143)



<a name="0.13.1"></a>
## [0.13.1](https://github.com/ng-lightning/ng-lightning/compare/v0.13.0...v0.13.1) (2016-06-23)


### Bug Fixes

* **popovers:** always run change detection on creation ([a5b54f9](https://github.com/ng-lightning/ng-lightning/commit/a5b54f9)), closes [#134](https://github.com/ng-lightning/ng-lightning/issues/134)
* **popovers:** specify absolute position with bigger specificity ([6c8c825](https://github.com/ng-lightning/ng-lightning/commit/6c8c825))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/ng-lightning/ng-lightning/compare/v0.12.1...v0.13.0) (2016-06-23)


### Bug Fixes

* **popover:** ensure that a position call happens after layouts have finished ([74e5ba7](https://github.com/ng-lightning/ng-lightning/commit/74e5ba7))


### Features

* **popover:** add `nglPopoverBehavior` to handle common open/hide events ([ff3883b](https://github.com/ng-lightning/ng-lightning/commit/ff3883b)), closes [#133](https://github.com/ng-lightning/ng-lightning/issues/133)



<a name="0.12.1"></a>
## [0.12.1](https://github.com/ng-lightning/ng-lightning/compare/v0.12.0...v0.12.1) (2016-06-17)



<a name="0.12.0"></a>
# [0.12.0](https://github.com/ng-lightning/ng-lightning/compare/v0.11.1...v0.12.0) (2016-06-17)


### Bug Fixes

* **NglBreadcrumbs:** make breadcrumbs markup compatible with v2.0 ([8377b5e](https://github.com/ng-lightning/ng-lightning/commit/8377b5e))
* **NglIcon:** make custom icons compatible with v2.0 ([d5bac96](https://github.com/ng-lightning/ng-lightning/commit/d5bac96))
* **NglLookup:** make lookup markup compatible with v2.0 ([bc653dd](https://github.com/ng-lightning/ng-lightning/commit/bc653dd))
* **NglPill:** make compatible with v2.0 ([d5f0434](https://github.com/ng-lightning/ng-lightning/commit/d5f0434)), closes [#122](https://github.com/ng-lightning/ng-lightning/issues/122)


### Features

* **app:** support alternate radio & checkbox group component ([278f97e](https://github.com/ng-lightning/ng-lightning/commit/278f97e)), closes [#123](https://github.com/ng-lightning/ng-lightning/issues/123)
* **app:** upgrade SLDS to v2.0 ([91502ea](https://github.com/ng-lightning/ng-lightning/commit/91502ea))
* **forms:** support `<template>` element as label ([f9d85b5](https://github.com/ng-lightning/ng-lightning/commit/f9d85b5)), closes [#127](https://github.com/ng-lightning/ng-lightning/issues/127)
* **lookup:** support custom item template for results ([3732a5a](https://github.com/ng-lightning/ng-lightning/commit/3732a5a)), closes [#66](https://github.com/ng-lightning/ng-lightning/issues/66) [#130](https://github.com/ng-lightning/ng-lightning/issues/130)


### BREAKING CHANGES

* app: `ngl-form-group-element` should be added as attribute on a `<label>`

  Before:

  ```html
  <ngl-form-group-element>...</ngl-form-group-element>
  ```

  After:
  ```html
  <label ngl-form-group-element>...</label>
  ```
* NglPill: `ngl-pill` is now an element instead of attribute and `<a>` moved inside content

  Before:

  ```html
  <a href="..." nglPill>
    <ngl-icon nglPillImage></ngl-icon>With icon
  </a>
  ```

  After:
  ```html
  <ngl-pill>
    <ngl-icon nglPillImage></ngl-icon>
    <a href="...">With icon</a>
  </ngl-pill>
  ```



<a name="0.11.1"></a>
## [0.11.1](https://github.com/ng-lightning/ng-lightning/compare/v0.11.0...v0.11.1) (2016-06-08)


### Bug Fixes

* **NglFormElement:** don't let form directives leak on whole app ([4be0c3c](https://github.com/ng-lightning/ng-lightning/commit/4be0c3c)), closes [#120](https://github.com/ng-lightning/ng-lightning/issues/120)



<a name="0.11.0"></a>
# [0.11.0](https://github.com/ng-lightning/ng-lightning/compare/v0.10.1...v0.11.0) (2016-06-07)


### Bug Fixes

* **util:** namespace automatically generated IDs ([3ca0956](https://github.com/ng-lightning/ng-lightning/commit/3ca0956))


### Features

* **app:** add checkbox form component ([b7a4673](https://github.com/ng-lightning/ng-lightning/commit/b7a4673)), closes [#115](https://github.com/ng-lightning/ng-lightning/issues/115)
* **app:** add input form component ([f159037](https://github.com/ng-lightning/ng-lightning/commit/f159037)), closes [#112](https://github.com/ng-lightning/ng-lightning/issues/112)
* **app:** add radio & checkbox group component ([5b306ec](https://github.com/ng-lightning/ng-lightning/commit/5b306ec)), closes [#117](https://github.com/ng-lightning/ng-lightning/issues/117)
* **app:** add select form component ([5489cb6](https://github.com/ng-lightning/ng-lightning/commit/5489cb6)), closes [#114](https://github.com/ng-lightning/ng-lightning/issues/114)
* **app:** add textarea form component ([9d14331](https://github.com/ng-lightning/ng-lightning/commit/9d14331)), closes [#113](https://github.com/ng-lightning/ng-lightning/issues/113)



<a name="0.10.1"></a>
## [0.10.1](https://github.com/ng-lightning/ng-lightning/compare/v0.10.0...v0.10.1) (2016-06-01)


### Bug Fixes

* **build:** define `ts-helpers` as dependency ([7a5bde3](https://github.com/ng-lightning/ng-lightning/commit/7a5bde3))
* **NglPopover:** explicitly destroy popover when host is destroyed ([fb4f325](https://github.com/ng-lightning/ng-lightning/commit/fb4f325)), closes [#111](https://github.com/ng-lightning/ng-lightning/issues/111)



<a name="0.10.0"></a>
# [0.10.0](https://github.com/ng-lightning/ng-lightning/compare/v0.9.0...v0.10.0) (2016-05-30)


### Bug Fixes

* **NglDatepicker:** input/output Date object instead of string ([aec4e07](https://github.com/ng-lightning/ng-lightning/commit/aec4e07))
* **NglPopover:** fix memory leak when hiding ([b869c03](https://github.com/ng-lightning/ng-lightning/commit/b869c03)), closes [#107](https://github.com/ng-lightning/ng-lightning/issues/107)


### Features

* **app:** add datepicker component ([c77afde](https://github.com/ng-lightning/ng-lightning/commit/c77afde)), closes [#86](https://github.com/ng-lightning/ng-lightning/issues/86)
* **NglDatepicker:** add option to show "Today" button ([c26bdf4](https://github.com/ng-lightning/ng-lightning/commit/c26bdf4)), closes [#108](https://github.com/ng-lightning/ng-lightning/issues/108)
* **NglPopover:** support reusable `<template>` elements ([6b49cc0](https://github.com/ng-lightning/ng-lightning/commit/6b49cc0)), closes [#106](https://github.com/ng-lightning/ng-lightning/issues/106)


### Performance Improvements

* **NglBreadcrumbs:** use `onPush` as change detection strategy ([3d9053f](https://github.com/ng-lightning/ng-lightning/commit/3d9053f))
* **NglPill:** use `onPush` as change detection strategy ([e0fb26c](https://github.com/ng-lightning/ng-lightning/commit/e0fb26c)), closes [#104](https://github.com/ng-lightning/ng-lightning/issues/104)


### BREAKING CHANGES

* NglPopover:   
  * `nglPopoverTrigger` renamed to `nglPopover`
  * `nglPlacement` renamed to `nglPopoverPlacement`
  * Theme and tooltip declarations are now input of `nglPopover`

  Before:

  ```html
  <ngl-popover #tip theme="success">my text</ngl-popover>
  <span [nglPopoverTrigger]="tip" [nglPlacement]="placement" ...>here</span>
  ```

  After:
  ```html
  <template #tip>my text</template>
  <span [nglPopover]="tip" [nglPopoverPlacement]="placement" nglPopoverTheme="success" ...>here</span>
  ```



<a name="0.9.0"></a>
# [0.9.0](https://github.com/ng-lightning/ng-lightning/compare/v0.8.0...v0.9.0) (2016-05-20)


### Bug Fixes

* **NglPagination:** add `trackBy` on page elements ([0491b1e](https://github.com/ng-lightning/ng-lightning/commit/0491b1e)), closes [#98](https://github.com/ng-lightning/ng-lightning/issues/98)
* **NglPagination:** don't keep internal state of current page ([87eb763](https://github.com/ng-lightning/ng-lightning/commit/87eb763)), closes [#93](https://github.com/ng-lightning/ng-lightning/issues/93)


### Features

* **build:** improve SystemJS bundle size ([91f9d54](https://github.com/ng-lightning/ng-lightning/commit/91f9d54)), closes [#89](https://github.com/ng-lightning/ng-lightning/issues/89)
* **NglPagination:** support always visible boundary numbers ([ede3bf1](https://github.com/ng-lightning/ng-lightning/commit/ede3bf1)), closes [#92](https://github.com/ng-lightning/ng-lightning/issues/92)
* **NglPagination:** support First/Last buttons ([6d04c1b](https://github.com/ng-lightning/ng-lightning/commit/6d04c1b)), closes [#95](https://github.com/ng-lightning/ng-lightning/issues/95)
* **NglTabs:** support more verbose syntax for "richer" heading ([c195d52](https://github.com/ng-lightning/ng-lightning/commit/c195d52)), closes [#103](https://github.com/ng-lightning/ng-lightning/issues/103)


### BREAKING CHANGES

* NglTabs: `nglTabId` is now a separate input

  Before:

  ```html
  <template ngl-tab="myid" ...></template>
  ```

  After:
  ```html
  <template ngl-tab nglTabId="myid" ...></template>
  ```



<a name="0.8.0"></a>
# [0.8.0](https://github.com/ng-lightning/ng-lightning/compare/v0.7.0...v0.8.0) (2016-05-12)


### Bug Fixes

* **build:** import from `rxjs/Rx` to avoid SystemJS issues ([2cd7f96](https://github.com/ng-lightning/ng-lightning/commit/2cd7f96)), closes [#80](https://github.com/ng-lightning/ng-lightning/issues/80)


### Features

* **NglLookup:** support single selection ([b5f1013](https://github.com/ng-lightning/ng-lightning/commit/b5f1013)), closes [#79](https://github.com/ng-lightning/ng-lightning/issues/79)
* **NglTab:** add `exportAs` ([f63646b](https://github.com/ng-lightning/ng-lightning/commit/f63646b)), closes [#84](https://github.com/ng-lightning/ng-lightning/issues/84)
* **NglTab:** support template as heading ([93fa880](https://github.com/ng-lightning/ng-lightning/commit/93fa880)), closes [#85](https://github.com/ng-lightning/ng-lightning/issues/85)


### BREAKING CHANGES

* NglLookup: `pick` is now two way binded

  Before:

  ```html
  <ngl-lookup (pick)="selected = $event" ...></ngl-lookup>
  ```

  After:
  ```html
  <ngl-lookup [(pick)]="selected" ...></ngl-lookup>
  ```



<a name="0.7.0"></a>
# [0.7.0](https://github.com/ng-lightning/ng-lightning/compare/v0.6.0...v0.7.0) (2016-04-19)


### Bug Fixes

* **app:** deprecate `ngl-icon-button` in favour of `ngl-icon` ([339f867](https://github.com/ng-lightning/ng-lightning/commit/339f867)), closes [#70](https://github.com/ng-lightning/ng-lightning/issues/70)
* **nglPillImage:** handle `ngl-icon` and `ngl-avatar` ([4be9e09](https://github.com/ng-lightning/ng-lightning/commit/4be9e09)), closes [#74](https://github.com/ng-lightning/ng-lightning/issues/74)

### Code Refactoring

* **NglIcon:** move sprite definition into component from `NglConfig` ([62c3eec](https://github.com/ng-lightning/ng-lightning/commit/62c3eec))

### Features

* **app:** add notification component ([2b94946](https://github.com/ng-lightning/ng-lightning/commit/2b94946)), closes [#65](https://github.com/ng-lightning/ng-lightning/issues/65)
* **NglIcon:** support all available sprites ([04e6f64](https://github.com/ng-lightning/ng-lightning/commit/04e6f64)), closes [#73](https://github.com/ng-lightning/ng-lightning/issues/73)
* **NglNotification:** add timeout support ([78e0e6b](https://github.com/ng-lightning/ng-lightning/commit/78e0e6b)), closes [#75](https://github.com/ng-lightning/ng-lightning/issues/75)


### BREAKING CHANGES

* NglIcon: Don't include `utility-sprite` into `svgPath` of `NglConfig`
* app: Rename `<ngl-icon-button>` to `<ngl-icon>`

  Before:

  ```html
  <ngl-icon-button icon="add" ...></ngl-icon-button>
  ```

  After:
  ```html
  <ngl-icon icon="add" ...></ngl-icon>
  ```



<a name="0.6.0"></a>
# [0.6.0](https://github.com/ng-lightning/ng-lightning/compare/v0.5.0...v0.6.0) (2016-04-11)


### Bug Fixes

* **NglDropdown:** apply picklist styles if used in conjunction with `nglPick` ([36302b2](https://github.com/ng-lightning/ng-lightning/commit/36302b2)), closes [#64](https://github.com/ng-lightning/ng-lightning/issues/64)
* **NglIcon:** provide a way to omit default text type ([9428d56](https://github.com/ng-lightning/ng-lightning/commit/9428d56)), closes [#58](https://github.com/ng-lightning/ng-lightning/issues/58) [#61](https://github.com/ng-lightning/ng-lightning/issues/61)
* **NglPill:** existence of `nglPillRemove` determines removability ([1095a26](https://github.com/ng-lightning/ng-lightning/commit/1095a26)), closes [#63](https://github.com/ng-lightning/ng-lightning/issues/63)

### Features

* **app:** add pill component ([f922e09](https://github.com/ng-lightning/ng-lightning/commit/f922e09)), closes [#50](https://github.com/ng-lightning/ng-lightning/issues/50) [#59](https://github.com/ng-lightning/ng-lightning/issues/59)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/ng-lightning/ng-lightning/compare/v0.4.0...v0.5.0) (2016-04-07)


### Bug Fixes

* **NglPick:** change `activeClass` to `nglPickActiveClass` and support on `nglPick` ([9837f6f](https://github.com/ng-lightning/ng-lightning/commit/9837f6f))
* **NglRating:** prevent icons from wrapping ([664e595](https://github.com/ng-lightning/ng-lightning/commit/664e595))

### Features

* **app:** add lookup component ([c4ea74e](https://github.com/ng-lightning/ng-lightning/commit/c4ea74e)), closes [#48](https://github.com/ng-lightning/ng-lightning/issues/48)
* **demo:** add a picklist example inside menus ([14ebd03](https://github.com/ng-lightning/ng-lightning/commit/14ebd03)), closes [#51](https://github.com/ng-lightning/ng-lightning/issues/51) [#57](https://github.com/ng-lightning/ng-lightning/issues/57)
* **NglLookup:** support aria attributes and keyboard selection ([28a0ad6](https://github.com/ng-lightning/ng-lightning/commit/28a0ad6)), closes [#53](https://github.com/ng-lightning/ng-lightning/issues/53)
* **NglPickOption:** add `exportAs` ([8314999](https://github.com/ng-lightning/ng-lightning/commit/8314999)), closes [#56](https://github.com/ng-lightning/ng-lightning/issues/56)
* **NglPickOption:** add aria role and keyboard interaction ([add94a1](https://github.com/ng-lightning/ng-lightning/commit/add94a1)), closes [#55](https://github.com/ng-lightning/ng-lightning/issues/55)
* **NglRating:** support custom size ([c4b7abd](https://github.com/ng-lightning/ng-lightning/commit/c4b7abd)), closes [#47](https://github.com/ng-lightning/ng-lightning/issues/47)


### BREAKING CHANGES

* NglPick:   Before:

  ```html
  <div [(nglPick)]="selected">
    ...
    <button type="button" nglPickOption="..." activeClass="custom-class"></button>
  ```

  After:
  ```html
  <div [(nglPick)]="selected" nglPickActiveClass="slds-button--brand">
    ...
    <button type="button" nglPickOption="..." nglPickActiveClass="custom-class"></button>
  </div>
  ```



<a name="0.4.0"></a>
# [0.4.0](https://github.com/ng-lightning/ng-lightning/compare/v0.3.0...v0.4.0) (2016-03-30)


### Bug Fixes

* **NglBreadcrumbs:** support `aria-labelledby` for assistive text ([0167009](https://github.com/ng-lightning/ng-lightning/commit/0167009))
* **nglDropdown:** set class `slds-dropdown-trigger--click` ([421a8f4](https://github.com/ng-lightning/ng-lightning/commit/421a8f4)), closes [#37](https://github.com/ng-lightning/ng-lightning/issues/37)
* **nglPick:** use `nglPick` instead of `selected` ([7549bb2](https://github.com/ng-lightning/ng-lightning/commit/7549bb2))
* **NglTabs:** prevent default window scrolling on arrow keys press ([7cda810](https://github.com/ng-lightning/ng-lightning/commit/7cda810)), closes [#43](https://github.com/ng-lightning/ng-lightning/issues/43)

### Features

* **app:** add breadcrumbs component ([ad11599](https://github.com/ng-lightning/ng-lightning/commit/ad11599)), closes [#24](https://github.com/ng-lightning/ng-lightning/issues/24) [#34](https://github.com/ng-lightning/ng-lightning/issues/34)
* **app:** add button group component ([69ee128](https://github.com/ng-lightning/ng-lightning/commit/69ee128))
* **app:** add section component ([ffaf227](https://github.com/ng-lightning/ng-lightning/commit/ffaf227))
* **NglPick:** support multiple selection ([fecb4ee](https://github.com/ng-lightning/ng-lightning/commit/fecb4ee)), closes [#42](https://github.com/ng-lightning/ng-lightning/issues/42) [#45](https://github.com/ng-lightning/ng-lightning/issues/45)
* **nglPopover:** add `theme` as input ([aafb713](https://github.com/ng-lightning/ng-lightning/commit/aafb713)), closes [#39](https://github.com/ng-lightning/ng-lightning/issues/39)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/ng-lightning/ng-lightning/compare/v0.2.0...v0.3.0) (2016-03-22)


### Bug Fixes

* **demo:** properly highlight html language ([ebd8bdb](https://github.com/ng-lightning/ng-lightning/commit/ebd8bdb))
* **nglButtonIcon:** default class is not removed ([77466b3](https://github.com/ng-lightning/ng-lightning/commit/77466b3)), closes [#22](https://github.com/ng-lightning/ng-lightning/issues/22) [#23](https://github.com/ng-lightning/ng-lightning/issues/23)
* **nglModal:** support `aria-labelledby` to the modal’s heading ([607a92e](https://github.com/ng-lightning/ng-lightning/commit/607a92e)), closes [#35](https://github.com/ng-lightning/ng-lightning/issues/35)
* **nglPopover:** position call happens after all layouts have finished ([8834564](https://github.com/ng-lightning/ng-lightning/commit/8834564)), closes [#33](https://github.com/ng-lightning/ng-lightning/issues/33)
* **nglSpinner:** make container class configurable instead of required ([1175645](https://github.com/ng-lightning/ng-lightning/commit/1175645)), closes [#32](https://github.com/ng-lightning/ng-lightning/issues/32)

### Features

* **app:** add dropdowns component ([7c6b155](https://github.com/ng-lightning/ng-lightning/commit/7c6b155)), closes [#12](https://github.com/ng-lightning/ng-lightning/issues/12)
* **app:** add popovers component ([9a9b8e5](https://github.com/ng-lightning/ng-lightning/commit/9a9b8e5)), closes [#27](https://github.com/ng-lightning/ng-lightning/issues/27)
* **build:** add systemjs bundle to distribution ([a2d2b99](https://github.com/ng-lightning/ng-lightning/commit/a2d2b99))
* **build:** integrate with Saucelabs for testing ([f2272d4](https://github.com/ng-lightning/ng-lightning/commit/f2272d4))
* **demo:** add live edit button ([f7f8855](https://github.com/ng-lightning/ng-lightning/commit/f7f8855)), closes [#10](https://github.com/ng-lightning/ng-lightning/issues/10)
* **nglIcon:** ability to specify extra classes for SVG ([f8baa0b](https://github.com/ng-lightning/ng-lightning/commit/f8baa0b)), closes [#28](https://github.com/ng-lightning/ng-lightning/issues/28) [#31](https://github.com/ng-lightning/ng-lightning/issues/31)
* **util:** support generation of unique IDs ([afe628d](https://github.com/ng-lightning/ng-lightning/commit/afe628d))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/ng-lightning/ng-lightning/compare/v0.1.0...v0.2.0) (2016-03-10)


### Bug Fixes

* **buttons:** don't use default class when value is empty or not set ([66a8237](https://github.com/ng-lightning/ng-lightning/commit/66a8237)), closes [#3](https://github.com/ng-lightning/ng-lightning/issues/3)
* **NGL_CONFIG:** relative path for SVG to use application's `<base>` ([e465d69](https://github.com/ng-lightning/ng-lightning/commit/e465d69))

### Features

* **app:** add avatar component ([6b24956](https://github.com/ng-lightning/ng-lightning/commit/6b24956)), closes [#6](https://github.com/ng-lightning/ng-lightning/issues/6)
* **app:** add pagination component ([66d82cf](https://github.com/ng-lightning/ng-lightning/commit/66d82cf))
* **app:** add rating component ([f2623cc](https://github.com/ng-lightning/ng-lightning/commit/f2623cc)), closes [#8](https://github.com/ng-lightning/ng-lightning/issues/8)
* **build:** make logging level while testing configurable ([b23fb91](https://github.com/ng-lightning/ng-lightning/commit/b23fb91)), closes [#5](https://github.com/ng-lightning/ng-lightning/issues/5) [#7](https://github.com/ng-lightning/ng-lightning/issues/7)
* **config:** use `provideNglConfig` to hide bootstrapping complexity ([5b1b1ec](https://github.com/ng-lightning/ng-lightning/commit/5b1b1ec))


### BREAKING CHANGES

* config: Use `provideNglConfig` instead of `NGL_CONFIG`.

  Before:

  ```js
  import {NGL_CONFIG} from 'ng-lightning/ng-lightning';

  bootstrap(App, [
    provide(NGL_CONFIG, {useValue: {}}),
    ...
  ]);
  ```

  After:

  ```js
  import {provideNglConfig} from 'ng-lightning/ng-lightning';

  bootstrap(App, [
    provideNglConfig({...}),
    ...
  ]);
  ```



<a name="0.1.0"></a>
# [0.1.0](https://github.com/ng-lightning/ng-lightning/compare/f2bbc41...v0.1.0) (2016-03-04)


### Features

* **app:** add badge component ([e67741c](https://github.com/ng-lightning/ng-lightning/commit/e67741c))
* **app:** add button components ([4045bd3](https://github.com/ng-lightning/ng-lightning/commit/4045bd3))
* **app:** add icon component ([527b24f](https://github.com/ng-lightning/ng-lightning/commit/527b24f))
* **app:** add modal component ([c34019e](https://github.com/ng-lightning/ng-lightning/commit/c34019e))
* **app:** add tabs/tab components ([f2bbc41](https://github.com/ng-lightning/ng-lightning/commit/f2bbc41))
* **app:** add spinner component ([8cfd811](https://github.com/ng-lightning/ng-lightning/commit/8cfd811))
