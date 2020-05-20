const delay = (str, time) => {
  
  let x = setTimeout(() => {
    console.log(str);
  }, time);

  return str;
};

module.exports = { delay };
