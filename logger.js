const EventEmitter = require("events"); // burdan gelen bir class

// const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    // event'i tetikle
    // emitter.emit("connection", { id: 1, message: "hello" });
    this.emit("connection", { id: 1, message: "hello" });
  }
}

module.exports = Logger;
