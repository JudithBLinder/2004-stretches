// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  constructor(arrIn) {
    if (!Array.isArray(arrIn)) throw '';
    this.arr = arrIn;
    this.loggedIdx = 0;
  }

  next() {
    this.loggedIdx++;
    if (this.loggedIdx === this.arr.length + 1) {
      return { done: true, value: undefined };
    } else {
      return { done: false, value: this.arr[this.loggedIdx - 1] };
    }
  }
}

module.exports = { Iterator };
