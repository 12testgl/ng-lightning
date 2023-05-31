import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-file-upload-basic',
  templateUrl: './basic.html',
})
export class DemoFileUploadBasic {
  ctrl = new UntypedFormControl(null, [Validators.required]);
}
