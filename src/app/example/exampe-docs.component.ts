import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { openOnStackBlitz } from './stackblitz';

@Component({
  selector: 'app-demo-example-docs',
  templateUrl: './exampe-docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDocsComponent {

  selectedTab = 0;

  @Input() dir: string;

  @Input() file: string;

  @Input() ts: TemplateRef<any>;

  @Input() markup: TemplateRef<any>;

  @Input() tsRaw: string;

  @Input() markupRaw: string;

  tryItOut() {
    openOnStackBlitz(this.dir, this.file, decodeURIComponent(this.tsRaw), decodeURIComponent(this.markupRaw));
  }
}
