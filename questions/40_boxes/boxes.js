//YOUR CODE HERE

class Box {
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }

  pack(color, capacity) {
    this.contents.push(new Box(color, capacity));
  }
}
module.exports = { Box };
