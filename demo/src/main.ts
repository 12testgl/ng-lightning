import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NglDemoModule } from './app/app.module';
import { environment } from './environments/environment';
import { APP_BASE_HREF } from "@angular/common";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NglDemoModule, {
  providers: [
    {provide: APP_BASE_HREF, useValue: environment.production ? '/ng-lightning/' : '/',}
  ]
}).catch(err => console.log(err));
