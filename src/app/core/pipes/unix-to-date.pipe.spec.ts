import { UnixToDatePipe } from './unix-to-date.pipe';

describe('UnixToDatePipe', () => {
  it('create an instance', () => {
    const pipe = new UnixToDatePipe();
    expect(pipe).toBeTruthy();
  });
});
