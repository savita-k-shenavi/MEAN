const express = require("Express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res, next) => {
res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader("Access-Control-Allow-Headers","Origin ,Accept,Content-Type,X-Requested-With")
  next();
})

app.post("/app/post",(req,res,next) => {
var result = req.body;
console.log(result);
res.status(201).json({
  message : "post added successfully"
})
})

app.get("/app/post", (req, res,next) => {
  const post = [
    {
      title: "learning",
      content: "test"
    },
    {
      title: "knowledge",
      content: "content"
    }
  ];
  res.status(200).json({
    message: "posts fetched successfully",
    posts: post
  });
});

module.exports = app;
