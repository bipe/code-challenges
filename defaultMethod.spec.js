const { add, defaultMethod } = require('./defaultMethod');

describe('When calling defaultMethod once', () => {
  var add_ = defaultMethod(add, { b: 9 });

  it('should return 19', () => {
    expect(add_(10)).toBe(19);
  });

  it('should return 17', () => {
    expect(add_(10, 7)).toBe(17);
  });

  it('should return nan', () => {
    expect(add_()).toBe(NaN);
  });
});

describe('When calling defaultMethod twice', () => {
  var add_ = defaultMethod(add, { b: 9 }); // set b default value as 9
  add_ = defaultMethod(add_, { b: 3, a: 2 }); // now, set b default value as 3 and a as 2

  it.only('should return 13', () => {
    expect(add_(10)).toBe(13); //10 (received) + 3 (default)
  });

  it('should return 5', () => {
    expect(add_()).toBe(5);
  });

  it('should return nan', () => {
    add_ = defaultMethod(add_, { c: 3 }); // this doesn't do anything because c isn't required
    expect(add_(10)).toBe(NaN);
  });
});

describe('When calling defaultMethod three times, with a unused param', () => {
  var add_ = defaultMethod(add, { b: 9 }); // set b default value as 9
  add_ = defaultMethod(add_, { b: 3, a: 2 }); // now, set b default value as 3 and a as 2
  add_ = defaultMethod(add_, { c: 2 }); // now, set b default value as 3 and a as 2

  it('should return NaN', () => {
    expect(add_(10)).toBe(NaN); //10 (received) + undefined  (b default)
  });

  it('should return NaN', () => {
    expect(add_()).toBe(NaN);
  });

  it('should return nan', () => {
    expect(add_(10)).toBe(NaN);
  });

  it('should return 20', () => {
    expect(add_(10, 10)).toBe(20);
  });
});
