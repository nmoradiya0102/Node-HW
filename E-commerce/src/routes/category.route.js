const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate = require("../middlewares/validate")

const router = express.Router()
router.get(
    "/list",
    categoryController.categorylist
)
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createcategory
)
router.delete(
    "/delete-category/:categoryId",
    categoryController.deletecategory
)

module.exports = router;