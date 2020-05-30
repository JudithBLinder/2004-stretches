// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  if (typeof recipe !== 'object' || typeof supplies !== 'object') {
    throw new Error('Invalid Input!');
  }

  let numOfCake = 0;
  let ingArray = [];

  for (let ing in recipe) {
    if (supplies[ing] > recipe[ing]) {
      ingArray.push(Math.floor(supplies[ing] / recipe[ing]));
    } else {
      ingArray.push(0);
    }
  }

  numOfCake = Math.min(...ingArray);
  console.log(numOfCake);
  return numOfCake;
};

module.exports = { btownbake };
