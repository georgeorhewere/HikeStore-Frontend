import { Paginator } from './paginator';

describe('Paginator', () => {
  it('should create an instance', () => {
    expect(new Paginator([], 3)).toBeTruthy();
  });
});
