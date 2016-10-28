import { by, element } from 'protractor';
import { Utilities } from './utilities';

export class CleanToTheCorePage {
  navigateTo() {
    return Utilities.navTo('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
