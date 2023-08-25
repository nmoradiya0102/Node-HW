const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate  = require("../middlewares/validate");
// const router = require(".");
// const { category } = require("../models");

const router = express.Router()

router.get(
    "/list",
    validate(categoryValidation.getCategoryList),
    categoryController.categoryList
)

router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
)

router.delete(
    "/delete/:categoryId",
    categoryController.deleteRecord
  )

router.put(
  "/update-category/:categoryId",
  categoryController.updateCategory
)

module.exports = router;