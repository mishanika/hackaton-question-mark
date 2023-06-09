const express = require("express");
const cors = require("cors");
//const routes = require("./routes/index");
const fs = require("fs");
const app = express();
const jsonParser = express.json();
const port = 3030;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/assets", express.static("assets"));
//app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
