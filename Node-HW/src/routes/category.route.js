const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate  = require("../middlewares/validate");
const auth = require("../middlewares/auth");

const router = express.Router()

/** get category list */
router.get(
    "/list",
    auth(),
    validate(categoryValidation.getCategoryList),
    categoryController.categoryList
)

 /** Create category  */
router.post(
    "/create-category",
    auth(),
    validate(categoryValidation.createCategory),
    categoryController.createCategory
)

/** Delete category */
router.delete(
    "/delete/:categoryId",
    auth(),
    categoryController.deleteRecord
  )

/** update category */
router.put(
  "/update-category/:categoryId",
  auth(),
  categoryController.updateCategory
);

module.exports = router;