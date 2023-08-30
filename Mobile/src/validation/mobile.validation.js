const Joi = require("joi");

const createmobile = {
    body: Joi.object().keys({
        mobile_company_name : Joi.string().required().trim(),
        mobile_name : Joi.string().required().trim(),
        mobile_description : Joi.string().required().trim(),
        mobile_price : Joi.number().integer().required(),
    })
}

module.exports = {
    createmobile
}