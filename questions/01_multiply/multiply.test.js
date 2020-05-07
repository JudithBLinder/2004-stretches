const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('1', 2)).toThrow();

    expect(() => multiply(1, '2')).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(typeof(multiply(1,2))).toBe('number');

    // test that the returned value is correct
    expect(multiply(1, 2)).toBe(2);

    // test some other values
    expect(multiply(10, 2)).toBe(20);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    let num1 = Math.floor(Math.random() * 100);
    console.log(num1);
    let num2 = Math.floor(Math.random() * 100);
    console.log(num2);
    expect(multiply(num1, num2)).toBe(num1*num2);
  });
});
