const routes = require("express").Router();
const callendarController = require("../controller/calendar.controller");

routes.post("/showEvents", callendarController.showCalendarEvents);

module.exports = routes;