// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  let arr1 = str1.split('').sort().join('');
  let arr2 = str2.split('').sort().join('');

  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
};

module.exports = { checkAnagrams };
