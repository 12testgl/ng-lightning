# `<ngl-pagination>`

### Input

  * `page: number`: Current page number.
  * `total: number`: Total number of items in all pages.
  * `limit?: number = 0`:  Limit number of visible pages. A value less than one indicates that there is no limitation.
  * `boundaryLinks?: boolean = false`: Whether to display First / Last buttons.
  * `boundaryNumbers?: number = 0`: Define how many of the first and last page numbers to always show.
  * `perPage?: number = 10`: Maximum number of items per page.
  * `firstText?: string = 'First'`: Displayed string for First button.
  * `previousText?: string = 'Previous'`: Displayed string for Previous button.
  * `nextText?: string = 'Next'`: Displayed string for Next button.
  * `lastText?: string = 'Last'`: Displayed string for Last button.

### Output

  * `pageChange: EventEmitter<number>`: the page clicked in order to select

### Export

  * `start: number`: Starting row index of current page
  * `end: number`: Last row index of current page
