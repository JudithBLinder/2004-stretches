// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

const diffTwo = (arrIn) => {
  if (!Array.isArray(arrIn)) {
    throw new Error('Invalid input!');
  }

  let arrOut = [];
  let arrTemp = [];
  arrIn.sort((a, b) => a - b);

  for (let i = 0; i < arrIn.length; i++) {
    arrTemp.push(arrIn[i]);
    let nextInt = arrIn.find((el) => el - arrIn[i] === 2);
    if (nextInt) {
      arrTemp.push(nextInt);
      arrOut.push(arrTemp);
    }
    arrTemp = [];
  }

  return arrOut;
};

module.exports = { diffTwo };
