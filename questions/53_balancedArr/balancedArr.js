const balanced = (arrIn) => {
  let sum1 = 0;
  let sum2 = arrIn.reduce((acc, curr) => acc + curr, 0) - arrIn[0];

  for (let i = 0; i < arrIn.length; i++) {
    console.log(sum1, sum2, i);
    if (sum1 === sum2) {
      return i;
    }
    sum1 += arrIn[i];
    sum2 -= arrIn[i + 1];
  }
  return -1;
};

module.exports = balanced;
