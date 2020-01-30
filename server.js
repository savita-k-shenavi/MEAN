var http = require("http");
var app = require("./backend/app");

const server = http.createServer(app)

const port = process.env.port || 3000;

server.listen(port);
