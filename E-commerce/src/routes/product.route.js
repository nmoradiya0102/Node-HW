const express = require("express");
const { productValidation } = require("../validations")
const { productController } = require("../controllers");
const validate = require("../middlewares/validate");
const router = express.Router();

router.post(
    "/create-product",
    validate(productValidation.createproduct),
    productController.createproduct
)
router.get(
    "/list",
    productController.getproductlist
)
router.delete(
    "/delete-product/:productId",
    productController.deleteproduct
)
module.exports = router