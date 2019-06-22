# <ngl-file-upload>

Supports `[(ngModel)]` and `[formControl]`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[label]` | Label that appears above the upload area. | string \| TemplateRef | |
| `[accept]` | File extensions and types that can be accepted. See [input accept Attribute](https://www.w3schools.com/tags/att_input_accept.asp). | string \| string[] | |
| `[disabled]` | Whether file selection is disabled. | boolean | false |
| `[maxFiles]` | How many files can be selected simultaneously. `0` means unlimited. | number | 1 |
| `[maxFilesize]` | File size limit in bytes. `0` means unlimited. | number | 0 |
| `[error]` | Error message. | string \| TemplateRef | |
| `[uploadButtonLabel]` | Text for button to open file selector. | string | 'Upload Files' |
| `[dropZoneLabel]` | Text to display inside drop zone. | string | 'or Drop Files' |
