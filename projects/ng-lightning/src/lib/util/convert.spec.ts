import { toBoolean } from './convert';

describe('convert', () => {

  it('`toBoolean`', () => {
    expect(toBoolean('')).toBe(true);
    expect(toBoolean('false')).toBe(false);

    expect(toBoolean(true)).toBe(true);
    expect(toBoolean(false)).toBe(false);
  });
});
