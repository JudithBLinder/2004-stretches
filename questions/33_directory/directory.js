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

  const findPath = function (input, add) {
    if (typeof input != 'object' || Array.isArray(input)) {
      objOut[add.slice(1)] = input;
    } else {
      for (let key in input) {
        findPath(input[key], add + '/' + key);
      }
    }
  };

  findPath(objIn, '');
  return objOut;
};

module.exports = { directory };
