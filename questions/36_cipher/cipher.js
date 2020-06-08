const encrypt = (strIn) => {
  let strArray = strIn.split(' ');
  let newStrArray = [];
  strArray.forEach((word) => {
    newStrArray.push(
      word.charCodeAt(0) +
        word.charAt(word.length - 1) +
        word.slice(2, word.length - 1) +
        word.charAt(1)
    );
  });
  return newStrArray.join(' ');
};

module.exports = { encrypt };
