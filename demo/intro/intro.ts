import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  templateUrl: './intro.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent {
  install = require('!!prismjs?lang=bash!./install.md');
  bundle = require('!!prismjs?lang=typescript!./bundle.md').replace('x.x.x', __ENV__.version).replace(/\{/g, `&#x007b;`).replace(/\}/g, `&#x007d;`);
  usageApp = require('!!prismjs?lang=typescript!./usage-app.md').replace(/\{/g, `&#x007b;`).replace(/\}/g, `&#x007d;`);
  config = require('!!prismjs?lang=typescript!./config.md').replace(/\{/g, `&#x007b;`).replace(/\}/g, `&#x007d;`);
  configRun = require('!!prismjs?lang=typescript!./config-run.md').replace(/\{/g, `&#x007b;`).replace(/\}/g, `&#x007d;`);
}
