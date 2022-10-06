const path = require("path");

console.log("path=>", path);
console.log("path 2=>", path.resolve("app.js")); ///Users/veyselbasbaydar/Desktop/nodeJS/app.js

console.log("extension", path.extname("index.html")); //.html    it says extension of name
console.log("parse", path.parse(__filename));
/* 
{
  root: '/',
  dir: '/Users/veyselbasbaydar/Desktop/nodeJS',
  base: 'app3.js',
  ext: '.js',
  name: 'app3'
}
*/
console.log("start from here");
console.log(path.parse(__filename).root); //   /
console.log(path.parse(__filename).dir); //    /Users/veyselbasbaydar/Desktop/nodeJS
console.log(path.parse(__filename).base); //   app3.js
console.log(path.parse(__filename).ext); //    .js
console.log(path.parse(__filename).name); //   app3
