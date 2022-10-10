const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     res.write("Hello Veysel");
  //     res.end();
  //   } else {
  //     res.write("GoodBye Veysel");
  //     res.end();
  //   }
  // });
  /*
const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/plain");
  // res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200; // zaten herahngi bir hata olmassa varsayilan olarak esitlencek
  res.statusMessage = "Ok";
  //res.send("Hello Worldssss")
  //res.write(JSON.stringify({ name: "Samsung S8", price: 300 }));
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From NodeJs Ser</h1></body>");
  res.write("</html>");
  res.end();
  */

  fs.readFile("index2.html", (err, file) => {
    if (err) {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 404; // zaten herahngi bir hata olmassa varsayilan olarak esitlencek
      res.statusMessage = "Not Found";
      res.write("File could not find");
      res.end();
    } else {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200; // zaten herahngi bir hata olmassa varsayilan olarak esitlencek
      res.statusMessage = "Ok";
      //  res.write("File could not find");
      res.write(file);
      res.end();
      // res.end(file);
    }
  });
});

server.listen(3000);

console.log("Listening port on 3000....");
