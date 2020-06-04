//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arrayIn) => {
  if (arrayIn.length === 0 || arrayIn === undefined) {
    throw '';
  }
  let maxStrLength = 0;
  arrayIn.forEach((el) => {
    if (el.length > maxStrLength) {
      maxStrLength = el.length;
    }
  });

  maxStrLength = maxStrLength + 4;
  let strOut = ['*'.repeat(maxStrLength) + '\n'];

  arrayIn.forEach((el) => {
    let tempStr = `* ${el} ` + ' '.repeat(maxStrLength - el.length - 4) + '*\n';
    strOut.push(tempStr);
  });
  strOut.push('*'.repeat(maxStrLength) + '\n');
  return strOut.join('');
};

module.exports = { movieposter };
