const { appRoute } = require("./routes");
const { Router } = require("express");

router = require("./routes");

module.exports = (app, router) => {
  appRoute(router);
};
