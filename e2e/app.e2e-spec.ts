import { HeroLifePage } from './app.po';

describe('hero-life App', function() {
  let page: HeroLifePage;

  beforeEach(() => {
    page = new HeroLifePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
