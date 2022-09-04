import { FirstNameOnlyPipe } from './first-name-only.pipe';

describe('FirstNameOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstNameOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
