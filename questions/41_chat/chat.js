//	Chat is almost complete - solve the last spec

class Chat {
  constructor() {
    this.listeners = {};
  }
  talk(msg) {
    return Object.keys(this.listeners).forEach((listenerName) => {
      if (listenerName !== this.name) {
        this.listeners[listenerName](`${this.name} says ${msg}`);
      }
    });
  }
  join(str, fn) {
    Object.values(this.listeners).forEach((listener) =>
      listener(`${str} has joined chat!`)
    );
    this.listeners[str] = fn;
    return { talk: this.talk, listeners: this.listeners, name: str };
  }
}

module.exports = { Chat };
