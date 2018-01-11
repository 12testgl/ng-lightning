import { AppPage } from './app.po';
import { promise } from "selenium-webdriver";

describe('demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display loading message', () => {
    page.navigateTo();
    expect(strip(page.getMenuText())).toEqual('NG-LIGHTNINGComponentsSupport');
  });
});

export function strip(str: promise.Promise<string>) {
  return str.then(value => value.replace(/(\s|\n|\t)/g, ''));
}
