const findBy = (objIn, key, value) => {
  return objIn.find((item) => item[key] === value);
};

module.exports = { findBy };
