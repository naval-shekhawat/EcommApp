const express = require("express");
let bodyParser = require("body-parser");
const serverConfig = require("./config/server.config");
const router = require("./routes/index");
const ErrorHandler = require("./middlewares/ErrorHandler");

const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);

expressApp.listen(serverConfig.PORT, () => {
  console.log("server listening at port " + serverConfig.PORT);
});
