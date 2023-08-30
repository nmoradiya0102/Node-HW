const express = require("express");
const validate = require("../middlewares/validate.js");
const { mobileValidation } = require("../validation");
const { mobileController } = require("../controller");

const router = express.Router();


/** create mobile */
router.post(
    "/create-mobile",
    validate(mobileValidation.createmobile),
    mobileController.createmobile
)

/** get mobile list */
router.get(
    "/list",
    mobileController.getmobilelist
)

/** delete mobile */
router.delete(
    "/delete-mobile/:mobileId",
    mobileController.deletemobile
)

/** update mobile status */
router.put(
    "/update-mobile-state/:mobileId",
    mobileController.updatemobilestate
)

/** update mobile detail */
router.put(
    "/update-mobile/:mobileId",
    validate(mobileValidation.createmobile),
    mobileController.updatemobile
)


module.exports = router;