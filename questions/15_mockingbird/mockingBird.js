// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  let arrayOut = [];
  for (let i=0; i<n; i++) {
    arrayOut.push(func());
  }

  return arrayOut;
};

// see test specs to complete this stretch

module.exports = { repeater };
