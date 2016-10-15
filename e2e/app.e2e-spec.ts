import { CleanToTheCorePage } from './app.po';

describe('clean-to-the-core App', function() {
  let page: CleanToTheCorePage;

  beforeEach(() => {
    page = new CleanToTheCorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
