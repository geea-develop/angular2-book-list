import { BookListPage } from './app.po';

describe('book-list App', () => {
  let page: BookListPage;

  beforeEach(() => {
    page = new BookListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
