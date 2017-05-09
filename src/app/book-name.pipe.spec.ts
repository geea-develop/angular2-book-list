import { BookNamePipe } from './book-name.pipe';

describe('BookNamePipe', () => {
  it('create an instance', () => {
    const pipe = new BookNamePipe();
    expect(pipe).toBeTruthy();
  });
});
