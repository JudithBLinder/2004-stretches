//YOUR CODE HERE

class Box {
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }

  pack(color, capacity) {
    if (capacity === this.contents.length) {
      throw new Error('Box Capacity Full');
    }
    this.contents.push(new Box(color, capacity));
  }

  unpack() {
    let result = [];
    this.contents.forEach((box) => result.push(box.color));
    return result;
  }
}
module.exports = { Box };
