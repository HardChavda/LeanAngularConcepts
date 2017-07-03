import { LeanAngularConceptsPage } from './app.po';

describe('lean-angular-concepts App', () => {
  let page: LeanAngularConceptsPage;

  beforeEach(() => {
    page = new LeanAngularConceptsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
