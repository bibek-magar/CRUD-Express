const express = require("express");

const bodyParser = require("body-parser");

const router = require("./routes");

let app = express();

app.use(bodyParser.json());

app.use("/", router);

app.listen(3000, () => {
  console.log("Express server is running at port 3000");
});
