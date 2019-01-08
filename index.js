const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
require("./models/User");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/components/form.html");
});
//module.exports = app => {
app.post("/form/submit", (req, res) => {
  var data = new User(req.body);
  data.save().then(item => {
    res.send("saved");
  })
  .catch(err => {
    res.status(400).send("failed to save");
  });
});
//};
