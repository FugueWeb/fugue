import { UnsafeHtmlPipe } from './unsafe-html.pipe';

describe('UnsafeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new UnsafeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
