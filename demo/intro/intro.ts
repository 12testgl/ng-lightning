import {Component, ChangeDetectionStrategy} from '@angular/core';
const prism = require('prismjs');

@Component({
  templateUrl: './intro.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent {
  install = prism.highlight(require('!!raw!./install.md'), prism.languages.clike);
  bundle = prism.highlight(require('!!raw!./bundle.md').replace('x.x.x', process.env.version), prism.languages.javascript);
  usageApp = prism.highlight(require('!!raw!./usage-app.md'), prism.languages.javascript);
  config = prism.highlight(require('!!raw!./config.md'), prism.languages.javascript);
  configRun = prism.highlight(require('!!raw!./config-run.md'), prism.languages.javascript);
}
