const express = require("express");
const { travelValidation } = require("../validations");
const { travelController } = require("../controllers");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");

const router = express.Router();

/** create travel */
router.post(
  "/create-travel",
  auth(),
  validate(travelValidation.createTravel),
  travelController.createTravel
);

/** Get travel list */
router.get(
  "/list",
  auth(),
  validate(travelValidation.getTravelList),
  travelController.getTravelList
);

/** Delete travel */
router.delete(
  "/delete-travel/:travelId",
  auth(),
  validate(travelValidation.getDetails),
  travelController.deleteTravel
);


/** update travel */
router.put(
  "/update-travel/:travelId",
  auth(),
  validate(travelValidation.getDetails),
  travelController.updateTravel
);


module.exports = router;