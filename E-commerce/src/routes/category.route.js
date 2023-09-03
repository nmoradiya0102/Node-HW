const express = require("express");
const auth = require("../middlewares/auth");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate = require("../middlewares/validate")

const router = express.Router()
router.get(
    "/list",
    auth(),
    categoryController.categorylist
)

router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    auth(),
    categoryController.createcategory
)

router.put(
    "/update-category/:categoryId",
    categoryController.updateCategory
)

router.delete(
    "/delete-category/:categoryId",
    categoryController.deletecategory
)

module.exports = router;