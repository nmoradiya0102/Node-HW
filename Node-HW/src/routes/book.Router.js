const express = require("express");
const router = express.Router();
const validation = require("../middlewares/validate");
const { bookvalidation } = require("../validations");
const { bookController } = require("../controllers");

router.post(
    "/create-book",
    validation(bookvalidation.create_book_validation),
    bookController.create_book_controller
)
router.get(
    "/list",
    bookController.get_book_Controller,
)

module.exports = router;