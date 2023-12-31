const Joi = require("joi");

const createproduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_description: Joi.string().required().trim(),
        product_price: Joi.number().required()
    })
}

module.exports = {
    createproduct
}