/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arrIn, keySort, keyOut) {
  let arrOut = [];
  if (typeof arrIn[0][keySort] === 'number') {
    arrIn
      .sort((a, b) => a[keySort] - b[keySort])
      .forEach((el) => arrOut.push(el[keyOut]));
  } else {
    arrIn
      .sort((a, b) => {
        let keyA = a[keySort].toUpperCase();
        let keyB = b[keySort].toUpperCase();
        if (keyA > keyB) {
          return 1;
        } else if (keyA < keyB) {
          return -1;
        } else {
          return 0;
        }
      })
      .forEach((el) => arrOut.push(el[keyOut]));
  }
  return arrOut;
}

module.exports = { sortOrder };
