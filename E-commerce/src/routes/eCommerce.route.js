const express = require("express");
const { ecommerceController } = require("../controllers")

const router = express.Router();

router.get(
    "/list",
    ecommerceController.getalllist
)

module.exports = router;

