import { AngularMaterialTutorialPage } from './app.po';

describe('angular-material-tutorial App', () => {
  let page: AngularMaterialTutorialPage;

  beforeEach(() => {
    page = new AngularMaterialTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
