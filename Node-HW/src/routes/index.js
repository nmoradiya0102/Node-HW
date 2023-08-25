const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const bookRoute = require("./book.route");
const busRoute = require("./bus.route");
const hotelRoute = require("./hotel.route");
const schoolRoute = require("./school.route");
const router = express.Router();

router.use("/user", userRoute);
router.use("/category" , categoryRoute);
router.use("/book" , bookRoute);
router.use("/bus", busRoute);
router.use("/hotel" , hotelRoute);
router.use("/school" , schoolRoute);

module.exports = router;