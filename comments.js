// Create web server?
var http = require("http");

function handler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
}

http.createServer(handler).listen(8080);





