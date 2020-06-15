//YOUR CODE HERE

class Box {
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }

  pack(color, capacity) {
    if (this.capacity === this.contents.length) {
      throw new Error('Box Capacity is Full');
    }
    this.contents.push(new Box(color, capacity));
  }

  unpack() {
    let result = [];
    const findColor = (box) => {
      for (let i = 0; i < box.contents.length; i++) {
        result.push(box.color);
        findColor(box.contents[i]);
      }
    };
    findColor(this);
    console.log(result);
    return result;
  }
}
module.exports = { Box };
