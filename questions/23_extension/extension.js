//write a function that takes a function, and makes it callable with two invocations

const extensions = (funcIn) => {
  let funcToInvoke = funcIn;

  if (typeof funcToInvoke !== 'function') {
    throw new Error('Invalid Input');
  }

  return function firstInvocation(num1) {
    console.log(num1);
    if (typeof num1 !== 'number') {
      throw new Error('Invalid Input');
    }
    // funcToInvoke(num1);
    return function secondInvokation(num2) {
      console.log(num2);
      if (typeof num2 !== 'number') {
        throw new Error('Invalid Input');
      }
      return funcToInvoke(num1, num2);
    };
  };
};

module.exports = { extensions };
