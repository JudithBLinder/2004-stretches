// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  let letterArray = str.split('');
  let shiftedArray = [];

  let numShift = shift;
  if (Math.abs(shift) > 10) numShift = shift % 10;
  let strShift = shift;
  if (Math.abs(shift) > 26) strShift = shift % 26;

  for (let i = 0; i < letterArray.length; i++) {
    let code = str.charCodeAt(i);
    // if char is a number
    if (code > 47 && code < 58) {
      if (code + numShift > 57) {
        code = code - 10;
      } else if (code + numShift < 48) {
        console.log(code, numShift);
        code = code + 10;
      }
      shiftedArray.push(String.fromCharCode(code + numShift));
      // if char is a lowerCase
    } else if (code > 96 && code < 123) {
      if (code + strShift > 122) {
        code = code - 26;
      } else if (code + strShift < 97) {
        code = code + 26;
      }
      shiftedArray.push(String.fromCharCode(code + strShift));
      // if char is upperCase
    } else if (code > 64 && code < 91) {
      if (code + strShift > 90) {
        code = code - 26;
      }
      shiftedArray.push(String.fromCharCode(code + strShift));
    } else {
      throw '';
    }
  }

  return shiftedArray.join('');
};

module.exports = { encryptString };
