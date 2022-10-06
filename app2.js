// var lastName = "Basbaydar";

// console.log(firstName);
// console.log(lastName);

const scriptA = require("./app.js");

scriptA.log("Nber");

console.log("scriptA=>", scriptA);

console.log(scriptA.name);

console.log("__filename=>", __filename); ///Users/veyselbasbaydar/Desktop/nodeJS/app2.js
console.log("__dirname=>", __dirname); ///Users/veyselbasbaydar/Desktop/nodeJS

/* 
CUSTOM MODULE             NODE MODULE              3 RD PARTY MODULE
                        file System Module               npm
                        Path Module
                        Events Module
                        Os Module
                        Http Module

 */
