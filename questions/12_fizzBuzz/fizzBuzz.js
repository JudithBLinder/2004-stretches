const fizzBuzz = (num) => {
  let returnedArray = [];
  // console.log(Number.isInteger(num) , num);
  if (!Number.isInteger(num) || num < 0) {
    throw '';
  }

  for (let i = 0; i < num; i++) {
    returnedArray[i] = i + 1;
    if ((i + 1) % 3 === 0) {
      returnedArray[i] = 'Fizz';
    }
    if ((i + 1) % 5 === 0) {
      returnedArray[i] = 'Buzz';
    }
    if ((i + 1) % 15 === 0) {
      returnedArray[i] = 'FizzBuzz';
    }
  }
  console.log(returnedArray);
  return returnedArray;
};
module.exports = { fizzBuzz };
