import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-prompt-basic',
  templateUrl: './basic.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoPromptBasic {

  opened = false;
  prompt = 'error';

  open() {
    this.opened = !this.opened;
  }

  cancel() {
    this.opened = false;
  }
}
