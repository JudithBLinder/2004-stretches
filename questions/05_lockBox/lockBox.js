const lockBox = (initCode, initMsg) => {
  if (typeof initCode != 'number' || typeof initMsg != 'string') {
    throw new Error('Invalid Input!');
  }

  let currentCode = initCode;
  let currentMsg = initMsg;

  return {
    modCode: function (code, newCode) {
      if (code === currentCode) {
        currentCode = newCode;
      }
      return currentCode;
    },
    modMessage: function (code, newMsg) {
      if (code === currentCode) {
        currentMsg = newMsg;
      }
      return currentMsg;
    },
    revealMessage: function (code) {
      if (code === currentCode) {
        return currentMsg;
      } else {
        throw new Error('Invalid Code!');
      }
    },
  };
};

module.exports = { lockBox };
