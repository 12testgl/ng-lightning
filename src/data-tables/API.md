# `<ngl-data-table>`

### Input

 * `type?: bordered | scrollable | stacked | stacked-horizontal`: The type of the data table. Default is `bordered`
 * `thead: IHead[]`:  A list of header objects with optional sorting information.
 * `tbody: any[]`: The actual data list. The values of a record are going to be displayed according to the thead list.
 
### Output
 
 * `onSort: EventEmitter<IHead>`: the header of the column by which the table should be sorted.
