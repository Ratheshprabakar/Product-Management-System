const express = require("express"); // import
const bodyParser = require("body-parser");

const router = require("./routes/route");

const app = express(); // initaialize the express server object

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//two parameters endpoint, function
app.get("/test", (request, response) => {
  response.send("Hello Rathesh Testing");
});

app.use(router);

//two parameters port, function
app.listen(3005, function serverStart() {
  console.log("Server started successfully at 3005");
});
