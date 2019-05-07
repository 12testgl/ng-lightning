import { Component, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'app-demo-datepickers-i18n',
  templateUrl: './i18n.html',
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
})
export class DemoDatepickersI18n {

  date: Date;

}
