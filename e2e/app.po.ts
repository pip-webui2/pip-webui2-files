import { browser, by, element } from 'protractor';

export class PipWebui2SampleLibPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
