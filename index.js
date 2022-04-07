var express = require("express");
var app = express();

// serve static files from public directory
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.listen(3000, function () {
  console.log("Running on port: 3000");
});
