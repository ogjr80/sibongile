import { SibongilePage } from './app.po';

describe('sibongile App', () => {
  let page: SibongilePage;

  beforeEach(() => {
    page = new SibongilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
