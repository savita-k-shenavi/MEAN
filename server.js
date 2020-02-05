var http = require("http");
var app = require("./backend/app");
var mongo = require("./backend/mongoDb");
const server = http.createServer(app)

const port = process.env.port || 3000;

console.log("server is running on port : ",port);

server.listen(port);
mongo.connect();
