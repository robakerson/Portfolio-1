
const express = require('express');
const app = express();
const port = 3000;

//start server woth hyperterminal: "node server.js" or "nodemon server.js"

// /represents root of site. callback function defines what happens when get request happens
app.get("/", function(req, res){
  res.send("<h1 style='color:blue;'>Hello World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: robakerson@gmail.com");
});

app.get('/about', function(req, res){
  res.send("My name is Bob Akerson. I am an aspiring web developer.");
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
