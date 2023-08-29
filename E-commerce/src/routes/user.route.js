const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require('../middlewares/validate');

const router = express.Router();
/** create user */
router.post(
    "/create-user",
    validate(userValidation.createuser),
    userController.createuser
);
/** Get user list */
router.get(
    "/list",
    validate(userValidation.getuserlist),
    userController.getuserlist
);
router.delete(
    "/delete-user/:userId",
    userController.deleteuser
)

module.exports = router;