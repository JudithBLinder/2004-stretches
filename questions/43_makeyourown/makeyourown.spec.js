const { makeyourown } = require('./makeyourown');

describe('makeyourown functionality', () => {
  beforeAll(() => {
    const name2 = 'brAD PITT';
    const name3 = 'judITh bLInDER';
  });
  it('your first test spec: Correct name with lowercase and uppercase. It accepts only string', () => {
    const number = 10;
    expect(() => makeyourown(number)).toThrow('Invalid Input!');
  });
  it('doesnt use toLowerCase', () => {
    const name1 = 'roBErT';
    spyOn(String.prototype, 'toLowerCase');
    makeyourown(name1);
    expect(String.prototype.toLowerCase).toHaveBeenCalled(0);
  });
});
