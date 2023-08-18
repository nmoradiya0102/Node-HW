const joi = require("joi");

const createCategory = {
    body : joi.object().keys({
        category_name : joi.string().required().trim(),
        category_desc : joi.string().required().trim()
    })
};

// const getCategoryList = {
//     query : Joi.object().keys({
//     search : Joi.string().trim().allow(""),
//     sortBy : Joi.string().trim().allow(""),
//     limit : Joi.number().integer().allow(""),
//     page : Joi.number().integer().allow(""),
//     }),
// };

module.exports = {
    createCategory,
    // getCategoryList
}
