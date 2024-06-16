import { UnixToDaysPipe } from './unix-to-days.pipe';

describe('UnixToDaysPipe', () => {
  it('create an instance', () => {
    const pipe = new UnixToDaysPipe();
    expect(pipe).toBeTruthy();
  });
});
