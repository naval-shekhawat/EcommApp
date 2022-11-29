const serverConfig = require("./config/server.config");
const expressApp = require("./app");

expressApp.listen(serverConfig.PORT, () => {
  console.log("server listening at port " + serverConfig.PORT);
});
