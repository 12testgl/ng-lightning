import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenuText() {
    return element(by.css('app div')).getText();
  }
}
