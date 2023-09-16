const express = require("express");
const { jewelleryValidation } = require("../validations");
const { jewelleryController } = require("../controllers");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");

const router = express.Router();

/** create jewellery */
router.post(
  "/create-jewellery",
  auth(),
  validate(jewelleryValidation.createJewellery),
  jewelleryController.createJewellery
);

/** Get jewellery list */
router.get(
  "/list",
  auth(),
  validate(jewelleryValidation.getJewelleryList),
  jewelleryController.getJewelleryList
);

/** Delete jewellery */
router.delete(
  "/delete-jewellery/:jewelleryId",
  auth(),
  validate(jewelleryValidation.getDetails),
  jewelleryController.deleteJewellery
);

/** update Jewellery */
router.put(
  "/update-jewellery/:jewelleryId",
  auth(),
  validate(jewelleryValidation.getDetails),
  jewelleryController.updateJewellery
);

module.exports = router;