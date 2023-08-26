const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate  = require("../middlewares/validate");

const router = express.Router()

/** get category list */
router.get(
    "/list",
    validate(categoryValidation.getCategoryList),
    categoryController.categoryList
)
 /** Create category  */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
)

/** Delete category */
router.delete(
    "/delete/:categoryId",
    categoryController.deleteRecord
  )


/** update category */
router.put(
  "/update-category/:categoryId",
  categoryController.updateCategory
)

module.exports = router;