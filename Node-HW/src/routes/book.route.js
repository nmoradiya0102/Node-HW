const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { bookValidation } = require("../validations");
const { bookController } = require("../controllers");
const auth = require("../middlewares/auth");

/** Create book */
router.post(
    "/create-book",
    auth(),
    validate(bookValidation.create_Book),
    bookController.create_Book,
);

/** get a book list */
router.get(
    "/list",
    auth(),
    validate(bookValidation.get_Book_List),
    bookController.get_Book_List,
);

/** Delete book */
router.delete(
    "/delete-book/:bookId",
    auth(),
    validate(bookValidation.get_Details),
    bookController.delete_Book
);

/**Update Book */
router.put(
    "/update-book/:bookId",
    auth(),
    validate(bookValidation.update_Book),
    bookController.update_Book
);

module.exports = router;