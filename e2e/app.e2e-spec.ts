import { PipWebui2SampleLibPage } from './app.po';

describe('pip-webui2-layouts App', () => {
  let page: PipWebui2SampleLibPage;

  beforeEach(() => {
    page = new PipWebui2SampleLibPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
