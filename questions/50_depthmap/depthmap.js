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
    let keys = Object.keys(obj);
  
    for (let i=0; i<keys.length; i++)
    }
  };

  insertDepth(objIn, 0);
};

module.exports = { recordDepth };
