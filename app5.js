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

const data = fs.readFile("./public/index.html", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

/* 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <!--     <script src="../app.js"></script> -->
    <script src="../app2.js"></script>
    <script src="../app3.js"></script>
  </body>
</html>
*/

const data2 = fs.readFile("./test.txt", "utf8", (err, data) => {
  err ? console.log(err) : console.log(data);
});

//  appendFile kullanirsan eskisini birakir icine yeni bitane daha ekler , yani eskisinin uzerine ekler
fs.writeFile("deneme.txt", "Whats up Guven what d u doing...", (err, data) => {
  err ? console.log(err) : console.log("file created");
});

// file deleted

fs.unlink("deneme.txt", () => {
  console.log("file deleted");
});

// rename

fs.rename("test.txt", "testUpdate", () => {
  console.log("file name changed");
});
