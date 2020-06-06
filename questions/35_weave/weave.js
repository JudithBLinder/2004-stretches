// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = (...arrays) => {
  let maxSize = 0;
  let arrOut = [];

  arrays.forEach((arr) => {
    if (arr.length > maxSize) {
      maxSize = arr.length;
    }
    if (!Array.isArray(arr)) {
      throw new Error('Invalid Input!');
    }
  });

  for (let i = 0; i < maxSize; i++) {
    for (let j = 0; j < arrays.length; j++) {
      if (!arrays[j][i]) {
        arrOut.push(null);
      } else {
        arrOut.push(arrays[j][i]);
      }
    }
  }

  return arrOut;
};

module.exports = { weave };
