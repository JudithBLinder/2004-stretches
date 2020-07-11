// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

const twoNumberSum = (arrIn, target) => {
  const findNum = (num1, arrIn, target) => {
    if (num1 === arrIn[arrIn.length - 1]) {
      return null;
    } else {
      return arrIn.filter((num2) => num1 + num2 === target);
    }
  };

  for (let i = 0; i < arrIn.length; i++) {
    let first = arrIn[i];
    const res = findNum(first, arrIn, target);
    console.log(res);
    if (res === null) {
      return null;
    } else if (res === []) {
      continue;
    } else {
      return [first, res[0]];
    }
  }
};

module.exports = { twoNumberSum };
