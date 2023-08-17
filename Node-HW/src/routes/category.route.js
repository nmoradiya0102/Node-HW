const express = require("express");
const { categoryValidation } = require("../validation");
const { catrgoryController } = require("../controllers");
const validate  = require("../middlewares/validate");
const router = require(".");
const { category } = require("../model");

const router = express.router()

router.get(
    "/list",
    validate(categoryValidation.getCategoryList),
    catrgoryController.categoryList
)

router.post(
    "/create-category",
    validate(categoryValidation.createcategory),
    catrgoryController.createCategory
)

module.exports = router;