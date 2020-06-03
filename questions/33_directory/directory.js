//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (objIn) => {
  let objOut = {};

  const findPath = function (input) {
    let keys = Object.keys(input);
    if (keys === []) {
      return input;
    } else {
      return findPath();
    }
  };

  for (let key in objIn) {
  }

  return objOut;
};

module.exports = { directory };
