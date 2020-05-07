// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  const newObj = {};
  for (let key in obj){
    if (obj[key] == undefined || null){
      continue
    } else {
      newObj[key] = obj[key];
    };
  };
  return newObj;
};

module.exports = { trim };