const moveZeroes = (arr) => {
  let counter = 0;

  for (let i = 0; i < arr.length - counter; i++) {
    console.log(arr, i, counter);
    if (arr[i] === 0) {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr[arr.length - 1 - counter] = 0;
      counter++;
      if (arr[i] === 0 && i < arr.length - 1 - counter) {
        i--;
      }
    }
  }

  return arr;
};

module.exports = { moveZeroes };
