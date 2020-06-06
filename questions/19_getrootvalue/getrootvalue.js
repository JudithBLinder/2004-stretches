//Given an object of likely nested objects, where the final element is an array containing positive integers
//write a function that returns the name of the root property that a particular integer lives in.
//ie:
// object = {
//   "one": {
//       "l1": {
//           "val1": [40, 65, 113, 200]
//        }
//   },
//   "two": {
//       "l1": [45, 1, 75, 80],
//       "l2": [12, 38, 2, 15]
//   },
//   "three": {
//       "l1": [10, 92, 53, 71],
//       "l2": [82, 34, 6, 19]
//   }
// }
//getrootvalue(object,40)=>'one'
//returns -1 if value isn't found

const getrootvalue = (obj, val) => {
  let result = '';

  const findValue = (objIn, rootIn, valIn) => {
    if (Array.isArray(objIn)) {
      if (objIn.includes(valIn)) {
        result = rootIn;
      }
    }

    // eslint-disable-next-line guard-for-in
    for (let key in objIn) {
      findValue(objIn[key], rootIn + key + '/', valIn);
    }
  };

  findValue(obj, '', val);
  if (result) {
    return result.split('/')[0];
  } else {
    return null;
  }
};

module.exports = { getrootvalue };
