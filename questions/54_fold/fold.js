const fold = (arr, i) => {
  if (!Array.isArray(arr) || typeof i !== 'number') {
    throw '';
  }

  let outArr = arr;
  let lastI = 0;

  const foldArr = (arrIn) => {
    console.log(arrIn);
    let newArr = [];
    for (let j = 0; j < arr.length / 2; j++) {
      newArr.push(arr[j] + arr[arr.length - j - 1]);
      lastI = j;
    }
    if (arr.length % 2 !== 0) {
      newArr[newArr.length - 1] = arr[lastI];
    }
    console.log(newArr);
    return newArr;
  };

  for (let m = 0; m < i; m++) {
    outArr = foldArr(outArr);
    // console.log(outArr);
  }

  return outArr;
};

module.exports = fold;
