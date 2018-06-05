import { AngularMaterialSkeletonPage } from './app.po';

describe('angular-material-skeleton App', () => {
  let page: AngularMaterialSkeletonPage;

  beforeEach(() => {
    page = new AngularMaterialSkeletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
