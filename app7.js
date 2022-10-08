const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log("req.url=>", req.url, "req.method=>", req.method);
  //                       req.url=> /    req.method=> GET
  if (req.url === "/") {
    res.write("Hello World resppppponse");
    res.end();
  } else if (req.url === "/api/products") {
    res.write("Veysel Basbaydar MacBook");
    res.end();
  }
});

// server.on("connection", function () {
//   console.log("New connection....");
// });

server.listen(3000);

console.log("Listening port on  3000.....");
