const fs = require("fs");

// const files = fs.readdir("./", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
/* 

[
  '.git',    'app.js',
  'app2.js', 'app3.js',
  'app4.js', 'app5.js',
  'public'
]
*/

const data = fs.readFile("index.html", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
