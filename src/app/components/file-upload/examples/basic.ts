import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-file-upload-basic',
  templateUrl: './basic.html',
})
export class DemoFileUploadBasic {
  ctrl = new FormControl(null, [Validators.required]);
}
