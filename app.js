// browser

// var firstName = "Veysel";

// IIFE

// var controllerA = (function () {
//   var firstName = "Sadik";
// })();

//console.log(window);

// nodejs

//console.log(module.export);
// console.log(global.clearInterval);
// console.log(global);

// private members
var age = 30;

//public members
var firstName = "Hatun";
var log = function (name) {
  console.log(name);
};

// console.log(module);
// module.exports.logi = log;
// module.exports.name = firstName;

// module.exports = {
//   name: firstName,
//   logi: log,
// };
module.exports = {
  firstName,
  log,
};
console.log(module);
