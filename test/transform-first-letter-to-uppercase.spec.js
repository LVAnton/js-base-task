const transformFirstLetterToUppercase = require('../src/transform-first-letter-to-uppercase');

describe('transformEveryWordsFirstLetterToUpperCase function', () => {
  it('should return "Passed argument is not a string" when type of passed argumnent is not a "string"', () => {
    expect(transformFirstLetterToUppercase(null)).to.equal(
      'Passed argument is not a string',
    );
  });

  it('should return "Hello" when argument of function "hello"', () => {
    expect(transformFirstLetterToUppercase('hello')).to.equal('Hello');
  });

  it('should return "Cucumber Cucumber Cucumber" when argument of function "cucumber cucumber cucumber"', () => {
    expect(
      transformFirstLetterToUppercase('cucumber cucumber cucumber'),
    ).to.equal('Cucumber Cucumber Cucumber');
  });

  it('should return "Call Me At 7pm" when argument of function "call me at 7pm"', () => {
    expect(transformFirstLetterToUppercase('call me at 7pm')).to.equal(
      'Call Me At 7pm',
    );
  });

  it('should return "10 Is Less Then 11" when argument of function "10 is less then 11"', () => {
    expect(transformFirstLetterToUppercase('10 is less then 11')).to.equal(
      '10 Is Less Then 11',
    );
  });

  it('should return "The First Task" when argument of function "the first task"', () => {
    expect(transformFirstLetterToUppercase('the first task')).to.equal(
      'The First Task',
    );
  });

  it('should return "This Task Is The First" when argument of function "this task is the first"', () => {
    expect(transformFirstLetterToUppercase('this task is the first')).to.equal(
      'This Task Is The First',
    );
  });

  it('should return "Sam, Where Is My Impala? Did You Saw It?" when argument of function "Sam, where is my impala? did you saw it?"', () => {
    expect(
      transformFirstLetterToUppercase('Sam, where is my impala? did you saw it?'),
    ).to.equal('Sam, Where Is My Impala? Did You Saw It?');
  });
});
