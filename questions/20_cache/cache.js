// see test specs

function cache(funcIn) {
  if (typeof funcIn != "function") {
    throw new Error("Input must be a function.");
  }

  let prevInput = [];
  let result = 0;

  let funcOut = (...input) => {
    if (input.join('') === prevInput.join('')) {
      return result;
    } else {
      prevInput = input;
      result = funcIn(...input);
      return result;
    }
  };

  return funcOut;
}

module.exports = { cache };