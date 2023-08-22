const express = require("express");
const { categoryValidation } = require("../validations");
const { catrgoryController } = require("../controllers");
const validate  = require("../middlewares/validate");
// const router = require(".");
// const { category } = require("../models");

const router = express.Router()

router.get(
    "/list",
    // validate(categoryValidation.getCategoryList),
    catrgoryController.categoryList
)

router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    catrgoryController.createCategory
)

router.delete(
    "/delete/:categoryId",
    catrgoryController.deleteRecord
  )

router.put(
  "/update-category/:categoryId",
  catrgoryController.updateCategory
)

module.exports = router;