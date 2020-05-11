//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (num) => {
  let romanStr = '';

  if (num < 1 || num > 3999) {
    throw '';
  };

  const thousands = Math.floor(num / 1000);
  num = Math.abs(thousands*1000 - num);
  const hundreds  = Math.floor(num / 100);
  num = Math.abs(hundreds*100 - num);
  const tens      = Math.floor(num / 10);
  num = Math.abs(thousands*10 - num);
  const ones      = num % 10;

  if (thousands != 0) {
    romanStr += 'M'.repeat(thousands);
  }
  if (hundreds != 0) {
    if (hundreds < 4 && hundreds > 0){
      romanStr += 'C'.repeat(hundreds);
    } else if (hundreds == 4) {
      romanStr += 'CD';
    } else if (hundreds == 5){
      romanStr += 'D';
    } else if (hundreds == 9){
      romanStr += 'CM';
    } else {
      romanStr += 'D' + 'C'.repeat(hundreds - 5);
    };
  }
  
  if (tens != 0) {
    if (tens < 4 && tens > 0){
      romanStr += 'X'.repeat(tens);
    } else if (tens == 4) {
      romanStr += 'XL';
    } else if (tens == 5){
      romanStr += 'L';
    } else if (tens == 9){
      romanStr += 'XC';
    } else {
      romanStr += 'L' + 'X'.repeat(tens - 5);
    };
  }
  
  if (ones != 0) {
    if (ones < 4  && ones > 0){
      romanStr += 'I'.repeat(ones);
    } else if (ones == 4) {
      romanStr += 'IV';
    } else if (ones == 5){
      romanStr += 'V';
    } else if (ones == 9){
      romanStr += 'IX';
    } else {
      romanStr += 'V' + 'I'.repeat(ones - 5);
    };
  }
  
  return romanStr;
};

module.exports = { romanInteger };
