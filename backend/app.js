const express = require("Express");
const bodyParser = require("body-parser");
const mongo = require("./mongoDb");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin ,Accept,Content-Type,X-Requested-With"
  );
  next();
});

app.post("/app/post", (req, res) => {
  var result = req.body;
  console.log(result);
  //insert data into mongodb
  mongo.addData("postList", result, function(data) {
    console.log(data);
    res.status(201).json({
      message: "post added successfully"
    });
  });
});

app.get("/app/post", (req, res) => {
  var post;
  //call mongodb to fetch data
  mongo.getList("postList", function(data) {
    post = data;
    console.log("inside post : ", post);
    res.status(200).json({
      message: "posts fetched successfully",
      posts: post
    });
  });
  //  console.log("outside post : ", post);
});

app.update("/app/post/:title", (req, res) => {
  var option = {
    title: req.params.title
  };
  var input = req.body;

  mongo.updateData("postList", option, input, function(data) {
    res.send(data);
  });
});

app.delete("/app/post/:title", (rew, res) => {
  var whereClause = { title: req.params.title };

  mongo.deleteData("postList", whereClause, function(data) {
    res.send(data);
  });
});

module.exports = app;
