import { NglConfig } from 'ng-lightning';

export class AppComponent {

  constructor(private config: NglConfig) {}

  changeConfig() {
    this.config.update({
      svgPath: 'new/path',
      ...,
    });
  }
}
