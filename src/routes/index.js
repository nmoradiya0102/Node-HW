const express = require("express");
const blogRoute = require("./blog.route");

const route = express.Router();

route.use("/blog" , blogRoute);

module.exports = route;