/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (strIn) => {
  if (typeof strIn === 'number') {
    strIn = '' + strIn;
  }
  strIn = strIn.toLowerCase();

  let nonAlpha = [',', '.', '!', '?', ' '];
  nonAlpha.forEach((el) => {
    if (strIn.includes(el)) {
      strIn = strIn.split(el).join('');
    }
  });

  let strArr = strIn.split('');
  let temp = [];

  for (let i = 0; i < strArr.length; i++) {
    temp[i] = strArr[strArr.length - i - 1];
  }
  let strRev = temp.join('');
  if (strRev === strIn) {
    return true;
  } else {
    return false;
  }
};

module.exports = { validPalindrome };
