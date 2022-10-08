// const EventEmitter = require("events"); // burdan gelen bir class

// const emitter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();

// listener kayit et

logger.on("connection", function (args) {
  console.log("connection setup", args);
});

logger.log("SadikTuran Logined");

// emitter.on("logout", function () {
//   console.log("login succesfull");
// });

// event'i tetikle

// emitter.emit("logout");

/* 
 class MyClass {}

module.exports = MyClass;
 */
