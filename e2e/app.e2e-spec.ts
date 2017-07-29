import { JexiaTestPage } from './app.po';

describe('jexia-test App', () => {
  let page: JexiaTestPage;

  beforeEach(() => {
    page = new JexiaTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
