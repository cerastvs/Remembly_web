const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/hello", (request, response) => {
  response.end("hello world");
  console.log(request.url);
});

app.get("/json", (request, response) => {
  response.json({
    name: "lieu rik",
    age: 19,
    "birth date": "12/02/04",
  });
  console.log(request.url);
});

app.listen(3000, console.log("App Listening to port 3000"));
