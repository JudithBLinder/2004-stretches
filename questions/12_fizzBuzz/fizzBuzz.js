const fizzBuzz = (num) => {
  let returnedArray = [];
  // console.log(Number.isInteger(num) , num);
  if (!Number.isInteger(num) || num < 0) {
    throw '';
  }

  for (let i=0; i<num; i++) {
    if ((i + 1) % 3 ==0) {
      returnedArray.push('Fizz');
    } else if ((i + 1) % 5 ==0) {
      returnedArray.push('Buzz');
    } else {
      returnedArray.push(i+1);
    };
  }
  console.log(returnedArray);
  return returnedArray
};
module.exports = { fizzBuzz };
