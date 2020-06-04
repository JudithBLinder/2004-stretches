/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE

class digitalRoot {
  root(num) {
    if (num < 10) {
      return num;
    } else {
      let tempArr = ('' + num).split('').map(Number);
      let sum = tempArr.reduce((total, current) => total + current, 0);
      console.log(num, tempArr, sum);
      return this.root(sum);
    }
  }
}

module.exports = { digitalRoot };
