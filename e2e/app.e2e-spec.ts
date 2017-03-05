import { RepresentationAppPage } from './app.po';

describe('representation-app App', function() {
  let page: RepresentationAppPage;

  beforeEach(() => {
    page = new RepresentationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
