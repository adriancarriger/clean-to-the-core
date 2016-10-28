import { browser } from 'protractor';

export class Utilities {
  static navTo(url: string) {
    let basePath = '';
    if (process.env.PROTRACTOR_ENV !== 'local') {
      basePath = '/clean-to-the-core';
    }
    return browser.get(basePath + url);
  }
}
