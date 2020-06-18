//Add two methods to this box class.

class Box {
  //Solution code for Boxes part 1-3
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }
  pack(col, cap) {
    if (this.contents.length !== this.capacity) {
      this.contents.push(new Box(col, cap));
    } else {
      throw new Error('Capacity Met!');
    }
  }
  unpack() {
    const result = [];
    if (!this.contents.length) {
      result.push(this.color);
    } else {
      result.push(this.color);
      for (let i = 0; i < this.contents.length; i++) {
        result.push(...this.contents[i].unpack());
      }
    }
    return result;
  }
  movingVan(dur) {
    return setTimeout(() => this.unpack(), dur);
  }
  //*****YOUR CODE STARTS HERE******
  expand(num, boxes) {
    for (let i = 0; i < boxes.length; i++) {
      this.contents.push(new Box(boxes[i][0], boxes[i][1]));
    }
  }
  loot(idx) {
    if (idx < this.contents.length) {
      let box = this.contents[idx];
      console.log(box);
      return box;
    } else {
      return this.contents[0];
    }
  }
}

module.exports = { Box };
