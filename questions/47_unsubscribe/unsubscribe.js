// Fix the Messenger class to check input and to allow listeners to unsubscribe

class Messenger {
  constructor(channel) {
    if (typeof channel !== 'object' && !channel.hasOwnProperty('name')) {
      throw 'Invalid Input';
    }
    this.channel = channel.name;
    this.listeners = {};
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }
  getChannel(type) {
    this.listeners[type] = this.listeners[type] || [];
    return this.listeners[type];
  }
  subscribe(type, fn) {
    this.getChannel(type).push(fn);
    return () => this.unsubscribe(type);
  }
  unsubscribe(type) {
    delete this.listeners[type];
  }
  publish(type, msg) {
    this.getChannel(type).forEach((listener) =>
      listener(`${this.channel} - ${type} - ${msg}`)
    );
  }
}

module.exports = { Messenger };
