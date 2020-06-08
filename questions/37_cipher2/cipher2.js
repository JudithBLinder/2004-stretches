const decypher = (strIn) => {
  let wordArray = strIn.split('');
  let newArray = [];
  let charCode = '';

  for (let i = 0; i < wordArray.length; i++) {
    console.log(parseInt(0, 10).toString());
    if (parseInt(wordArray[i], 10)) {
      charCode += wordArray[i].toString();
    }
  }
  console.log(charCode);
};
module.exports = { decypher };
