/** @format */

const keys = require("./config/keys");
//server
const express = require("express");
const app = express();
//Common security practice
var helmet = require("helmet");
app.use(helmet());

//body-parser to read POST request
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//AWS config
const config = require("config");
const S3Config = config.get("AWS.S3");
//cloud storage
const AWS = require("aws-sdk");
const accessKeyId = S3Config.accessKeyId;
const secretAccessKey = S3Config.secretAccessKey;
const region = S3Config.region;
AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

//dtbs
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var mongodb = `mongodb+srv://${keys.MONGODB_USER}:${keys.MONGODB_PASSWORD}@cluster0-fuo34.mongodb.net/${keys.MONGODB_DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(mongodb || process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//models
require("./models/FranchiseMinified");
require("./models/Franchise");
require("./models/Subscriber");
//routes
require("./routes/getImageRoute")(app);
require("./routes/getTopFranchises")(app);
require("./routes/getFranchiseByName")(app);
require("./routes/getCategoryRoute")(app);
require("./routes/formRoutes")(app);

//routing in production
//Express will serve up specific file such as main.js or main.css
app.use(express.static("client/build"));

//express will serve index.html if it doesnt regconize route
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//start the server
const host = "0.0.0.0";
const port = process.env.PORT || 5000;
app.listen(port, host, function () {
  console.log("Server started.......");
});
