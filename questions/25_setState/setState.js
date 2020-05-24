// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.historyState = [initialState];
  }
  setState(updateState = {}) {
    let newState = {};
    // eslint-disable-next-line guard-for-in
    for (let key in this.state) {
      newState[key] = this.state[key];
      if (updateState.hasOwnProperty(key)) {
        newState[key] = updateState[key];
      }
    }
    this.historyState.push(this.state);
    this.state = newState;
    return this.state;
  }
  goBack() {
    this.state = this.historyState.pop();
    return this.state;
  }
}

module.exports = { StatefulThing };
