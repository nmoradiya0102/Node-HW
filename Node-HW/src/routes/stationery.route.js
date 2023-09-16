const express = require("express");
const { stationeryValidation } = require("../validations");
const { stationeryController } = require("../controllers");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");

const router = express.Router();

/** create stationery */
router.post(
  "/create-stationery",
  auth(),
  validate(stationeryValidation.createStationery),
  stationeryController.createStationery
);

/** Get stationery list */
router.get(
  "/list",
  auth(),
  validate(stationeryValidation.getStationeryList),
  stationeryController.getStationeryList
);

/** Delete stationery */
router.delete(
  "/delete-stationery/:stationeryId",
  auth(),
  validate(stationeryValidation.getDetails),
  stationeryController.deleteStationery
);

/** update stationey */
router.put(
  "/update-stationery/:stationeryId",
  auth(),
  validate(stationeryValidation.getDetails),
  stationeryController.updateStationery
);


module.exports = router;