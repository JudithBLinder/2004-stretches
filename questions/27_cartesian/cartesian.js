/* eslint-disable complexity */
const cartesian = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid Input!');
  }

  let directions = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'n':
        directions.n += 1;
        break;
      case 's':
        directions.s += 1;
        break;
      case 'e':
        directions.e += 1;
        break;
      case 'w':
        directions.w += 1;
        break;
      default:
        return new Error('Invalid Input');
    }
  }

  if (directions.n === directions.s && directions.e === directions.w) {
    return "These directions don't go anywhere!";
  } else {
    let minNS = Math.min(directions.n, directions.s);
    directions.n -= minNS;
    directions.s -= minNS;
    let minEW = Math.min(directions.e, directions.w);
    directions.e -= minEW;
    directions.w -= minEW;

    return directions;
  }
};

module.exports = { cartesian };
