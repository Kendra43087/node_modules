var express = require("express");

var app = express();
var PORT = 8080;


app.get("/", function(req, res) {
    res.send("hey!");
  });



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });