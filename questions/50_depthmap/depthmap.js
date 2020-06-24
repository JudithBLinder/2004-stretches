//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (objIn) => {
  //write code here
  if (typeof objIn !== 'object') {
    throw new Error('Invalid input!');
  }

  const insertDepth = (obj, depth) => {
    obj.depth = depth;

    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        insertDepth(obj[key], depth + 1);
      }
    }
  };

  insertDepth(objIn, 0);
  return objIn;
};

module.exports = { recordDepth };
