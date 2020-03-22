const routes = require("express").Router();
const doe = require("../controller/doe.controller");

routes.get("/john", doe.doeReturn);
routes.post("/insertExample", doe.insertSomethingReturn)

module.exports = routes;